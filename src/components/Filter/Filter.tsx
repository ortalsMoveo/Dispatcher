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
import exit from "../../../src/assets/exit.svg";

import { RootState } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterType } from "../../store/filterType";
import { updateFiltersState } from "../../store/filtersState";

export interface FilterProps {
  filterText: string | undefined;
  listItems: FilterValue[];
  date?: boolean;
  // currentFilter?: CurrentFilters;
  // setCurrentFilter?: Dispatch<React.SetStateAction<CurrentFilters>>;
  // setFilterState?: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
  navbarFilter?: boolean;
  onChangeFilter?: (
    filterHeader: string,
    item: string | null,
    currFilter?: string | undefined
  ) => void;
  filterType?: FILTER_OPTIONS;
  apiFiltersState?: string | null | undefined;
}

const Filter: React.FC<FilterProps> = (props) => {
  const currentFilterState = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(props.date ? DateIcon : DropIcon);

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
      setFilterHeader(
        moment(start).format("DD/MM - ") + moment(end).format("DD/MM")
      );
    } else {
      props.onChangeFilter && props.onChangeFilter("to", null);
      setFilterHeader(moment(start).format("DD/MM"));
    }
    setIcon(exit);
    setStartDate(start);
    setEndDate(end);
  };

  const clearFilterDate = () => {
    if (icon !== exit) {
      return;
    }
    setFilterHeader("Dates");
    setIcon(DateIcon);
    setStartDate(new Date());
    setEndDate(null);
    props.onChangeFilter && props.onChangeFilter("from", null);
    props.onChangeFilter && props.onChangeFilter("to", null);
  };

  const onClickNavberFilter = (item: string) => {
    dispatch(
      updateFilterType(
        item === "Top Headlines"
          ? FILTER_OPTIONS.TOP
          : FILTER_OPTIONS.EVERYTHING
      )
    );
    // props.setFilterState &&
    //   props.setFilterState(
    //     item === "Top Headlines"
    //       ? FILTER_OPTIONS.TOP
    //       : FILTER_OPTIONS.EVERYTHING
    //   );

    dispatch(updateFiltersState({ type: "obj" }));
    // props.setCurrentFilter!({
    //   q: null,
    //   pageSize: 10,
    //   page: 1,
    //   topHeadlinesFilters: {
    //     country: "il",
    //     category: null,
    //     sources: null,
    //   },
    //   everythingFilters: {
    //     from: null,
    //     to: null,
    //     language: null,
    //     sortBy: null,
    //     sources: null,
    //   },
    // });
    setFilterHeader(item);
    setOpen(!open);
  };

  const onClickFilter = (
    filterHeader: string,
    itemId: string | null,
    itemName: string
  ) => {
    const clearFilters = [
      "All Countries",
      "All Categories",
      "All Sources",
      "All Sorts",
      "All Languages",
    ];
    setFilterHeader(
      clearFilters.includes(itemName) ? props.filterText : itemName
    );
    props.onChangeFilter &&
      props.onChangeFilter(filterHeader, itemId, props.filterText);
    setOpen(!open);
  };

  const onClickDropDown = () => {
    const headLinesFilter = ["Country", "Category", "Sources"];
    if (
      props.filterType === "Top Headlines" &&
      headLinesFilter.includes(props.filterText!)
    ) {
      if (
        (currentFilterState?.topHeadlinesFilters.category ||
          currentFilterState?.topHeadlinesFilters.country) &&
        props.filterText === "Sources"
      ) {
        setDisableFilter(true);
      } else if (
        currentFilterState?.topHeadlinesFilters.sources &&
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

  useEffect(() => {
    const headLinesFilter = ["Country", "Category", "Sources"];
    if (
      props.filterType === "Top Headlines" &&
      headLinesFilter.includes(props.filterText!)
    ) {
      if (
        (currentFilterState?.topHeadlinesFilters.category ||
          currentFilterState?.topHeadlinesFilters.country) &&
        props.filterText === "Sources"
      ) {
        setDisableFilter(true);
        if (open) {
          setOpen(!open);
        }
      } else if (
        currentFilterState?.topHeadlinesFilters.sources &&
        (props.filterText === "Country" || props.filterText === "Category")
      ) {
        setDisableFilter(true);
        if (open) {
          setOpen(!open);
        }
      } else {
        setDisableFilter(false);
      }
    } else {
      if (disableFilter) {
        setDisableFilter(false);
      }
    }
  }, [open, currentFilterState, props.filterType]);

  return (
    <DropDownContainer>
      <DropDownHeader
        onClick={onClickDropDown}
        disable={disableFilter}
        navbarFilter={navbarFilterStyle}
      >
        {filterHeader}
        <img src={icon} alt="DropDownIcon" onClick={clearFilterDate} />
      </DropDownHeader>
      {open && (
        <DropDownListContainer
          navbarFilter={navbarFilterStyle}
          date={props.date!}
        >
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
                          props.filterText!,
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
