import styled from 'styled-components';
import {white} from '../../globalStyle';


export const DropDownContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  font-family: Roboto;
  color: #5A5A89;
  border: none;
`;    
    
export const DropDownHeader = styled.ul`
  border-radius: 10px;
  background: ${white};
  margin: 0;
  display: flex;
  padding: 13px;
  gap: 13px;
  width: 140px;
`;

export const DropDownListContainer = styled.div`
  margin: 15px 0;
  background: ${white};
  border-radius: 10px;
  &::-webkit-scrollbar {
    background: none;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #5A5A89;
  }
    height: 126px;
    overflow: scroll;
    overflow-x: hidden;
    width: 166px;
    z-index: 1;
  `;

export const ListItems = styled.li`
  :hover{
    background: rgba(223, 224, 235, 0.41);
  }
  padding : 7px;
  list-style: none;
  color: #5A5A89;
`
;