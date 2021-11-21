
import RecentSearches from '../../Search/RecentSearches/RecentSearches';
import Search from '../Search/Search';
import {Container} from './SearchScreenStyle';
import React,{Dispatch} from 'react';

export interface SearchScreenProps  {
    recentSearches: string[];
    setMobileSearch: Dispatch<React.SetStateAction<boolean>>;
}

const SearchScreen = ({recentSearches, setMobileSearch}: SearchScreenProps) => {
    return (
        <Container>
            <Search setMobileSearch={setMobileSearch}/>
            <RecentSearches recentSearches={recentSearches} clearBackground={true}/>
        </Container>
    );
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
