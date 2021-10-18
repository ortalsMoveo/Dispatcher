import styled from 'styled-components';
import {blue,} from '../../globalStyle';

export const ButtonStyle  = styled.button`
border-radius: 20px;
padding: 8px 16px;
font: Roboto;
border: none;
: hover{
    ${props => (props.name === "text") ? `background: rgba(217, 219, 233, 0.3)`: null};
    opacity: 0.8;
}
color: ${props => (props.name === 'primary') ? '#FFFFFF' : '#5A5A89'};
background: ${props => 
    (props.name === 'primary') ? blue : 
    ( (props.name === 'secondary') ? '#D9DBE9': 'white' ) 
};
`

export const IconStyle = styled.img`
    padding: 0px 4px;    
`
