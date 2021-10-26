import {Container,
  PageContent,
  Title,
  SeparateLine,
  CardsContent,
  FilterContainer,
  CardsList,
  GraphList,
  CardsListTablet,
  Main,
  FilterSidebar,
Tablet,
Content} from './MainPageStyle';

import Navbar from "../../components/Navbar/Navbar";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import {ButtonProps} from '../../components/Button/Button';
import Graph from '../../components/Graph/Graph';
import DataCards from '../../Articles.json';
import Graphs from '../../Graphs.json';
import TabletFilter from '../../components/Tablet&Mobile/FilterComponent/Filter';
import FilterTablet from '../../components/Tablet&Mobile/FilterTablet/FilterTablet';
const primaryButton: ButtonProps = {
  buttonType: 'primary',
  buttonText: 'NAVIGATE TO DISPATCH',
  icon: '../../Icons/Arrow - Right.svg',
  fullWidth: false
}

const data =["#Covid-19", "Israel", "+2"];

const filter = {
    filterText: "Top Headlines",
    listItems: ['Mako', 'Ynet', 'Walla', 'BBC'],
    iconPath: '../../Icons/dropdown.svg',
  }

const navbarProps = {
  icon: '../../Icons/search.svg',
  recentSearches: ["crypto", "soccer", "soccer"],
  filter: filter
}
const navbarPropsTablet = {
  icon: '../../Icons/search.svg',
  recentSearches: ["crypto", "soccer", "soccer"],
}
const downArrow = '../../Icons/dropdown.svg' 
const icon = '../../Icons/filter.svg' 

interface MainPage {
  device: string;
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

const MainPage = ({device}: MainPage) => {
  const filterTabletOn = false;
  let desktop = null;
  let tablet = null;

  if(device === 'Desktop'){
    desktop = (
      <div>
        <Navbar search={navbarProps}/>
            <PageContent>
              <FilterContainer>
                <Filter 
                    filterText={filter.filterText}
                    listItems={filter.listItems}
                    iconPath={filter.iconPath} 
                />
                <Filter 
                    filterText={filter.filterText}
                    listItems={filter.listItems}
                    iconPath={filter.iconPath} 
                />
                  <Filter 
                    filterText={filter.filterText}
                    listItems={filter.listItems}
                    iconPath={filter.iconPath} 
                />
              </FilterContainer>
              <SeparateLine></SeparateLine>
              <Title>Top Headlines in Israel</Title>
              <CardsContent>
                <CardsList>
                  {DataCards.map((card) => (
                    <Card 
                      imagePath={card.urlToImage} 
                      tags={data} buttonProps={primaryButton} 
                      cardData={{
                        date: card.publishedAt,
                        title: card.title,
                        sourcePath: card.source.name,
                        text: card.description
                      }}
                      />
                  ))}
                </CardsList>
                <GraphList>
                  {Graphs.map((item) => (
                    <Graph title={item.title} data={item.data} noDataToDisplay={item.noDataToDisplay} />
                  ))}
                </GraphList>
              </CardsContent>
            </PageContent>
      </div>
    )
  }
  else{
    tablet = (
      <Tablet>
        <Main showFilter={filterTabletOn}>
          <Navbar search={navbarPropsTablet}/>
          <TabletFilter sortbyIcon={downArrow} icon={icon}/>
          <Content>
            <Title>Top Headlines in Israel</Title>
            <CardsListTablet>
              {DataCards.map((card) => (
                <Card 
                  imagePath={card.urlToImage} 
                  tags={data} buttonProps={primaryButton} 
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
        </Main>
        {filterTabletOn ? 
          <FilterSidebar>
                    <FilterTablet 
                      title={FilterTabletData.title}
                      list={FilterTabletData.list}
                      button={FilterTabletData.button}
                      subFilter={FilterTabletData.subFilter}  />
          </FilterSidebar> : null
        }
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