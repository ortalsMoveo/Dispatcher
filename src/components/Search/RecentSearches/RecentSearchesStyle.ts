import styled from 'styled-components';
import {white, lightBlue, GhostWhite, gray} from '../../../globalStyle';

export const SearchResults = styled.div`
    width: 100%;
    max-width: 400px;    
    background: ${white};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    color: ${lightBlue};
    padding: 10px;
    margin: 15px 0px;
    height: 132px;
    z-index: 1;
    @media (max-width: 767px){
        background: ${GhostWhite};
        width: 100%;
        padding: 5px;
    }
`;

export const RecentSearchesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`

export const RecentHead = styled.div`
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    color: ${lightBlue};
    
`;

export const RecentItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`

export const SeparateLine = styled.div`
    opacity: 0.5;
    border: 1px solid ${gray};
    height: 0px;
`;