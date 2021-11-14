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
import DataCards from "../../Articles.json";
import Graphs from "../../Graphs.json";
import TabletFilter from "../../components/Tablet&Mobile/FilterComponent/Filter";
import { FILTER_OPTIONS } from "../../FiltersData";
import FilterContainer from "../../components/FilterContainer/FilterContainer";
import CardsList from "../../components/Lists/CardsList";
import GraphsList from "../../components/Lists/GraphList";
import Sidebar from "../../components/Sidebar/Sidebar";
import useWindowDimensions from "../../customHooks/useWindowDimensions";
// import {getRequest} from "../../NetworkManager";
import axios from "axios";

const recentSearches = ["crypto", "soccer", "soccer"];

const MainPage = () => {
  const [filterType, setFilterType] = useState(FILTER_OPTIONS.TOP);
  const [filterMobileOn, setFilterMobileOn] = useState(false);
  const DesktopSize = useWindowDimensions();

  //fetch data from server
  // const [dataCards, setDataCards] = useState([])
  // const [dataGraphs, setDataGraphs] = useState([]);

  const getData = async () => {
    const { data } = await axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything`,
      params: {
        q: "Apple",
        from: "2021-11-14",
        sortBy: "popularity",
        apiKey: "544fffe00dc04e939fa1c75e7f91ba49",
      },
    });

    console.log(data);
  };

  useEffect(() => {
    // const cardsData = getRequest({url, filterType});    // console.log(cardsData);
    getData();
  }, [filterType]);

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
        />
        <PageContent>
          <FilterContainer filterType={filterType} />
          <SeparateLine></SeparateLine>
          <Title>Top Headlines in Israel</Title>
          <ContentLists>
            <CardsList cardsList={DataCards} />
            <GraphsList graphList={Graphs} />
          </ContentLists>
        </PageContent>
      </Container>
    );
  };

  const renderTablet = () => {
    return (
      <Container>
        <TabletPageContent showFilter={filterMobileOn} onClick={closeSidebar}>
          <Navbar
            recentSearches={recentSearches}
            filterType={filterType}
            setFilterState={setFilterType}
          />
          <TabletFilter setfilterState={setFilterMobileOn} />
          <Content>
            <Title>Top Headlines in Israel</Title>
            <CardsListTablet>
              <CardsList cardsList={DataCards} />
            </CardsListTablet>
          </Content>
        </TabletPageContent>
        <FilterSidebar showFilter={filterMobileOn}>
          <Sidebar />
        </FilterSidebar>
      </Container>
    );
  };

  if (DesktopSize) {
    return renderDesktop();
  }
  return renderTablet();
};

export default MainPage;
