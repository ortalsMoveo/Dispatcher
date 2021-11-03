import {SearchResults,
    RecentSearchesContainer,
    RecentHead,
    RecentItem} from './RecentSearchesStyle';
import Clear,{ClearProps} from '../../Clear/Clear';
import exitIcon from '../../../assets/exit.svg';
import Icon from '../../Icon/Icon';
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
                <Clear 
                    gotBackground={clearBackground && clearBackground.gotBackground}
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