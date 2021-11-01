import { 
    SearchContainer, 
    SearchInput, 
    Container,
    SeparateLine, 
    SearchBox,
    FilterContainer
} from "./Style";
import Icon from '../Icon/Icon';
import Filter,{FilterProps} from '../Filter/Filter';
import RecentSearches from "./RecentSearches/RecentSearches";
import {useState} from 'react';
import { ClearProps } from '../Clear/Clear';
import SearchIcon from '../../assets/search.svg';
import { FILTER_OPTIONS } from '../../FiltersData';


export interface SearchProps {
    recentSearches: string[];
}
const clearButton: ClearProps={
    gotBackground: false,
}
const filterOptions = ["Top Headlines", "Everything"];

const filtersTypes = ["Top Headlines", "Everything"];

const Search = ( {recentSearches}: SearchProps) => {
    const [recentResults, setRecentResults] = useState(false);

    return(
        <Container >
            <SearchBox>
                <SearchContainer>
                    <Icon iconPath={SearchIcon}/>
                    <SearchInput placeholder="Search" onClick={() => setRecentResults(!recentResults)}></SearchInput>
                </SearchContainer>
                <FilterContainer>
                    {<SeparateLine></SeparateLine>}
                    <Filter 
                        filterText={FILTER_OPTIONS.TOP}
                        listItems={filterOptions}
                    /> 
                </FilterContainer>
            </SearchBox>
            {(recentResults) && 
                <RecentSearches 
                    recentSearches={recentSearches} 
                    clearButton={clearButton}
                /> 
            }
        </Container>
    ); 
}

export default Search;