import {SearchResults,
    RecentSearchesContainer,
    RecentHead,
    RecentItem} from './RecentSearchesStyle';
import Clear,{ClearProps} from '../../Clear/Clear';
import exitIcon from '../../../assets/exit.svg';
import Icon from '../../Icon/Icon';

export interface Searches {
    recentSearches: string[];
    clearButton: ClearProps;
}

const RecentSearches = ({recentSearches, clearButton}: Searches) =>{
    return(
        <SearchResults>
            <RecentSearchesContainer>
                RECENT SEARCHES
                <Clear 
                    gotBackground={clearButton.gotBackground}
                    onClick={() => console.log('Clear all searches')}
                />
            </RecentSearchesContainer>
            {recentSearches?.map((item, i) => {
                return(
                    <RecentItem key={i}>
                        {item}
                        <Icon 
                            iconPath={exitIcon} 
                            onClick={() => console.log('Clear search')}
                            alt="exitIcon"
                        />
                    </RecentItem>
                )})
            }
        </SearchResults>

    );
}

export default RecentSearches;