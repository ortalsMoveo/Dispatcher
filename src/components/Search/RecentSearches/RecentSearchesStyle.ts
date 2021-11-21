import styled from 'styled-components';
import {white, lightBlue, GhostWhite, gray} from '../../../globalStyle';

export const SearchResults = styled.div`
    width: 100%;
    background: ${white};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    color: ${lightBlue};
    padding: 10px;
    margin: 15px 0px;
    height: 132px;
    z-index: 1;
    @media (max-width: 480px){
        background: ${GhostWhite};
        padding: 10px;
        border-radius: 0px;
        margin: 0px;
        height: 90rem;

    }
`;

export const RecentSearchesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    @media (max-width: 480px){
        width: 100%;
        padding: 10px;
        margin: 0px;
        height: auto;
    }
`

export const RecentItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    @media (max-width: 480px){
        width: 100%;
        font-size: 14px;

    }
`

export const SeparateLine = styled.div`
    opacity: 0.5;
    border: 1px solid ${gray};
    height: 0px;
    @media (max-width: 480px){
        width: 100%;
    }
`;