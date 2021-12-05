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
import exitIcon from "../../assets/exit.svg";
export interface SearchProps {
  recentSearches: string[];
  filterType: FILTER_OPTIONS;
  setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
  recentSearchesQuerys: string[];
  setRecentSearchesQuerys: Dispatch<React.SetStateAction<string[]>>;
}

const Search = ({
  recentSearches,
  filterType,
  setFilterState,
  currentFilter,
  setCurrentFilter,
  recentSearchesQuerys,
  setRecentSearchesQuerys,
}: SearchProps) => {
  const [inputClicked, setInputClicked] = useState(false);
  const [currentFilterType, setCurrentFilterType] = useState(filterType);

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

  useEffect(() => {
    if (filterType !== currentFilterType) {
      setCurrentFilterType(filterType);
      setSearchQuery("");
    }
  }, [filterType]);

  const onSubmitSearchInput = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInputClicked(!inputClicked);
    if (!recentSearchesQuerys.includes(searchQuery)) {
      const currRecentSearches = [...recentSearchesQuerys, searchQuery];
      setRecentSearchesQuerys(currRecentSearches);
    }
    const prevState = currentFilter;
    if (searchQuery !== "") {
      setCurrentFilter({ ...prevState, q: searchQuery });
    } else {
      setCurrentFilter({ ...prevState, q: null });
    }
    const prevSearches = JSON.parse(localStorage.getItem("RecentSearches")!);
    localStorage.setItem(
      "RecentSearches",
      JSON.stringify([...prevSearches, searchQuery])
    );
    setRecentSearchesQuerys([...prevSearches, searchQuery]);
  };

  const clearQueryHandle = () => {
    setSearchQuery("");
    const prevState = currentFilter;
    setCurrentFilter({ ...prevState, q: null });
  };

  return (
    <Container onClickInput={inputClicked}>
      <SearchBox>
        <SearchContainer>
          <img
            src={SearchIcon}
            alt="searchIcon"
            style={{ width: "25px", height: "44px", padding: "0px 11px" }}
          />
          <form onSubmit={(e) => onSubmitSearchInput(e)}>
            <SearchInput
              placeholder="Search"
              value={searchQuery}
              onClick={() => setInputClicked(!inputClicked)}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClickInput={inputClicked}
            ></SearchInput>
          </form>
          {inputClicked && searchQuery !== "" && (
            <img
              src={exitIcon}
              onClick={clearQueryHandle}
              alt="exitIcon"
              style={{ width: "20px", margin: "13px" }}
            />
          )}
        </SearchContainer>
        <FilterContainer onClickInput={inputClicked}>
          {<SeparateLine></SeparateLine>}
          <Filter
            filterText={filterType}
            listItems={filter}
            setFilterState={setFilterState}
            navbarFilter={true}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        </FilterContainer>
      </SearchBox>
      {inputClicked && (
        <RecentSearches
          recentSearches={recentSearchesQuerys}
          recentSearchesQuerys={recentSearchesQuerys}
          setRecentSearchesQuerys={setRecentSearchesQuerys}
        />
      )}
    </Container>
  );
};

export default Search;
