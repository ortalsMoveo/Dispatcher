import RecentSearches,{Searches} from '../../Search/RecentSearches/RecentSearches';
import Search,{SearchProps} from '../Search/Search';
import {Container} from './SearchScreenStyle';
import { ClearProps } from '../../Clear/Clear';

interface SearchScreenProps  {
    searchProps: SearchProps;
    recentSearches: string[];
}
const clearButton: ClearProps={
    smallScreen: false,
  }

const SearchScreen = ({searchProps, recentSearches}: SearchScreenProps) => {
    return (
        <Container>
            <Search searchIcon={searchProps.searchIcon} icon={searchProps.icon}/>
             <RecentSearches recentSearches={recentSearches} clearButton={clearButton}/>
        </Container>
    );
}


export default SearchScreen;