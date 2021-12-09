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
import exitIcon from "../../assets/exit.svg";

import { RootState } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { updateQ } from "../../store/filtersState";
import { updateFilterType } from "../../store/filterType";
import { updateRecentSearches } from "../../store/recentSearchesState";
export interface SearchProps {
  // filterType: FILTER_OPTIONS;
  // setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
  // currentFilter: CurrentFilters;
  // setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
  // recentSearchesQuerys: string[];
  // setRecentSearchesQuerys: Dispatch<React.SetStateAction<string[]>>;
}

const Search = ({}: // filterType,
// setFilterState,
// currentFilter,
// setCurrentFilter,
// recentSearchesQuerys,
// setRecentSearchesQuerys,
SearchProps) => {
  const filterType = useSelector(
    (state: RootState) => state.filterType.filterType
  );
  const recentSearchesQuerys = useSelector(
    (state: RootState) => state.recentSearchesState.recentSearches
  );

  const dispatch = useDispatch();

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
      dispatch(updateRecentSearches(currRecentSearches));
      // setRecentSearchesQuerys(currRecentSearches);
    }
    // const prevState = currentFilter;
    if (searchQuery !== "") {
      dispatch(updateQ(searchQuery));
      // setCurrentFilter({ ...prevState, q: searchQuery });
    } else {
      dispatch(updateQ(null));
      // setCurrentFilter({ ...prevState, q: null });
    }
    const prevSearches = JSON.parse(localStorage.getItem("RecentSearches")!);
    localStorage.setItem(
      "RecentSearches",
      JSON.stringify([...prevSearches, searchQuery])
    );
    dispatch(updateRecentSearches([...prevSearches, searchQuery]));

    // setRecentSearchesQuerys([...prevSearches, searchQuery]);
  };

  const clearQueryHandle = () => {
    setSearchQuery("");
    // const prevState = currentFilter;
    // setCurrentFilter({ ...prevState, q: null });
    dispatch(updateQ(null));
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
          {<SeparateLine />}
          <Filter
            filterText={filterType}
            listItems={filter}
            // setFilterState={setFilterState}
            navbarFilter={true}
            // currentFilter={currentFilter}
            // setCurrentFilter={setCurrentFilter}
          />
        </FilterContainer>
      </SearchBox>
      {inputClicked && (
        <RecentSearches
          recentSearches={recentSearchesQuerys}
          // recentSearchesQuerys={recentSearchesQuerys}
          // setRecentSearchesQuerys={setRecentSearchesQuerys}
        />
      )}
    </Container>
  );
};

export default Search;
