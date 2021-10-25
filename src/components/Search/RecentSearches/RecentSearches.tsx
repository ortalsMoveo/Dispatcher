import {SearchResults,
    RecentSearchesContainer,
    RecentHead,
    RecentItem} from './RecentSearchesStyle';
import Clear,{ClearProps} from '../../Clear/Clear';

export interface Searches {
    recentSearches: string[];
    clearButton: ClearProps;
}

const RecentSearches = ({recentSearches, clearButton}: Searches) =>{
    return(
        <SearchResults>
            <RecentSearchesContainer>
                RECENT SEARCHES
                <Clear smallScreen={clearButton.smallScreen}/>
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