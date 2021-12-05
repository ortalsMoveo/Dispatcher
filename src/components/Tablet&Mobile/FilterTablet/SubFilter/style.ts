import styled from "styled-components";
import { white, lightGray, lightBlue, darkBlue } from "../../../../globalStyle";
export const Dates = styled.div`
  .react-datepicker {
    font-size: 0.875rem;
    border: none;
    right: 0px;
    width: -webkit-fill-available;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__day--in-range,
  .react-datepicker__day--keyboard-selected {
    background-color: ${darkBlue};
    color: ${white} !important;
  }
  .react-datepicker__day {
    margin: 8px;
    font-weight: 100;
  }
  .react-datepicker__day-name {
    font-weight: 100;
  }
  .react-datepicker__current-month {
    font-weight: 400;
  }
  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker__day {
    color: ${lightBlue};
  }
  .react-datepicker__month-container {
    width: -webkit-fill-available;
  }

  .react-datepicker__header {
    border-bottom: 1px solid ${lightGray};
    background: ${white};
  }
`;
