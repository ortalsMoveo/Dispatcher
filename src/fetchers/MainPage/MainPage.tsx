import {
  Container,
  PageContent,
  Title,
  SeparateLine,
  ContentLists,
  CardsListTablet,
  FilterSidebar,
  TabletPageContent,
  Content,
  Loader,
  BackgroudContainer,
} from "./MainPageStyle";
import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../../components/Navbar/Navbar";

import Graphs from "../../Graphs.json";
import TabletFilter from "../../components/Tablet&Mobile/FilterComponent/TabletFilter";
import { FILTER_OPTIONS } from "../../FiltersData";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import CardsList from "../../components/Lists/CardsList";
import GraphsList from "../../components/Lists/GraphList";
import Sidebar from "../../components/Sidebar/Sidebar";
import useWindowDimensions from "../../customHooks/useWindowDimensions";
import MobileSearchScreen from "../../components/Tablet&Mobile/SearchScreen/SearchScreen";

import { getData } from "../../NetworkManager";
import NoSearchResults from "../../components/NoResults/NoSearchResults";

const recentSearches = ["crypto", "soccer", "bitcoin"]; // Todo -> const setstrate + get in &out to lkocal

export interface TopHeadlines {
  country: null | string;
  category: null | string;
  sources: null | string;
}
export interface Everything {
  from: null | string;
  to: null | string;
  language: null | string;
  sortBy: null | string;
  sources: null | string;
}
export interface CurrentFilters {
  q: null | string;
  topHeadlinesFilters: TopHeadlines;
  everythingFilters: Everything;
  pageSize: number | null;
  page: number;
}
let renders = 0;

