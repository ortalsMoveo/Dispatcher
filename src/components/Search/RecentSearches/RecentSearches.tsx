import {SearchResults,
    RecentSearchesContainer,
    RecentHead,
    RecentItem} from './RecentSearchesStyle';
import Clear,{ClearProps} from '../../Clear/Clear';
import exitIcon from '../../../assets/exit.svg';
import React from 'react';

export interface RecentSearchesProps {
    recentSearches: string[];
    clearBackground?: ClearProps;
}

const RecentSearches = ({recentSearches, clearBackground}: RecentSearchesProps) =>{
    return(
        <SearchResults>
            <RecentSearchesContainer>
                RECENT SEARCHES
                <Clear gotBackground={clearBackground && clearBackground.gotBackground}/>
            </RecentSearchesContainer>
            {recentSearches?.map((item, i) => {
                return(
                    <RecentItem key={i}>
                        {item}
                        <img src={exitIcon} style={{ width: '10px'}}/>
                    </RecentItem>
                )})
            }
        </SearchResults>

    );
}

export default RecentSearches;