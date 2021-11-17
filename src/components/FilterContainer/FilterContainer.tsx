import { Container } from "./style";
import Filter from "../Filter/Filter";
import {
  FILTER_OPTIONS,
  HeadLinesFilters,
  EverythingFilters,
} from "../../FiltersData";
import React, { Dispatch } from "react";
import { CurrentFilters } from "../../fetchers/MainPage/MainPage";

interface Props {
  filterType: FILTER_OPTIONS;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
}

const FilterContainer = ({
  filterType,
  currentFilter,
  setCurrentFilter,
}: Props) => {
  const list =
    filterType === FILTER_OPTIONS.EVERYTHING
      ? EverythingFilters
      : HeadLinesFilters;

  const updateCurrentFilter = (key: string, value: string) => {
    const prevState = currentFilter;

    if (filterType === FILTER_OPTIONS.TOP) {
      setCurrentFilter({
        ...prevState,
        topHeadlinesFilters: {
          ...prevState.topHeadlinesFilters,
          [key.toLowerCase()]: value,
        },
      });
    } else {
      setCurrentFilter({
        ...prevState,
        everythingFilters: {
          ...prevState.everythingFilters,
          [key.toLowerCase()]: value,
        },
      });
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
        />
      ))}
    </Container>
  );
};

export default FilterContainer;
