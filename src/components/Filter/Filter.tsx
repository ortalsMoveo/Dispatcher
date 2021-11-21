import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  ListItems,
  DisableFilter,
} from "./Style";
import React, { useState, Dispatch, useEffect } from "react";
import DropIcon from "../../assets/dropdown.svg";
import DateIcon from "../../assets/date.svg";
import { FilterValue, FILTER_OPTIONS } from "../../FiltersData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { CurrentFilters } from "../../fetchers/MainPage/MainPage";
import { HeadLines } from "../Card/CardStyle";

const filterStyle = {
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "22px",
  boxShadow: "none",
};
export interface FilterProps {
  filterText: string;
  listItems: FilterValue[];
  date?: boolean;
  currentFilter?: CurrentFilters;
  setFilterState?: Dispatch<React.SetStateAction<FILTER_OPTIONS>>; // TODO need to change the state filter
  navbarFilter?: boolean;
  onChangeFilter?: (filterHeader: string, item: string | null) => void;
}

const Filter: React.FC<FilterProps> = (props) => {
  const [open, setOpen] = useState(false);
  let icon = DropIcon;
  if (props.date) {
    icon = DateIcon;
  }
  const [filterHeader, setFilterHeader] = useState(
    props.filterText === "Country" ? "Israel" : props.filterText
  );
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [disableFilter, setDisableFilter] = useState(false);
  const navbarFilterStyle = props.navbarFilter ? true : false;
  const onChange = (dates: any) => {
    const [start, end] = dates;
    if (start) {
      props.onChangeFilter &&
        props.onChangeFilter("from", moment(start).format("YYYY-MM-DD"));
    }
    if (end) {
      props.onChangeFilter &&
        props.onChangeFilter("to", moment(end).format("YYYY-MM-DD"));
    } else {
      props.onChangeFilter && props.onChangeFilter("to", null);
    }
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

  const onClickFilter = (
    filterHeader: string,
    itemId: string | null,
    itemName: string
  ) => {
    console.log("itemId", itemId);
    setFilterHeader(itemName);
    props.onChangeFilter && props.onChangeFilter(filterHeader, itemId);
  };

  const onClickDropDown = () => {
    console.log(props.filterText);
    const headLinesFilter = ["Country", "Category", "Sources"];
    if (headLinesFilter.includes(props.filterText)) {
      if (
        (props.currentFilter?.topHeadlinesFilters.category ||
          props.currentFilter?.topHeadlinesFilters.country) &&
        props.filterText === "Sources"
      ) {
        setDisableFilter(true);
      } else if (
        props.currentFilter?.topHeadlinesFilters.sources &&
        (props.filterText === "Country" || props.filterText === "Category")
      ) {
        setDisableFilter(true);
      } else {
        setDisableFilter(false);
        setOpen(!open);
      }
    } else {
      setOpen(!open);
    }
  };
  return (
    <DropDownContainer>
      <DropDownHeader
        onClick={onClickDropDown}
        disable={disableFilter}
        navbarFilter={navbarFilterStyle}
      >
        {filterHeader}
        <img src={icon} alt="DropDownIcon" />
      </DropDownHeader>
      {disableFilter ? (
        <DisableFilter disable={disableFilter}>
          In order to filter by this category you must remove the rest of the
          filters
        </DisableFilter>
      ) : null}
      {open && (
        <DropDownListContainer>
          {props.date ? (
            <DatePicker
              dateFormat="yyyy/MM/dd"
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
                    ? () => onClickNavberFilter(item.name)
                    : () =>
                        onClickFilter(
                          props.filterText,
                          item.id !== undefined ? item.id : item.name,
                          item.name
                        )
                }
              >
                {item.name}
              </ListItems>
            ))
          )}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Filter;
