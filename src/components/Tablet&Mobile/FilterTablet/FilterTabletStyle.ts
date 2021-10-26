import styled from 'styled-components';

export const Container = styled.div`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    height: 1024px;
    justify-content    :space-between ;
    font-family: Roboto;
`;

export const FilterContent = styled.div`

`;
export const FilterTitle = styled.div`
    color: #5A5A89;
    font-weight: 500;
    font-size: 16px;
    padding: 20px 10px;
    display: flex;
`;
export const FilterSearch = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px; 
    color: #5A5A89;
    font-family: Roboto;
    :hover {
        background: rgba(90, 90, 137, 0.05);
    }
    `;
export const AllSearches = styled.span`
    padding: 5px;
    font-size: 14px;
`;

export const ButtonPosition = styled.div`
    background: #F8F8FF;
    order: inherit;
    padding: 20px;
    display: flex;
    justify-content: center ;
`;

export const SeparateLine = styled.div`
    opacity: 0.5;
    border: 1px solid #D9DBE9;
    height: 0px;
`;
export const IconStyle = styled.img`
    padding: 0px 4px;    
`
