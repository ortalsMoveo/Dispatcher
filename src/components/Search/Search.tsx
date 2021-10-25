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
import React,{useState} from 'react';
import { ClearProps } from '../Clear/Clear';

export type Search = {
    icon: string;
}

export interface SearchProps {
    icon: string;
    recentSearches: string[];
    filter?: FilterProps;
}
const clearButton: ClearProps={
    smallScreen: false,
  }

const Search = ({icon, recentSearches, filter}: SearchProps) => {
    const [recentResults, setRecentResults] = useState(false);

    return(
        <Container >
            <SearchBox>
                <SearchContainer>
                    <Icon iconPath={icon}/>
                    <SearchInput placeholder="Search" onClick={() => setRecentResults(!recentResults)}></SearchInput>
                </SearchContainer>
                <FilterContainer>
                    {filter? 
                    <SeparateLine></SeparateLine>
                        : null
                    }
                    {filter? 
                        <Filter 
                            filterText={filter.filterText}
                            listItems={filter.listItems}
                            iconPath={filter.iconPath} 
                        /> : null
                }
                </FilterContainer>
            </SearchBox>
            {(recentResults) ? 
                <RecentSearches 
                    recentSearches={recentSearches} 
                    clearButton={clearButton}
                /> : null
            }
        </Container>
    ); 
}

export default Search;