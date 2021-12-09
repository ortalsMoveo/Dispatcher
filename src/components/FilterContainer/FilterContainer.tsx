import { Container } from "./style";
import Filter from "../Filter/Filter";
import {
  FILTER_OPTIONS,
  HeadLinesFilters,
  EverythingFilters,
} from "../../FiltersData";
import React, { Dispatch, useEffect, useState } from "react";
import { RootState } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { updateFiltersState } from "../../store/filtersState";
interface Props {
  // filterType: FILTER_OPTIONS;
  // currentFilter: CurrentFilters;
  // setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
}

const FilterContainer = ({}: // filterType,
// currentFilter,
// setCurrentFilter,
Props) => {
  const filterType = useSelector(
    (state: RootState) => state.filterType.filterType
  );

  const currentFilterState = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  const list =
    filterType === FILTER_OPTIONS.EVERYTHING
      ? EverythingFilters
      : HeadLinesFilters;

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const updateCurrentFilter = (
    key: string,
    value: string | null,
    currFilter: string | undefined
  ) => {
    // const prevState = currentFilter;
    if (key === "from") {
      value ? setFrom(value) : setFrom("");
      return;
    }
    if (key === "to") {
      value ? setTo(value) : setTo("");
      return;
    }
    if (filterType === FILTER_OPTIONS.TOP) {
      dispatch(
        updateFiltersState({ type: "top", key: key.toLowerCase(), value })
      );
      // dispatch
      // setCurrentFilter({
      //   ...prevState,
      //   topHeadlinesFilters: {
      //     ...prevState.topHeadlinesFilters,
      //     [key.toLowerCase()]: value,
      //   },
      // });
    } else {
      currFilter &&
        dispatch(
          updateFiltersState({
            type: "every",
            currFilter: currFilter.toLowerCase(),
            key,
            value,
          })
        );
      //   key === "Sort by"
      //     ? setCurrentFilter({
      //         ...prevState,
      //         everythingFilters: {
      //           ...prevState.everythingFilters,
      //           sortBy: value,
      //         },
      //       })
      //     : setCurrentFilter({
      //         ...prevState,
      //         everythingFilters: {
      //           ...prevState.everythingFilters,
      //           [key.toLowerCase()]: value,
      //         },
      //       });
      // }
    }
  };

  useEffect(() => {
    dispatch(updateFiltersState({ type: "every", from, to }));
    // const prevState = currentFilter;
    // setCurrentFilter({
    //   ...prevState,
    //   everythingFilters: {
    //     ...prevState.everythingFilters,
    //     from: from,
    //     to: to,
    //   },
    // });
  }, [from, to]);

  useEffect(() => {
    const currentFilterType =
      filterType === "Top Headlines"
        ? currentFilterState.topHeadlinesFilters
        : currentFilterState.everythingFilters;
  }, [currentFilterState]);

  const filterHeader = (filter: string) => {
    if (
      currentFilterState.topHeadlinesFilters.category === filter.toLowerCase()
    ) {
      return currentFilterState.topHeadlinesFilters.category;
    } else if (
      currentFilterState.topHeadlinesFilters.country === filter.toLowerCase()
    ) {
      return currentFilterState.topHeadlinesFilters.country;
    } else if (
      currentFilterState.topHeadlinesFilters.sources === filter.toLowerCase()
    ) {
      return currentFilterState.topHeadlinesFilters.sources;
    } else if (
      currentFilterState.everythingFilters.sources === filter.toLowerCase()
    ) {
      return currentFilterState.everythingFilters.sources;
    } else if (
      currentFilterState.everythingFilters.from === filter.toLowerCase()
    ) {
      return currentFilterState.everythingFilters.from;
    } else if (
      currentFilterState.everythingFilters.to === filter.toLowerCase()
    ) {
      return currentFilterState.everythingFilters.to;
    } else if (
      currentFilterState.everythingFilters.language === filter.toLowerCase()
    ) {
      return currentFilterState.everythingFilters.language;
    } else if (
      currentFilterState.everythingFilters.sortBy === filter.toLowerCase()
    ) {
      return currentFilterState.everythingFilters.sources;
    }
  };

  return (
    <Container>
      {list?.map((item) => (
        <Filter
          key={item.filterText}
          filterText={item.filterText}
          listItems={item.listItems}
          date={item.date}
          onChangeFilter={updateCurrentFilter}
          // currentFilter={currentFilter}
          filterType={filterType}
          apiFiltersState={filterHeader(item.filterText!)}
        />
      ))}
    </Container>
  );
};

export default FilterContainer;
