import styled from 'styled-components';
import {lightBlue, gray, white } from '../../globalStyle';

export const ClearButton = styled.button<{backgroundColor: boolean}>`
    color: ${lightBlue};
    :hover {
        background: ${gray};
    }
    background: ${props => props.backgroundColor ? `${gray}` : `${white}`};
    padding: 4px 6px;
    border: none;
    font-weight: bold;
    font-size: 12px;
`;