import { 
    SearchContainer, 
    SearchInput, 
    Container,
    SeparateLine, 
    SearchBox
} from "./Style";
import Icon from '../Icon/Icon';
import Filter,{FilterProps} from '../Filter/Filter';
import RecentSearches from "./RecentSearches/RecentSearches";

export type Search = {
    icon: string;
}

export interface SearchProps {
    icon: string;
    recentSearches: string[];
    filter: FilterProps;
}

const Search = ({icon, recentSearches, filter}: SearchProps) => {
    return(
        <Container >
            <SearchBox>
                <SearchContainer>
                    <Icon iconPath={icon}/>
                    <SearchInput placeholder="Search"></SearchInput>
                </SearchContainer>
                <SeparateLine></SeparateLine>
                <Filter 
                    filterText={filter.filterText}
                    listItems={filter.listItems}
                    iconPath={filter.iconPath} 
                />
            </SearchBox>
            <RecentSearches recentSearches={recentSearches} />
        </Container>
    ); 
}

export default Search;