import {Container,
  PageContent,
  Title,
  SeparateLine,
  ContentLists,
  CardsListTablet,
  FilterSidebar,
  TabletPageContent,
  Content} from './MainPageStyle';
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import DataCards from '../../Articles.json';
import Graphs from '../../Graphs.json';
import TabletFilter from '../../components/Tablet&Mobile/FilterComponent/Filter';
import { FILTER_OPTIONS } from '../../FiltersData';
import FilterContainer from '../../components/FilterContainer/FilterContainer';
import CardsList from '../../components/Lists/CardsList';
import GraphsList from '../../components/Lists/GraphList';
import Sidebar from '../../components/Sidebar/Sidebar';
import useWindowDimensions from '../../customHooks/useWindowDimensions';
import {Desktop} from '../../Devices';

const recentSearches = ["crypto", "soccer", "soccer"];


const MainPage: React.FC = () => {
  const [filterType, setFilterType] = useState(FILTER_OPTIONS.TOP);

  const [filterTabletOn, setFilterTabletOn] = useState(true);
  const { width } = useWindowDimensions();
  
  //fetch data from server
  // const [dataCards, setDataCards] = useState([])
  // const [dataGraphs, setDataGraphs] = useState([]);

  const renderDesktop = () => {
    return(
      <Container>
        <Navbar recentSearches={recentSearches} filterType={filterType} setFilterState={setFilterType}/>
            <PageContent>
              <FilterContainer filterType={filterType}/>
              <SeparateLine></SeparateLine>
              <Title>Top Headlines in Israel</Title>
              <ContentLists>
                <CardsList cardsList={DataCards}/>
                <GraphsList graphList={Graphs} />
              </ContentLists>
            </PageContent>
      </Container>
    );
  };

  const renderTablet = () => {
    return(
      <Container>
        <TabletPageContent showFilter={filterTabletOn}>
          {/* <Navbar search={navbarProps}/> */}
          <TabletFilter/>
          <Content>
            <Title>Top Headlines in Israel</Title>
            <CardsListTablet>
              <CardsList cardsList={DataCards} />
            </CardsListTablet>
          </Content>
        </TabletPageContent>
        <FilterSidebar>
          <Sidebar />
        </FilterSidebar>
      </Container>
    );
  };



  if(width > Desktop.minWidth){
    return renderDesktop();
  }
  return renderTablet();
}

export default MainPage;