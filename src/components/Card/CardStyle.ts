import styled from 'styled-components';
import {white, gray, darkBlueColor, lightBlue} from '../../globalStyle';

export const CardContainer = styled.div`
    background: ${white};
    border-radius: 20px;
    border: 1px solid ${gray};
    display: flex;
    font-family: Roboto;
    max-width: 750px;
    margin: 0px 15px;
`;

export const CardContent = styled.div`
    padding: 10px;
    width: 70%;
    max-width: 500px;
`;
 
export const HeadContentCard = styled.div`
    display: flex;
    justify-content: space-between;
    
`;
export const TagList = styled.div`
    display: flex;
    justify-content: space-between;
    height: fit-content;
    margin: 10px;
    gap:5px;


`;
export const ImgCard = styled.img`
    max-height: 100%;
    width: 30%;
    max-width: 244px;
    object-fit: cover;
    vertical-align: bottom;
    border-radius: 20px 0px 0px 20px;
`;


export const HeadLines = styled.p`
    font-size: 14px;
    color: rgba(90, 90, 137, 0.5);

`;

export const CardTitle = styled.h2`
    color: ${darkBlueColor};
    font-weight: bold;
    font-size: 18px;
`;

export const CardText = styled.p`
    color: ${lightBlue};
    font-size: 14px;
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 5px;
`;