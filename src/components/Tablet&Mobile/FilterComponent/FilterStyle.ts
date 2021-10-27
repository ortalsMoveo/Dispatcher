import styled from 'styled-components';
import {white, gray, lightBlue}from '../../../globalStyle';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background: ${white};
    border: 1px solid ${gray};
    box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
    border-radius: 0px;

`;


export const Sort = styled.div`
    display: flex;
    justify-content: space-around;
    width: 15%;
    color: ${lightBlue};
    font-family: Roboto;
    height: 1rem;
    margin: 5px;
    font-size: 16px;
`;

