import {SearchResults,
    RecentSearchesContainer,
    RecentHead,
    RecentItem, 
    SeparateLine} from './RecentSearchesStyle';
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
                <Clear 
                    gotBackground={clearBackground && clearBackground.gotBackground}
                    onClick={() => console.log('Clear all searches')}
                />
            </RecentSearchesContainer>
            {recentSearches?.map((item, i) => {
                return(
                    <div key={i}>
                        <RecentItem>
                            {item}
                            <img 
                                src={exitIcon} 
                                onClick={() => console.log('Clear search')}
                                alt="exitIcon"
                            />
                        </RecentItem>
                        <SeparateLine></SeparateLine>
                    </div>
                )})
            }
        </SearchResults>

    );
}

export default RecentSearches;