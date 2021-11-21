import { Container } from "./style";
import Filter from "../Filter/Filter";
import {
  FILTER_OPTIONS,
  HeadLinesFilters,
  EverythingFilters,
} from "../../FiltersData";
import React, { Dispatch, useEffect, useState } from "react";
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

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const updateCurrentFilter = (key: string, value: string | null) => {
    const prevState = currentFilter;
    if (key === "from") {
      value ? setFrom(value) : setFrom("");
      return;
    }

    if (key === "to") {
      value ? setTo(value) : setTo("");
      return;
    }

    if (filterType === FILTER_OPTIONS.TOP) {
      setCurrentFilter({
        ...prevState,
        topHeadlinesFilters: {
          ...prevState.topHeadlinesFilters,
          [key.toLowerCase()]: value,
        },
      });
    } else {
      key === "Sort by"
        ? setCurrentFilter({
            ...prevState,
            everythingFilters: {
              ...prevState.everythingFilters,
              sortBy: value,
            },
          })
        : setCurrentFilter({
            ...prevState,
            everythingFilters: {
              ...prevState.everythingFilters,
              [key.toLowerCase()]: value,
            },
          });
    }
  };

  useEffect(() => {
    const prevState = currentFilter;
    setCurrentFilter({
      ...prevState,
      everythingFilters: {
        ...prevState.everythingFilters,
        from: from,
        to: to,
      },
    });
  }, [from, to]);

  useEffect(() => {
    const currentFilterType =
      filterType === "Top Headlines"
        ? currentFilter.topHeadlinesFilters
        : currentFilter.everythingFilters;
    console.log(currentFilterType);
  }, [currentFilter]);

  return (
    <Container>
      {list?.map((item) => (
        <Filter
          key={item.filterText}
          filterText={item.filterText}
          listItems={item.listItems}
          date={item.date}
          onChangeFilter={updateCurrentFilter}
          currentFilter={currentFilter}
          filterType={filterType}
        />
      ))}
    </Container>
  );
};

export default FilterContainer;