export interface CardObj {
  author: string | null;
  content: string | null;
  description: string;
  publishedAt: string;
  source: {
    id: null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: null;
}

const MainPage = () => {
  const DesktopSize = useWindowDimensions();
  const [filterType, setFilterType] = useState(FILTER_OPTIONS.TOP);
  const [filterMobileOn, setFilterMobileOn] = useState<boolean>(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);

  const [currentFilter, setCurrentFilter] = useState<CurrentFilters>({
    q: null,
    pageSize: 10,
    page: 1,
    topHeadlinesFilters: {
      country: "il",
      category: null,
      sources: null,
    },
    everythingFilters: {
      from: null,
      to: null,
      language: null,
      sortBy: null,
      sources: null,
    },
  });
  const [firstDisplay, setFirstDisplay] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [noMatch, setNoMatch] = useState(false);
  const [noQuery, setNoQuery] = useState(false);
  const [dispalyText, setDisplayText] = useState(true);

  const [dataCards, setDataCards] = useState<CardObj[]>([]);
  const [resultsText, setResultsText] = useState("");
  const [recentSearchesQuerys, setRecentSearchesQuerys] = useState<string[]>(
    []
  );
  const [totalResults, seTtotalResults] = useState(1);

  useEffect(() => {
    if (recentSearchesQuerys.length === 0) {
      return;
    }
    if (firstDisplay) {
      const prevSearches = JSON.parse(localStorage.getItem("RecentSearches")!);

      localStorage.setItem(
        "RecentSearches",
        JSON.stringify(prevSearches.concat(recentSearchesQuerys))
      );
    }
  }, [recentSearchesQuerys]);

  useEffect(() => {
    if (
      !currentFilter.topHeadlinesFilters.sources &&
      !currentFilter.topHeadlinesFilters.country &&
      !currentFilter.topHeadlinesFilters.category &&
      !currentFilter.q
    ) {
      setResultsText("Please select Filter or add an query!");
      setNoQuery(true);
    } else if (
      !(filterType === "Everything" && currentFilter.q === null) ||
      (filterType === "Everything" &&
        currentFilter.everythingFilters.sources !== null)
    ) {
      setLoading(true);

      const fetchData = async () => {
        let currPage = currentFilter.page;
        if (currPage > 1) {
          const prevState = currentFilter;
          setCurrentFilter({ ...prevState, page: 1 });
          setHasMoreData(true);
        }
        setFirstDisplay(false);
        const res = await (currPage > 1
          ? getData(currentFilter, filterType, 1)
          : getData(currentFilter, filterType));
        setDataCards(res[1]);
        setLoading(false);
        if (res[1].length === 0) {
          setNoMatch(!noMatch);
        }
        if (noQuery) {
          setNoQuery(false);
        }
        seTtotalResults(res[0]);
      };
      fetchData();
      renders++;
      if (renders > 2) {
        setFirstRender(false);
      }
    } else {
      setResultsText("Please add an query");
      setNoQuery(true);
    }
  }, [
    filterType,
    currentFilter.everythingFilters,
    currentFilter.topHeadlinesFilters,
    currentFilter.q,
  ]);

  const closeSidebar = () => {
    if (filterMobileOn) {
      setFilterMobileOn(false);
    }
  };

  const fetchMoreData = async () => {
    setLoading(false);

    if (dataCards.length > 1000) {
      setHasMoreData(false);
      return;
    }
    let num = currentFilter.page;
    const numPage = num + 1;
    const prevState = currentFilter;
    const fetchData = async () => {
      setCurrentFilter({ ...prevState, page: numPage });
      const res = await getData(currentFilter, filterType, numPage);
      setDataCards([...dataCards, ...res[1]]);
      setLoading(false);
      if (res[1].length === 0) {
        setHasMoreData(false);
      }
      seTtotalResults(res[0]);
    };
    fetchData();
  };

  useEffect(() => {
    if (!noQuery && dataCards.length > 0) {
      setDisplayText(true);
    } else {
      setDisplayText(false);
    }
  }, [noQuery, dataCards]);

  useEffect(() => {
    const prevState = currentFilter;
    if (filterType === FILTER_OPTIONS.TOP) {
      setCurrentFilter({
        ...prevState,
        topHeadlinesFilters: {
          ...prevState.topHeadlinesFilters,
          country: "il",
        },
      });
    } else {
      setCurrentFilter({
        ...prevState,
      });
    }
  }, [filterType]);

  const renderDesktop = () => {
    return (
      <Container isLoading={isLoading}>
        <Navbar
          recentSearches={recentSearches}
          filterType={filterType}
          setFilterState={setFilterType}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          recentSearchesQuerys={recentSearchesQuerys}
          setRecentSearchesQuerys={setRecentSearchesQuerys}
        />
        <PageContent isLoading={isLoading} dispalyText={dispalyText}>
          <FilterContainer // out from this componrnt
            filterType={filterType}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <SeparateLine></SeparateLine>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {dispalyText && (
                <Title firstRender={firstRender}>
                  {firstRender
                    ? "Top Headlines in Israel"
                    : totalResults + " Total results"}
                </Title>
              )}
              <ContentLists>
                {!noQuery && dataCards.length > 0 ? (
                  <CardsList
                    cardsList={dataCards}
                    fetchMoreData={fetchMoreData}
                    hasMoreData={hasMoreData}
                  />
                ) : (
                  <NoSearchResults
                    noQuery={noQuery}
                    resultsText={resultsText}
                  />
                )}
                <GraphsList
                  noQuery={noQuery}
                  graphList={Graphs}
                  displayText={dispalyText}
                  cards={dataCards}
                />
              </ContentLists>
            </>
          )}
        </PageContent>
      </Container>
    );
  };

  const renderTablet = () => {
    return (
      <>
        {filterMobileOn && (
          <BackgroudContainer onClick={closeSidebar}></BackgroudContainer>
        )}
        <FilterSidebar showFilter={filterMobileOn}>
          <Sidebar
            filterType={filterType}
            setFilterType={setFilterType}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            setSidebarState={setFilterMobileOn}
          />
        </FilterSidebar>
        <Container isLoading={isLoading}>
          {mobileSearch ? (
            <MobileSearchScreen
              recentSearches={recentSearches}
              setMobileSearch={setMobileSearch}
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
              cardsList={dataCards}
              setfilterState={setFilterMobileOn}
              fetchMoreData={fetchMoreData}
              hasMoreData={hasMoreData}
              recentSearchesQuerys={recentSearchesQuerys}
              setRecentSearchesQuerys={setRecentSearchesQuerys}
              filterType={filterType}
              setFilterState={setFilterType}
            />
          ) : (
            <>
              <TabletPageContent
                showFilter={filterMobileOn}
                isLoading={isLoading}
                dispalyText={dispalyText}
              >
                <Navbar
                  recentSearches={recentSearches}
                  filterType={filterType}
                  setFilterState={setFilterType}
                  currentFilter={currentFilter}
                  setCurrentFilter={setCurrentFilter}
                  setMobileSearch={setMobileSearch}
                  recentSearchesQuerys={recentSearchesQuerys}
                  setRecentSearchesQuerys={setRecentSearchesQuerys}
                />
                <TabletFilter
                  setfilterState={setFilterMobileOn}
                  currentFilter={currentFilter}
                  setCurrentFilter={setCurrentFilter}
                  mobileSearch={true}
                  filterType={filterType}
                  setFilterState={setFilterType}
                />
                <Content>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <>
                      {dispalyText && (
                        <Title firstRender={firstRender}>
                          {firstRender
                            ? "Top Headlines in Israel"
                            : totalResults + " Total results"}
                        </Title>
                      )}
                      <CardsListTablet>
                        {!noQuery && dataCards.length > 0 ? (
                          <CardsList
                            cardsList={dataCards}
                            fetchMoreData={fetchMoreData}
                            hasMoreData={hasMoreData}
                          />
                        ) : (
                          <NoSearchResults
                            noQuery={noQuery}
                            resultsText={resultsText}
                          />
                        )}
                      </CardsListTablet>
                    </>
                  )}
                </Content>
              </TabletPageContent>
            </>
          )}
        </Container>
      </>
    );
  };

  if (DesktopSize) {
    return renderDesktop();
  }
  return renderTablet();
};

export default MainPage;
