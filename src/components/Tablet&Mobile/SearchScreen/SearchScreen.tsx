import RecentSearches,{Searches} from '../../Search/RecentSearches/RecentSearches';
import Search,{SearchProps} from '../Search/Search';
import {Container} from './SearchScreenStyle';

interface SearchScreenProps  {
    searchProps: SearchProps;
    recentSearches: string[];
}

const SearchScreen = ({searchProps, recentSearches}: SearchScreenProps) => {
    return (
        <Container>
            <Search searchIcon={searchProps.searchIcon} icon={searchProps.icon}/>
            <RecentSearches recentSearches={recentSearches}/>
        </Container>
    );
}


export default SearchScreen;