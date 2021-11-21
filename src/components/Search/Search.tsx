import {
  SearchContainer,
  SearchInput,
  Container,
  SeparateLine,
  SearchBox,
  FilterContainer,
} from "./Style";
import Filter from "../Filter/Filter";
import RecentSearches from "./RecentSearches/RecentSearches";
import React, { useState, Dispatch, useEffect } from "react";
import SearchIcon from "../../assets/search.svg";
import { FILTER_OPTIONS } from "../../FiltersData";
import { useDebounce } from "../../customHooks/useDebounce";
import { CurrentFilters } from "../../fetchers/MainPage/MainPage";
export interface SearchProps {
  recentSearches: string[];
  filterType: FILTER_OPTIONS;
  setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
}

const Search = ({
  recentSearches,
  filterType,
  setFilterState,
  currentFilter,
  setCurrentFilter,
}: SearchProps) => {
  const [recentResults, setRecentResults] = useState(false);
  const filterOptions =
    filterType === FILTER_OPTIONS.TOP
      ? [
          { id: "everything", name: FILTER_OPTIONS.EVERYTHING },
          { id: "top", name: FILTER_OPTIONS.TOP },
        ]
      : [
          { id: "top", name: FILTER_OPTIONS.TOP },
          { id: "everything", name: FILTER_OPTIONS.EVERYTHING },
        ];
  const filter = filterOptions;

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  useEffect(
    () => {
      const prevState = currentFilter;
      if (debouncedSearchTerm) {
        setCurrentFilter({ ...prevState, q: debouncedSearchTerm });
        console.log(debouncedSearchTerm);
      } else {
        setCurrentFilter({ ...prevState, q: null });
        console.log(debouncedSearchTerm);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  return (
    <Container>
      <SearchBox>
        <SearchContainer>
          <img
            src={SearchIcon}
            alt="searchIcon"
            style={{ width: "30px", height: "50px", padding: "0px 7px" }}
          />
          <SearchInput
            placeholder="Search"
            onClick={() => setRecentResults(!recentResults)}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></SearchInput>
        </SearchContainer>
        <FilterContainer>
          {<SeparateLine></SeparateLine>}
          <Filter
            filterText={filterType}
            listItems={filter}
            setFilterState={setFilterState}
            navbarFilter={true}
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
};


export default Search;
