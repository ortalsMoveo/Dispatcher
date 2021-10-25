import styled from  'styled-components';

export const Container = styled.div`
    background: #E5E5E5;
`;

export const PageContent = styled.div`
    width: 80%;
    margin: 0% 10%;   
`;
export const FilterContainer = styled.div`
    padding: 10px;
    margin: 10px;
    height: 50px;
    display: flex;
    gap: 20px;
    width: 175px;
`;

export const Title = styled.h3`
    color: #262146;
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
`;

export const CardsContent = styled.div`
    display: flex;
    gap: 20px;
`;

export const CardsListTablet = styled.div`
   display: flex;
    flex-direction: column;
    gap: 20px;

`;

export const CardsList = styled.div`
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
    }
    ::-webkit-scrollbar {
        background: #A0A3BD;
        height: 50px;
    }   
    height: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const GraphList = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 15px;

`;
export const SeparateLine = styled.div`
    opacity: 0.5;
    border: 1px solid #D9DBE9;
`;