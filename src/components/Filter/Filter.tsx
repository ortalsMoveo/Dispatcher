import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  ListItems,
} from "./Style";
import React, { useState, Dispatch } from "react";
import DropIcon from "../../assets/dropdown.svg";
import DateIcon from "../../assets/date.svg";
import { FILTER_OPTIONS } from "../../FiltersData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface FilterProps {
  filterText: string;
  listItems: string[];
  date?: boolean;
  setFilterState?: Dispatch<React.SetStateAction<FILTER_OPTIONS>>; // TODO need to change the state filter
  navbarFilter?: boolean;
  onChangeFilter?: (filterHeader: string, item: string) => void;
}

const Filter: React.FC<FilterProps> = (props) => {
  const [open, setOpen] = useState(false);
  let icon = DropIcon;
  if (props.date) {
    icon = DateIcon;
  }
  const [filterHeader, setFilterHeader] = useState(props.filterText);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onClickNavberFilter = (item: string) => {
    props.setFilterState &&
      props.setFilterState(
        item === "Top Headlines"
          ? FILTER_OPTIONS.TOP
          : FILTER_OPTIONS.EVERYTHING
      );
    setFilterHeader(item);
  };

  const onClickFilter = (filterHeader: string, item: string) => {
    setFilterHeader(item);
    props.onChangeFilter && props.onChangeFilter(filterHeader, item);
  };
  return (
    <DropDownContainer>
      <DropDownHeader onClick={() => setOpen(!open)}>
        {filterHeader}
        <img src={icon} alt="DropDownIcon" />
      </DropDownHeader>
      {open && (
        <DropDownListContainer>
          {props.date ? (
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          ) : (
            props.listItems &&
            props.listItems.map((item, i) => (
              <ListItems
                key={i}
                onClick={
                  props.navbarFilter
                    ? () => onClickNavberFilter(item)
                    : () => onClickFilter(props.filterText, item)
                }
              >
                {item}
              </ListItems>
            ))
          )}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Filter;
