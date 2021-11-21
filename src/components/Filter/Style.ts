import styled from "styled-components";
import { lightBlue, white } from "../../globalStyle";

const navbarFilterStyle = {
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "22px",
  boxShadow: "none",
};
export const DropDownContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  font-family: Roboto;
  color: ${lightBlue};
  border: none;
  z-index: 1;
`;

export const DropDownHeader = styled.div<{
  disable: boolean;
  navbarFilter: boolean;
}>`
  border-radius: 10px;
  box-shadow: ${(props) =>
    !props.navbarFilter ? "0px 4px 12px rgba(0, 0, 0, 0.08)" : "none"};
  background: ${white};
  display: flex;
  justify-content: space-between;
  padding: 14px;
  margin: 3px 0px;
  gap: 30px;
  width: 160px;
  font-weight: ${(props) => (props.navbarFilter ? "500" : "none")};
`;

export const DropDownListContainer = styled.div`
  margin: 7px 0;
  background: ${white};
  border-radius: 10px;
  &::-webkit-scrollbar {
    background: none;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${lightBlue};
  }
  max-height: 160px;
  height: fit-content;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 2;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
`;

export const ListItems = styled.div`
  :hover {
    background: rgba(223, 224, 235, 0.41);
  }
  padding: 9px;
  list-style: none;
  color: ${lightBlue};
`;

export const DisableFilter = styled.span<{ disable: boolean }>`
  color: red;
  padding: 5px;
`;
