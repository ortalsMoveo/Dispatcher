import RecentSearches from "../../Search/RecentSearches/RecentSearches";
import Search from "../Search/Search";
import { Container } from "./SearchScreenStyle";
import React, { Dispatch, useEffect, useState } from "react";
import { CardObj, CurrentFilters } from "../../../fetchers/MainPage/MainPage";
import CardsList from "../../Lists/CardsList";
import NoSearchResults from "../../NoResults/NoSearchResults";
import TabletFilter from "../FilterComponent/TabletFilter";
import InfiniteScroll from "react-infinite-scroll-component";
import { FILTER_OPTIONS } from "../../../FiltersData";

export interface SearchScreenProps {
  recentSearches: string[];
  setMobileSearch: Dispatch<React.SetStateAction<boolean>>;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
  cardsList: CardObj[];
  setfilterState: Dispatch<boolean>;
  fetchMoreData: () => void;
  hasMoreData: boolean;
  recentSearchesQuerys: string[];
  setRecentSearchesQuerys: Dispatch<React.SetStateAction<string[]>>;
  filterType: FILTER_OPTIONS;
  setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
}

const SearchScreen = ({
  recentSearches,
  setMobileSearch,
  currentFilter,
  setCurrentFilter,
  cardsList,
  setfilterState,
  fetchMoreData,
  hasMoreData,
  recentSearchesQuerys,
  setRecentSearchesQuerys,
  filterType,
  setFilterState,
}: SearchScreenProps) => {
  const [results, setResults] = useState<any>(
    cardsList.length > 0 ? true : false
  );
  useEffect(() => {
    if (cardsList.length > 0) {
      setResults(true);
    } else {
      setResults(false);
    }
  }, [cardsList]);

  return (
    <Container results={results}>
      <Search
        setMobileSearch={setMobileSearch}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        hasResults={results}
        recentSearchesQuerys={recentSearchesQuerys}
        setRecentSearchesQuerys={setRecentSearchesQuerys}
      />
      {currentFilter.q && results ? (
        <>
          <TabletFilter
            setfilterState={setfilterState}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            filterType={filterType}
            setFilterState={setFilterState}
          />
          <div style={{ margin: "20px" }}>
            <CardsList
              cardsList={cardsList}
              fetchMoreData={fetchMoreData}
              hasMoreData={hasMoreData}
            />
          </div>
        </>
      ) : currentFilter.q && !results ? (
        <>
          <TabletFilter
            setfilterState={setfilterState}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            filterType={filterType}
            setFilterState={setFilterState}
          />
          <NoSearchResults />
        </>
      ) : (
        <RecentSearches
          recentSearches={recentSearchesQuerys}
          clearBackground={true}
          recentSearchesQuerys={recentSearchesQuerys}
          setRecentSearchesQuerys={setRecentSearchesQuerys}
        />
      )}
    </Container>
  );
};

export default SearchScreen;
