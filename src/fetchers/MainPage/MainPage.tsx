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
import React, { useState, useEffect } from "react";
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

import { RootState } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { updatePage } from "../../store/filtersState";
import { updateFiltersState } from "../../store/filtersState";
import { updateRecentSearches } from "../../store/recentSearchesState";

// export interface TopHeadlines {
//   country: null | string;
//   category: null | string;
//   sources: null | string;
// }
// export interface Everything {
//   from: null | string;
//   to: null | string;
//   language: null | string;
//   sortBy: null | string;
//   sources: null | string;
// }
// export interface CurrentFilters {
//   q: null | string;
//   topHeadlinesFilters: TopHeadlines;
//   everythingFilters: Everything;
//   pageSize: number | null;
//   page: number;
// }
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
  const currentFilterState = useSelector((state: RootState) => state.filters);
  console.log("currentFilterState", currentFilterState);
  const DesktopSize = useWindowDimensions();

  // const [filterType, setFilterType] = useState(FILTER_OPTIONS.TOP);
  const filterType = useSelector(
    (state: RootState) => state.filterType.filterType
  );

  const recentSearchesQuerys = useSelector(
    (state: RootState) => state.recentSearchesState.recentSearches
  );

  const page = useSelector((state: RootState) => state.filters.page);
  const dispatch = useDispatch();

  const [filterMobileOn, setFilterMobileOn] = useState<boolean>(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);

  // const [currentFilter, setCurrentFilter] = useState<CurrentFilters>({
  //   q: null,
  //   pageSize: 10,
  //   page: 1,
  //   topHeadlinesFilters: {
  //     country: "il",
  //     category: null,
  //     sources: null,
  //   },
  //   everythingFilters: {
  //     from: null,
  //     to: null,
  //     language: null,
  //     sortBy: null,
  //     sources: null,
  //   },
  // });
  const [firstDisplay, setFirstDisplay] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [noMatch, setNoMatch] = useState(false);
  const [noQuery, setNoQuery] = useState(false);
  const [dispalyText, setDisplayText] = useState(true);

  const [dataCards, setDataCards] = useState<CardObj[]>([]);
  const [resultsText, setResultsText] = useState("");
  // const [recentSearchesQuerys, setRecentSearchesQuerys] = useState<string[]>(
  //   []
  // );
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
      !currentFilterState.topHeadlinesFilters.sources &&
      !currentFilterState.topHeadlinesFilters.country &&
      !currentFilterState.topHeadlinesFilters.category &&
      !currentFilterState.q
    ) {
      setResultsText("Please select Filter or add an query!");
      setNoQuery(true);
    } else if (
      !(filterType === "Everything" && currentFilterState.q === null) ||
      (filterType === "Everything" &&
        currentFilterState.everythingFilters.sources !== null)
    ) {
      setLoading(true);

      const fetchData = async () => {
        let currPage = currentFilterState.page;
        if (currPage > 1) {
          dispatch(updatePage(1));
          // const prevState = currentFilterState;
          // setCurrentFilter({ ...prevState, page: 1 });
          setHasMoreData(true);
        }
        setFirstDisplay(false);
        const res = await (currPage > 1
          ? getData(currentFilterState, filterType, 1)
          : getData(currentFilterState, filterType));
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
    currentFilterState.everythingFilters,
    currentFilterState.topHeadlinesFilters,
    currentFilterState.q,
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
    // let num = currentFilter.page;
    let num = page;
    const numPage = num + 1;
    // const prevState = currentFilter;
    const fetchData = async () => {
      // setCurrentFilter({ ...prevState, page: numPage });
      dispatch(updatePage(numPage));
      const res = await getData(currentFilterState, filterType, numPage);
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
    // const prevState = currentFilterState;
    if (filterType === FILTER_OPTIONS.TOP) {
      dispatch(
        updateFiltersState({ type: "top", key: "country", value: "il" })
      );
      // setCurrentFilter({
      //   ...prevState,
      //   topHeadlinesFilters: {
      //     ...prevState.topHeadlinesFilters,
      //     country: "il",
      //   },
      // });

      // ***********check this else statement!*******
    } else {
      // setCurrentFilter({
      //   ...prevState,
      // });
    }
  }, [filterType]);

  const renderDesktop = () => {
    return (
      <Container isLoading={isLoading}>
        <Navbar
        // filterType={filterType}
        // setFilterState={setFilterType}
        // currentFilter={currentFilter}
        // setCurrentFilter={setCurrentFilter}
        // recentSearchesQuerys={recentSearchesQuerys} // need to enter to store
        // setRecentSearchesQuerys={setRecentSearchesQuerys}
        />
        <PageContent isLoading={isLoading} dispalyText={dispalyText}>
          <FilterContainer
          // filterType={filterType}
          // currentFilter={currentFilter}
          // setCurrentFilter={setCurrentFilter}
          />
          <SeparateLine />
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
            // filterType={filterType}
            // setFilterType={setFilterType}
            // currentFilter={currentFilter}
            // setCurrentFilter={setCurrentFilter}
            setSidebarState={setFilterMobileOn}
          />
        </FilterSidebar>
        <Container isLoading={isLoading}>
          {mobileSearch ? (
            <MobileSearchScreen
              setMobileSearch={setMobileSearch}
              // currentFilter={currentFilter}
              // setCurrentFilter={setCurrentFilter}
              cardsList={dataCards}
              setfilterState={setFilterMobileOn}
              fetchMoreData={fetchMoreData}
              hasMoreData={hasMoreData}
              // recentSearchesQuerys={recentSearchesQuerys}
              // setRecentSearchesQuerys={setRecentSearchesQuerys}
              // filterType={filterType}
              // setFilterState={setFilterType}
            />
          ) : (
            <>
              <TabletPageContent
                showFilter={filterMobileOn}
                isLoading={isLoading}
                dispalyText={dispalyText}
              >
                <Navbar
                  // filterType={filterType}
                  // setFilterState={setFilterType}
                  // currentFilter={currentFilter}
                  // setCurrentFilter={setCurrentFilter}
                  setMobileSearch={setMobileSearch}
                  // recentSearchesQuerys={recentSearchesQuerys}
                  // setRecentSearchesQuerys={setRecentSearchesQuerys}
                />
                <TabletFilter
                  setfilterState={setFilterMobileOn}
                  // currentFilter={currentFilter}
                  // setCurrentFilter={setCurrentFilter}
                  mobileSearch={true}
                  // filterType={filterType}
                  // setFilterState={setFilterType}
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
