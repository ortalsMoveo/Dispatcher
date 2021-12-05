import { Container, SearchContainer, Input } from "./SearchStyle";
import backIcon from "../../../assets/back.svg";
import exitIcon from "../../../assets/exit.svg";
import { SearchResults } from "../../NoResults/NoSearchResults";
import React, { Dispatch, useState, useEffect } from "react";
import { useDebounce } from "../../../customHooks/useDebounce";
import { CurrentFilters } from "../../../fetchers/MainPage/MainPage";
import SearchIcon from "../../../assets/search.svg";

export interface SearchProps {
  setMobileSearch: Dispatch<React.SetStateAction<boolean>>;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
  hasResults: boolean;
  recentSearchesQuerys: string[];
  setRecentSearchesQuerys: Dispatch<React.SetStateAction<string[]>>;
}
const Search = ({
  setMobileSearch,
  currentFilter,
  setCurrentFilter,
  hasResults,
  recentSearchesQuerys,
  setRecentSearchesQuerys,
}: SearchProps) => {
  const [userInput, setUserInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeInputhandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setUserInput(true);
  };
  const [icon, setIcon] = useState(exitIcon);
  const [inputVal, setInputVal] = useState(false);

  useEffect(() => {
    const prevState = currentFilter;

    setCurrentFilter({ ...prevState, q: null });
  }, []);

  const onSubmitSearchInput = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!recentSearchesQuerys.includes(searchQuery)) {
      const currRecentSearches = [...recentSearchesQuerys, searchQuery];
      setRecentSearchesQuerys(currRecentSearches);
    }
    const prevState = currentFilter;
    if (searchQuery !== "") {
      setCurrentFilter({ ...prevState, q: searchQuery });
    } else {
      setCurrentFilter({ ...prevState, q: null });
      setUserInput(false);
    }
    setIcon(SearchIcon);
    setInputVal(true);
  };

  const clearQuery = () => {
    setSearchQuery("");
    setIcon(exitIcon);
    setInputVal(false);
  };

  const goBack = () => {
    setMobileSearch(false);
    setInputVal(false);
    setUserInput(false);
  };
  return (
    <Container>
      <SearchContainer>
        <img
          src={backIcon}
          onClick={goBack}
          alt="backIcon"
          style={{ width: "30px" }}
        />
        <form onSubmit={(e) => onSubmitSearchInput(e)}>
          <Input
            placeholder="Search"
            value={!inputVal ? searchQuery : `"${searchQuery.toUpperCase()}"`}
            onChange={(e) => onChangeInputhandle(e)}
          />
        </form>
      </SearchContainer>
      {userInput && (
        <img
          src={icon}
          onClick={clearQuery}
          alt="exitIcon"
          style={{ width: "30px" }}
        />
      )}
    </Container>
  );
};

export default Search;
