import styled from 'styled-components';

export const CardContainer = styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto');

    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #D9DBE9;
    display: flex;
    font-family: Roboto;
    width: 60%;
    max-width: 800px;
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
    width: 30%;
    max-width: 250px;
    height: fit-content;
`;


export const HeadLines = styled.p`
    font-size: 14px;
    color: rgba(90, 90, 137, 0.5);

`;

export const CardTitle = styled.h2`
    color: #14142B;
    font-weight: bold;
    font-size: 18px;
`;

export const CardText = styled.p`
    color: #5A5A89;
    font-size: 14px;
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 5px;
`;