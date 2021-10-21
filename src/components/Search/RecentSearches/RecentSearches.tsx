import {SearchResults,
    RecentSearchesContainer,
    RecentHead,
    RecentItem} from './RecentSearchesStyle';
import Clear from '../../Clear/Clear';

export interface Searches {
    recentSearches: string[];
}

const RecentSearches = ({recentSearches}: Searches) =>{
    return(
        <SearchResults>
            <RecentSearchesContainer>
                RECENT SEARCHES
                <Clear/>
            </RecentSearchesContainer>
            {recentSearches ? (recentSearches.map((item) => {
                return(
                    <RecentItem>
                        {item}
                        <img src="../../Icons/exit.svg" style={{ width: '10px'}}/>
                    </RecentItem>
                )})
            ) : null}
        </SearchResults>

    );
}

export default RecentSearches;