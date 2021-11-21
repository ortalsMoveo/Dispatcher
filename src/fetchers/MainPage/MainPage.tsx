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
} from "./MainPageStyle";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

import Graphs from "../../Graphs.json";
import TabletFilter from "../../components/Tablet&Mobile/FilterComponent/Filter";
import { FILTER_OPTIONS } from "../../FiltersData";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import CardsList from "../../components/Lists/CardsList";
import GraphsList from "../../components/Lists/GraphList";
import Sidebar from "../../components/Sidebar/Sidebar";
import useWindowDimensions from "../../customHooks/useWindowDimensions";
import MobileSearchScreen from "../../components/Tablet&Mobile/SearchScreen/SearchScreen";

import { getData } from "../../NetworkManager";
import NoSearchResults from "../../components/NoResults/NoSearchResults";

const recentSearches = ["crypto", "soccer", "soccer"];

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
  page: number | null;
}

const MainPage = () => {
  const DesktopSize = useWindowDimensions();
  const [filterType, setFilterType] = useState(FILTER_OPTIONS.TOP);
  const [filterMobileOn, setFilterMobileOn] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const [currentFilter, setCurrentFilter] = useState<CurrentFilters>({
    q: null, // Check if user anter query. if not render not data found
    pageSize: null,
    page: null,
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

  const [noMatch, setNoMatch] = useState(false);
  const [noQuery, setNoQuery] = useState(false);

  //fetch data from server
  const [dataCards, setDataCards] = useState([]);
  // const [dataGraphs, setDataGraphs] = useState([]);
  const [resultsText, setResultsText] = useState("");

  useEffect(() => {
    if (
      !currentFilter.topHeadlinesFilters.sources &&
      !currentFilter.topHeadlinesFilters.country &&
      !currentFilter.topHeadlinesFilters.category &&
      !currentFilter.q
    ) {
      setResultsText("Please select Filter or add an query!");
      setNoQuery(true);
    } else if (!(filterType === "Everything" && currentFilter.q === null)) {
      const fetchData = async () => {
        console.log("get in the request api");
        const res = await getData(currentFilter, filterType);
        setDataCards(res);
        if (res.length === 0) {
          console.log("No match to search query");
          setNoMatch(!noMatch);
        }
        if (noQuery) {
          setNoQuery(false);
        }
      };
      fetchData();
    } else {
      setResultsText("Please add an query!");
      setNoQuery(true);
    }
    console.log(currentFilter);
  }, [filterType, currentFilter]);


  const closeSidebar = () => {
    if (filterMobileOn) {
      setFilterMobileOn(false);
    }
  };

  const renderDesktop = () => {
    return (
      <Container>
        <Navbar
          recentSearches={recentSearches}
          filterType={filterType}
          setFilterState={setFilterType}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
        <PageContent>
          <FilterContainer
            filterType={filterType}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />

          <SeparateLine></SeparateLine>
          {!noQuery && dataCards.length > 0 && (
            <Title>Top Headlines in Israel</Title>
          )}
          <ContentLists>
            {!noQuery && dataCards.length > 0 ? (
              <CardsList cardsList={dataCards} />
            ) : (
              <NoSearchResults noQuery={noQuery} resultsText={resultsText} />
            )}

            <GraphsList graphList={Graphs} />
          </ContentLists>
        </PageContent>
      </Container>
    );
  };

  const renderTablet = () => {
    return (
      <Container>
        {mobileSearch ? (
          <MobileSearchScreen
            recentSearches={recentSearches}
            setMobileSearch={setMobileSearch}
          />
        ) : (
          <>
        <TabletPageContent showFilter={filterMobileOn} onClick={closeSidebar}>
          <Navbar
            recentSearches={recentSearches}
            filterType={filterType}
            setFilterState={setFilterType}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            setMobileSearch={setMobileSearch}
          />
          <TabletFilter setfilterState={setFilterMobileOn} />
          <Content>
            <Title>Top Headlines in Israel</Title>
            <CardsListTablet>
              <CardsList cardsList={dataCards} />
            </CardsListTablet>
          </Content>
        </TabletPageContent>
        <FilterSidebar showFilter={filterMobileOn}>
          <Sidebar
            filterType={filterType}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        </FilterSidebar>
              </>
        )}

      </Container>
    );
  };

  if (DesktopSize) {
    return renderDesktop();
  }
  return renderTablet();
};

export default MainPage;
