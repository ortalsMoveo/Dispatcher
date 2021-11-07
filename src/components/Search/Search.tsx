import { 
    SearchContainer, 
    SearchInput, 
    Container,
    SeparateLine, 
    SearchBox,
    FilterContainer
} from "./Style";
import Filter from '../Filter/Filter';
import RecentSearches from "./RecentSearches/RecentSearches";
import React,{useState, Dispatch} from 'react';
import SearchIcon from '../../assets/search.svg';
import { FILTER_OPTIONS } from '../../FiltersData';


export interface SearchProps {
    recentSearches: string[];
    filterType: FILTER_OPTIONS;
    setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>
}


const Search = ( {recentSearches, filterType, setFilterState}: SearchProps) => {
    const [recentResults, setRecentResults] = useState(false);
    const filterOptions = (filterType === FILTER_OPTIONS.TOP) ? FILTER_OPTIONS.EVERYTHING : FILTER_OPTIONS.TOP;
    const filter = [filterOptions];

    return(
        <Container > 
            <SearchBox>
                <SearchContainer>
                    <img src={SearchIcon}/>
                    <SearchInput placeholder="Search" onClick={() => setRecentResults(!recentResults)}></SearchInput>
                </SearchContainer>
                <FilterContainer>
                    {<SeparateLine></SeparateLine>}
                    <Filter 
                        filterText={filterType}
                        listItems={filter}
                        setFilterState={setFilterState}
                    /> 
                </FilterContainer>
            </SearchBox>
            {(recentResults) && 
                <RecentSearches 
                    recentSearches={recentSearches} 
                /> 
            }
        </Container>
    ); 
}

export default Search;