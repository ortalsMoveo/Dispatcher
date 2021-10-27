import styled from 'styled-components';
import {white, darkBlueColor,lightBlue } from '../../globalStyle';

export const GraphContainer = styled.div`
    max-width: 400px;
    height: 18rem;
    background: ${white};
    border: 1px solid #D9DBE9;
    box-sizing: border-box;
    box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

export const Title = styled.h2`
    font-family: Roboto;
    font-weight: bold;
    font-size: 24px;
    color: ${darkBlueColor};
`;

export const LineRow  = styled.div`
    background: ${lightBlue};
    border: 2px solid ${lightBlue};
    width: 6%;
    border-radius: 10px;
    margin: 0px;
    padding: 0px;

`;

export const DataContainer = styled.div`
    margin: auto;
`;
