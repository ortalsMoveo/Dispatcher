import { ButtonProps } from "../Button/Button";
import FilterTablet from "../Tablet&Mobile/FilterTablet/FilterTablet";
import React, { Dispatch, useEffect, useState } from "react";
import {
  FILTER_OPTIONS,
  HeadLinesFiltersSmallDeviches,
  EverythingFiltersSmallDeviches,
} from "../../FiltersData";
import { RootState } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterType } from "../../store/filterType";
import { updateFiltersState } from "../../store/filtersState";

const button: ButtonProps = {
  buttonText: "VIEW RESULTS",
  fullWidth: false,
};
export interface SidebarFilters {
  topHeadlinesFilters: {
    country: string | null;
    category: string | null;
    sources: string | null;
  };
  everythingFilters: {
    from: string | null;
    to: string | null;
    language: string | null;
    sources: string | null;
    sortBy: string | null;
  };
}

interface SidebarProps {
  // filterType: FILTER_OPTIONS;
  // setFilterType: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
  // currentFilter: CurrentFilters;
  // setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
  setSidebarState: Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({
  // filterType,
  // setFilterType,
  // currentFilter,
  // setCurrentFilter,
  setSidebarState,
}: SidebarProps) => {
  const currentFilterState = useSelector((state: RootState) => state.filters);
  const filterType = useSelector(
    (state: RootState) => state.filterType.filterType
  );
  const dispatch = useDispatch();

  const [sidebarFilters, setSidebarFilters] = useState<SidebarFilters>({
    topHeadlinesFilters: {
      country: "il",
      category: null,
      sources: null,
    },
    everythingFilters: {
      from: null,
      to: null,
      language: null,
      sources: null,
      sortBy: null,
    },
  });
  const [currentFilterList, setCurrentFilterList] = useState(
    filterType === FILTER_OPTIONS.TOP
      ? HeadLinesFiltersSmallDeviches
      : EverythingFiltersSmallDeviches
  );
  const [subFilter, setSubFilter] = useState(false);
  const [disableFilters, setDisableFilters] = useState<any>(["Sources"]);
  const [currFilterType, setCurrFilterType] =
    useState<FILTER_OPTIONS>(filterType);

  useEffect(() => {
    if (currFilterType === FILTER_OPTIONS.TOP) {
      setCurrentFilterList(HeadLinesFiltersSmallDeviches);
      const prevState = sidebarFilters;
      setSidebarFilters({
        ...prevState,
        everythingFilters: {
          from: null,
          to: null,
          language: null,
          sources: null,
          sortBy: null,
        },
      });

      EverythingFiltersSmallDeviches.map((item: any) => {
        if (item.filter?.value! !== "All") {
          const name = item.filter.name;
          item.filter = { name: name, value: "All" };
        }
      });
    } else {
      setCurrentFilterList(EverythingFiltersSmallDeviches);
      const prevState = sidebarFilters;
      setSidebarFilters({
        ...prevState,
        topHeadlinesFilters: {
          country: "il",
          category: null,
          sources: null,
        },
      });
      HeadLinesFiltersSmallDeviches.map((item: any) => {
        if (item.filter.name === "Country") {
          item.filter = { name: "Country", value: "Israel" };
        } else if (item.filter?.value! !== "All") {
          const name = item.filter.name;
          item.filter = { name: name, value: "All" };
        }
      });
    }
  }, [currFilterType]);

  const topHeadlinesFilters =
    !sidebarFilters.topHeadlinesFilters.category &&
    !sidebarFilters.topHeadlinesFilters.country;

  useEffect(() => {
    if (filterType === "Top Headlines") {
      let arr = null;
      if (
        sidebarFilters.topHeadlinesFilters.category ||
        sidebarFilters.topHeadlinesFilters.country
      ) {
        arr = ["Sources"];
        setDisableFilters(arr);
      } else if (sidebarFilters.topHeadlinesFilters.sources) {
        arr = ["Country", "Category"];
        setDisableFilters(arr);
      }
    }
  }, [sidebarFilters, filterType, topHeadlinesFilters]);

  const submitFilters = async (currFilterType: any) => {
    setSubFilter(false);
    setSidebarState(false);
    // setFilterType(currFilterType);
    dispatch(updateFilterType(currFilterType));

    // const prevState = currentFilter;

    if (currFilterType === FILTER_OPTIONS.TOP) {
      // what about q?
      dispatch(
        updateFiltersState({
          type: "top",
          fullTopObj: true,
          topValues: sidebarFilters.topHeadlinesFilters,
        })
      );
      // setCurrentFilter({
      //   ...prevState,
      //   q: null,
      //   topHeadlinesFilters: sidebarFilters.topHeadlinesFilters,
      // });
    } else {
      dispatch(
        updateFiltersState({
          type: "every",
          fullTopObj: true,
          everyValues: sidebarFilters.everythingFilters,
        })
      );
      // setCurrentFilter({
      //   ...prevState,
      //   everythingFilters: sidebarFilters.everythingFilters,
      // });
    }
  };

  return (
    <FilterTablet
      // filterType={currFilterType}
      // setFilterType={setCurrFilterType}
      list={currentFilterList}
      button={button}
      subFilter={subFilter}
      sidebarFilters={sidebarFilters}
      setSidebarFilters={setSidebarFilters}
      disable={disableFilters}
      onSubmit={submitFilters}
    />
  );
};

export default Sidebar;
