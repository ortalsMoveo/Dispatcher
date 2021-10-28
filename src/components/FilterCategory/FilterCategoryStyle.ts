import styled from 'styled-components';
import {white, lightBlue} from '../../globalStyle';

export const Category = styled.div`
    background: ${white};
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    :hover {
        background: rgba(90, 90, 137, 0.05);
    }
    font-family: Roboto;
    font-size: 14px;
`;

export const Name = styled.span`
    padding: 5px; 
    color: ${lightBlue};   
`;

export const Option = styled.span`
    padding: 5px;    
    color: rgba(90, 90, 137, 0.5);
`;