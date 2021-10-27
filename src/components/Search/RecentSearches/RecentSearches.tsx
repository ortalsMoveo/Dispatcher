import {SearchResults,
    RecentSearchesContainer,
    RecentHead,
    RecentItem} from './RecentSearchesStyle';
import Clear,{ClearProps} from '../../Clear/Clear';
import exitIcon from '../../../assets/exit.svg';

export interface Searches {
    recentSearches: string[];
    clearButton: ClearProps;
}

const RecentSearches = ({recentSearches, clearButton}: Searches) =>{
    return(
        <SearchResults>
            <RecentSearchesContainer>
                RECENT SEARCHES
                <Clear gotBackground={clearButton.gotBackground}/>
            </RecentSearchesContainer>
            {recentSearches?.map((item) => {
                return(
                    <RecentItem>
                        {item}
                        <img src={exitIcon} style={{ width: '10px'}}/>
                    </RecentItem>
                )})
            }
        </SearchResults>

    );
}

export default RecentSearches;