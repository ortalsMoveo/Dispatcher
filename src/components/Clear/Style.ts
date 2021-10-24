import styled from 'styled-components';

export const ClearButton = styled.button<{backgroundColor: boolean}>`
    color: #5A5A89;
    :hover {
        background: #D9DBE9;
    }
    background: ${props => props.backgroundColor ? '#D9DBE9' : '#FFFFFF'};
    padding: 4px 6px;
    border: none;
    font-weight: bold;
    font-size: 12px;
`;