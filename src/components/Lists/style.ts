import styled from 'styled-components';
import {BlueBuzz} from '../../globalStyle';

export const CardsContainer = styled.div`
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
    }
    ::-webkit-scrollbar {
        background: ${BlueBuzz};
        height: 50px;
    }   
    height: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const GraphsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 15px;

`;