import {Container,
  PageContent,
  Title,
  SeparateLine,
  ContentLists,
  FilterContainer,
  CardsList,
  GraphsList,
  CardsListTablet,
  FilterSidebar,
  TabletPageContent,
  Tablet,
  Content} from './MainPageStyle';
import { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import Graph from '../../components/Graph/Graph';
import DataCards from '../../Articles.json';
import Graphs from '../../Graphs.json';
import TabletFilter from '../../components/Tablet&Mobile/FilterComponent/Filter';
import { HeadLinesFilters, EverythingFilters,FILTER_OPTIONS } from '../../FiltersData';
import FilterTablet from '../../components/Tablet&Mobile/FilterTablet/FilterTablet';
import {ButtonProps} from '../../components/Button/Button';
const data =["#Covid-19", "Israel", "+2"];

const navbarProps = {
  recentSearches: ["crypto", "soccer", "soccer"],
}

const subFilterList = [
  {categoryName: "Sources", categoryOption: "All"},
  {categoryName: "Language", categoryOption: "All"}, 
  {categoryName: "Dates", categoryOption: "All"}, 
];
const filterTablet: ButtonProps = {
  buttonType: 'primary',
  buttonText: 'VIEW RESULTS',
  fullWidth: false
}
const FilterTabletData = {
  title: "FILTER",
  list: subFilterList,
  button: filterTablet,
  subFilter: false
}

interface MainPage {
  device: string;
}

const MainPage = ({device}: MainPage) => {
  const [filterType, setFilterType] = useState(FILTER_OPTIONS.EVERYTHING);
  const [filterTabletOn, setFilterTabletOn] = useState(true);

  let desktop = null;
  let tablet = null;
  let filterList = null;

  if(filterType === FILTER_OPTIONS.TOP){
    filterList = HeadLinesFilters;
  } 
  else{
    filterList = EverythingFilters;
  }
  if(device === 'Desktop'){
    desktop = (
      <div>
        <Navbar search={navbarProps}/>
            <PageContent>
              <FilterContainer>
                {filterList.map(item => (
                  <Filter 
                    filterText={item.name}
                    listItems={item.list}
                    date={item.date}
                  />
                ))}
              </FilterContainer>
              <SeparateLine></SeparateLine>
              <Title>Top Headlines in Israel</Title>
              <ContentLists>
                <CardsList>
                  {DataCards.map((card) => (
                    <Card 
                      imagePath={card.urlToImage} 
                      tags={data} 
                      cardData={{
                      date: card.publishedAt,
                      title: card.title,
                      sourcePath: card.source.name,
                      text: card.description
                      }}
                      />
                  ))}
                </CardsList>
                <GraphsList>
                  {Graphs.map((item) => (
                    <Graph 
                      title={item.title} 
                      data={item.data} 
                      noDataToDisplay={item.noDataToDisplay} />
                  ))}
                </GraphsList>
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
              {DataCards.map((card) => (
                <Card 
                  key={card.title}
                  imagePath={card.urlToImage} 
                  tags={data} 
                  cardData={{
                  date: card.publishedAt,
                  title: card.title,
                  sourcePath: card.source.name,
                  text: card.description
                  }}
                  />
              ))}
            </CardsListTablet>
          </Content>
        </TabletPageContent>
        <FilterSidebar>
          {filterTabletOn && 
            <FilterTablet 
              title={FilterTabletData.title}
              list={FilterTabletData.list}
              button={FilterTabletData.button}
              subFilter={FilterTabletData.subFilter}  
            /> 
          }
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