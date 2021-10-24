import {Container, PageContent, Title, SeparateLine, CardsContent} from './MainPageStyle';
import Navbar from "../../components/Navbar/Navbar";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
import {ButtonProps} from '../../components/Button/Button';
import Graph,{ GraphProps } from '../../components/Graph/Graph';

const primaryButton: ButtonProps = {
  buttonType: 'primary',
  buttonText: 'NAVIGATE TO DISPATCH',
  icon: '../../Icons/Arrow - Right.svg',
  fullWidth: false
}
const cardText = {
  date: "Friday Jun 25, 2021",
  title: "Vaccination Operation is officially underway",
  sourcePath: "Walla.co.il",
  text: 'Simone has withdrawn from the event final for floor and will make a decision on beam later this week\" USA Gymnastics said. "\Either way, we\'re all behind you, Simone.'
}
const data =["#Covid-19", "Israel", "+2"];

const filter = {
    filterText: "Sources",
    listItems: ['Mako', 'Ynet', 'Walla', 'BBC'],
    iconPath: '../../Icons/dropdown.svg',
  }

const navbarProps = {
  icon: '../../Icons/search.svg',
  recentSearches: ["crypto", "soccer", "soccer"],
  filter: filter
}
// const graph: GraphProps = {
//   title: "Sources",
//   noDataToDisplay: '../../chart.svg',
// }

const MainPage = () => {
    return(
        <Container>
            <Navbar  search={navbarProps}/>
            <PageContent>
              <Filter 
                  filterText={filter.filterText}
                  listItems={filter.listItems}
                  iconPath={filter.iconPath} 
              />
              <SeparateLine></SeparateLine>
              <Title>Top Headlines in Israel</Title>
              <CardsContent>
                <Card 
                  imagePath='../../logo192.png' 
                  tags={data} buttonProps={primaryButton} 
                  cardData={cardText}
                  />
                {/* <Graph title={graph.title} data={graph.data} noDataToDisplay={graph.noDataToDisplay} /> */}

              </CardsContent>
            </PageContent>
            

        </Container>
    );
}

export default MainPage;