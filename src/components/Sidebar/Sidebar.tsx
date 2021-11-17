import { ButtonProps } from "../Button/Button";
import FilterTablet from "../Tablet&Mobile/FilterTablet/FilterTablet";
import { useState } from "react";
import React, { Dispatch } from "react";
import { CurrentFilters } from "../../fetchers/MainPage/MainPage";
import {
  FILTER_OPTIONS,
  HeadLinesFilters,
  EverythingFilters,
  subFilterList,
  subFilterList2,
} from "../../FiltersData";
const button: ButtonProps = {
  buttonText: "VIEW RESULTS",
};

export interface SidebarFilters {
  filterTitle: string;
  searchIn: string;
  topHeadlinesFilters: {
    country: string;
    category: string;
    sources: string;
  };
  everythingFilters: {
    date: string;
    language: string;
    sources: string;
  };
}

interface SidebarProps {
  filterType: FILTER_OPTIONS;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
}

const Sidebar = ({
  filterType,
  currentFilter,
  setCurrentFilter,
}: SidebarProps) => {
  const [sidebarFilters, setSidebarFilters] = useState<SidebarFilters>({
    filterTitle: "FILTER",
    searchIn: "Everything",
    topHeadlinesFilters: {
      country: "All",
      category: "All",
      sources: "All",
    },
    everythingFilters: {
      date: "All",
      language: "All",
      sources: "All",
    },
  });
  const [filterTitle, setFilterTitle] = useState("FILTER");
  const [currentFilterList, setCurrentFilterList] = useState(
    filterType === FILTER_OPTIONS.TOP ? HeadLinesFilters : EverythingFilters
  );
  const [subFilter, setSubFilter] = useState(false);

  const updateCurrentFilter = (key: string, value: string) => {
    console.log("geeting in to update curr filter : sidebar");
    //   const prevState = currentFilter;

    //   if (filterType === FILTER_OPTIONS.TOP) {
    //     setCurrentFilter({
    //       ...prevState,
    //       topHeadlinesFilters: {
    //         ...prevState.topHeadlinesFilters,
    //         [key.toLowerCase()]: value,
    //       },
    //     });
    //   } else {
    //     setCurrentFilter({
    //       ...prevState,
    //       everythingFilters: {
    //         ...prevState.everythingFilters,
    //         [key.toLowerCase()]: value,
    //       },
    //     });
    //   }
  };
  const UpdateListFilters = (value: string) => {
    // const currTypeFilter =
    //   filterType === FILTER_OPTIONS.TOP ? HeadLinesFilters : EverythingFilters;
    // console.log(currTypeFilter);
    // for (const key in currTypeFilter) {
    //   // console.log("the key:", key);
    //   let list = null;
    //   if (currTypeFilter[key].filterText === value) {
    //     list = currTypeFilter[key].listItems;
    //     setCurrentFilterList({ list });
    //   }
    // }
    // setCurrentFilterList(subFilterList2);
    // setHeadline(value); // fix it!
    // setSubFilter(!subFilter);

    console.log("update currentFilterList", value);
  };
  // TODO -> add cb(current filter) that update currentFilterList
  return (
    <FilterTablet
      title={filterTitle}
      list={currentFilterList}
      button={button}
      subFilter={subFilter}
      onChangeFilter={updateCurrentFilter}
      UpdateListFilters={UpdateListFilters}
    />
  );
};

export default Sidebar;
