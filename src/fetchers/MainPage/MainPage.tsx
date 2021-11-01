import {Container,
  PageContent,
  Title,
  SeparateLine,
  ContentLists,
  CardsListTablet,
  FilterSidebar,
  TabletPageContent,
  Tablet,
  Content} from './MainPageStyle';
import { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import DataCards from '../../Articles.json';
import Graphs from '../../Graphs.json';
import TabletFilter from '../../components/Tablet&Mobile/FilterComponent/Filter';
import { FILTER_OPTIONS } from '../../FiltersData';
import FilterContainer from '../../components/FilterContainer/FilterContainer';
import CardsList from '../../components/Lists/CardsList';
import GraphsList from '../../components/Lists/GraphList';
import Sidebar from '../../components/Sidebar/Sidebar';

const navbarProps = {
  recentSearches: ["crypto", "soccer", "soccer"],
}

interface MainPage {
  device: string;
}

const MainPage = ({device}: MainPage) => {
  const [filterType, setFilterType] = useState(FILTER_OPTIONS.TOP);
  const [filterTabletOn, setFilterTabletOn] = useState(true);

  let desktop = null;
  let tablet = null;
  console.log(DataCards)
  if(device === 'Desktop'){
    desktop = (
      <div>
        <Navbar search={navbarProps}/>
            <PageContent>
              <FilterContainer filterType={filterType}/>
              <SeparateLine></SeparateLine>
              <Title>Top Headlines in Israel</Title>
              <ContentLists>
                <CardsList cardsList={DataCards}/>
                <GraphsList graphList={Graphs} />
              </ContentLists>
            </PageContent>
      </div>
    )
  }
  else{
    tablet = (
      <Tablet>
        <TabletPageContent showFilter={filterTabletOn}>
          <Navbar search={navbarProps}/>
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
      </Tablet>
    )
  }
  
  return(
        <Container>
            {desktop}
            {tablet}
        </Container>
    );
}

export default MainPage;