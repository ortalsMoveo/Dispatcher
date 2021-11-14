import {Container,
  PageContent,
  Title,
  SeparateLine,
  ContentLists,
  CardsListTablet,
  FilterSidebar,
  TabletPageContent,
  Content} from './MainPageStyle';
import React, { useState } from 'react';
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
import MobileSearchScreen from '../../components/Tablet&Mobile/SearchScreen/SearchScreen';
const recentSearches = ["crypto", "soccer", "soccer"];


const MainPage = () => {
  const [filterType, setFilterType] = useState(FILTER_OPTIONS.TOP);
  const [filterMobileOn, setFilterMobileOn] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const DesktopSize = useWindowDimensions();
  
  //fetch data from server
  // const [dataCards, setDataCards] = useState([])
  // const [dataGraphs, setDataGraphs] = useState([]);

  const closeSidebar = () =>{
    if(filterMobileOn){
      setFilterMobileOn(false);
    }
  }
  
  if(mobileSearch) {
    console.log('mobile screen is on!');
    console.log(mobileSearch)
  }
  const renderDesktop = () => {
    return(
      <Container>
        <Navbar 
          recentSearches={recentSearches} 
          filterType={filterType} 
          setFilterState={setFilterType}
        />
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
        {mobileSearch ?
          <MobileSearchScreen
           recentSearches={recentSearches}
           setMobileSearch={setMobileSearch}/> : 
  
        <>
        <TabletPageContent showFilter={filterMobileOn} onClick={closeSidebar}>
          <Navbar recentSearches={recentSearches} setMobileSearch={setMobileSearch}/>
          <TabletFilter setfilterState={setFilterMobileOn}/>
          <Content >
            <Title>Top Headlines in Israel</Title>
            <CardsListTablet>
              <CardsList cardsList={DataCards} />
            </CardsListTablet>
          </Content>
        </TabletPageContent>
        <FilterSidebar showFilter={filterMobileOn}>
          <Sidebar />
        </FilterSidebar>
        </>
  }
      </Container>
    );
  };

  if(DesktopSize){
    return renderDesktop();
  }
  return renderTablet();
}

export default MainPage;