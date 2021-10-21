import styled from 'styled-components';
import {white} from '../../globalStyle';

export const Container = styled.div`
    background: ${white};
    border-radius: 10px;
    width: 40%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    height: 2.5rem;
    padding: 5px;
    margin: 5px;
`;
    
export const SearchBox = styled.div`
    display: flex;
    justify-content: space evenly;
`;
export const SearchContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    margin: 3%;
    width: 60%;
    max-width: 230px;
`;

export const SearchInput = styled.input`
    width: 70%;
    max-width: 200px;
    border: none;
    color: rgba(90, 90, 137, 0.5);
    font-family: Roboto;

    `;


export const SeparateLine = styled.div`
opacity: 0.5;
border: 0.1px solid #D9DBE9;
width: 0;

`;

