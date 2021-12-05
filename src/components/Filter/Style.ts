import styled from "styled-components";
import { darkBlue, lightBlue, white } from "../../globalStyle";

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
  padding: ${(props) => (props.navbarFilter ? "13px 7px " : "13px")};
  gap: ${(props) => (props.navbarFilter ? "10px" : "30px")};
  width: ${(props) => (props.navbarFilter ? null : "174px")};
  font-weight: ${(props) => (props.navbarFilter ? "500" : "none")};
  opacity: ${(props) => (props.disable ? "50%" : "none")};
  cursor: ${(props) => (props.disable ? "not-allowed" : "default")};
`;

export const DropDownListContainer = styled.div<{
  navbarFilter: boolean;
  date: boolean;
}>`
  margin: 7px 0;
  background: ${white};
  border-radius: 10px;
  &::-webkit-scrollbar {
    background: none;
    width: 3px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${lightBlue};
  }
  max-height: ${(props) => (props.date ? "0px" : "126px")};
  overflow: ${(props) => (props.date ? null : "scroll")};
  overflow-x: ${(props) => (props.date ? null : "hidden")};
  z-index: 2;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  width: ${(props) => (props.navbarFilter ? "149px" : null)};
  margin-left: 0px;
  .react-datepicker {
    right: 3px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    z-index: 1;
  }
  .react-datepicker__header {
    border-bottom: 1px solid gray;
    background: ${white};
  }
  .react-datepicker__day,
  .react-datepicker__day-name {
    margin: 0;
    font-weight: 100;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__day--in-range,
  .react-datepicker__day--keyboard-selected {
    background-color: ${lightBlue};
    color: ${white} !important;
  }

  .react-datepicker__current-month {
    font-weight: 400;
  }
  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker__day {
    color: ${darkBlue};
  }
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
