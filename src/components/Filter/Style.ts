import styled from 'styled-components';
import {white} from '../../globalStyle';


export const DropDownContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  font-family: Roboto;
  color: #5A5A89;
  border: none;
  width: 30%;
  max-width: 220px;
`;    
    
export const DropDownHeader = styled.ul`
  border-radius: 10px;
  background: ${white};
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding:10px;
`;

export const DropDownListContainer = styled.div`
  margin: 4% 0;
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
  height: 8rem;
    overflow: scroll;
    overflow-x: hidden;
  `;

export const ListItems = styled.li`
  :hover{
      background: rgba(223, 224, 235, 0.41);
  }
  padding : 7%;
  list-style: none;
  color: #5A5A89;
`
;