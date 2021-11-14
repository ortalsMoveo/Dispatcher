import { Container } from "./style";
import Filter from "../Filter/Filter";
import {
  FILTER_OPTIONS,
  HeadLinesFilters,
  EverythingFilters,
} from "../../FiltersData";
import React from "react";

interface Props {
  filterType: FILTER_OPTIONS;
}

const FilterContainer = ({ filterType }: Props) => {
  const list =
    filterType === FILTER_OPTIONS.EVERYTHING
      ? EverythingFilters
      : HeadLinesFilters;

  return (
    <Container>
      {list?.map((item) => (
        <Filter
          key={item.filterText}
          filterText={item.filterText}
          listItems={item.listItems}
          date={item.date}
        />
      ))}
    </Container>
  );
};

export default FilterContainer;
