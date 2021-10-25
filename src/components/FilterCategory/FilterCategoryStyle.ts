import styled from 'styled-components';

export const Category = styled.div`
    background: #FFFFFF;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    :hover {
        background: rgba(90, 90, 137, 0.05);
    }
`;

export const Name = styled.span`
    padding: 5px; 
    color: #5A5A89;   
`;

export const Option = styled.span`
    padding: 5px;    
    color: rgba(90, 90, 137, 0.5);
`;