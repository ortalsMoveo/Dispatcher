import RecentSearches,{Searches} from '../../Search/RecentSearches/RecentSearches';
import Search,{SearchProps} from '../Search/Search';
import {Container} from './SearchScreenStyle';
import { ClearProps } from '../../Clear/Clear';

interface SearchScreenProps  {
    searchProps: SearchProps;
    recentSearches: string[];
}
const clearButton: ClearProps={
    gotBackground: false,
  }

const SearchScreen = ({searchProps, recentSearches}: SearchScreenProps) => {
    return (
        <Container>
            <Search icon={searchProps.icon}/>
             <RecentSearches recentSearches={recentSearches} clearButton={clearButton}/>
        </Container>
    );
}


export default SearchScreen;