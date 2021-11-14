import RecentSearches from "../../Search/RecentSearches/RecentSearches";
import Search, { SearchProps } from "../Search/Search";
import { Container } from "./SearchScreenStyle";
import React from "react";

interface SearchScreenProps {
  searchProps: SearchProps;
  recentSearches: string[];
}

const SearchScreen = ({ searchProps, recentSearches }: SearchScreenProps) => {
  return (
    <Container>
      <Search icon={searchProps.icon} />
      <RecentSearches recentSearches={recentSearches} />
    </Container>
  );
};

export default SearchScreen;
