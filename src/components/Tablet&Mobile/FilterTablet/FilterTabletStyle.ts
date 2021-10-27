import styled from 'styled-components';
import {white, gray, lightBlue, GhostWhite}from '../../../globalStyle';


export const Container = styled.div`
    background: ${white};
    display: flex;
    flex-direction: column;
    height: 799px;
    justify-content: space-between ;
    font-family: Roboto;
`;

export const FilterContent = styled.div`

`;
export const FilterTitle = styled.div`
    color: ${lightBlue};
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    padding: 10px;
    display: flex;
`;
export const FilterSearch = styled.span`
    display: flex;
    justify-content: space-between;
    padding: 7px; 
    color: ${lightBlue};
    font-family: Roboto;
    font-size: 14px;
    
`;

export const ButtonPosition = styled.div`
    background: ${GhostWhite};
    order: inherit;
    padding: 20px;
    display: flex;
    justify-content: center ;
`;

export const SeparateLine = styled.div`
    opacity: 0.5;
    border: 1px solid ${gray};
    height: 0px;
`;
export const IconStyle = styled.img`
    padding: 0px 4px;    
`
