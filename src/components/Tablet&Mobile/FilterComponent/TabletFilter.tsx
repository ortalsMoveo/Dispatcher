import { Container, FilterType, ListItem, ListContainer } from "./FilterStyle";
import FilterIcon from "../../../assets/filter.svg";
import DropIcon from "../../../assets/dropdown.svg";
import React, { Dispatch, useState } from "react";
import { EverythingFilters, FILTER_OPTIONS } from "../../../FiltersData";
import { CurrentFilters } from "../../../fetchers/MainPage/MainPage";
import Filter from "../../Filter/Filter";
import onFilter from "../../../assets/onFilter.jpeg";

export interface FilterProps {
  currState?: boolean;
  setfilterState: Dispatch<boolean>;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
  mobileSearch?: boolean;
  filterType: FILTER_OPTIONS;
  setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
}
const TabletFilter = ({
  setfilterState,
  currentFilter,
  setCurrentFilter,
  filterType,
  mobileSearch,
  setFilterState,
}: FilterProps) => {
  const [sortByDropDown, setSortByDropDown] = useState(false);
  const filterOptions =
    filterType === FILTER_OPTIONS.TOP
      ? [
          { id: "everything", name: FILTER_OPTIONS.EVERYTHING },
          { id: "top", name: FILTER_OPTIONS.TOP },
        ]
      : [
          { id: "top", name: FILTER_OPTIONS.TOP },
          { id: "everything", name: FILTER_OPTIONS.EVERYTHING },
        ];
  const filter = filterOptions;

  const onClickFilter = (itemId: string | null, itemName: string) => {
    if (itemName === "Top Headlines") {
      setFilterState(FILTER_OPTIONS.TOP);
    } else {
      setFilterState(FILTER_OPTIONS.EVERYTHING);
    }
  };

  const isFiltered = () => {
    if (filterType === "Top Headlines") {
      if (currentFilter.topHeadlinesFilters.country) {
        return true;
      } else if (currentFilter.topHeadlinesFilters.category) {
        return true;
      } else if (currentFilter.topHeadlinesFilters.sources) {
        return true;
      } else {
        return false;
      }
    } else {
      if (currentFilter.everythingFilters.from) {
        return true;
      } else if (currentFilter.everythingFilters.to) {
        return true;
      } else if (currentFilter.everythingFilters.sources) {
        return true;
      } else if (currentFilter.everythingFilters.sortBy) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <>
      <Container mobileSearch={mobileSearch!}>
        <FilterType onClick={() => setSortByDropDown(!sortByDropDown)}>
          {filterType}
          <img
            src={DropIcon}
            alt="dropDownIcon"
            style={{ marginLeft: "10px" }}
          />
        </FilterType>
        <img
          src={isFiltered() ? onFilter : FilterIcon}
          onClick={() => setfilterState(true)}
          alt="Filter Icon"
        />
      </Container>
      <ListContainer>
        {sortByDropDown &&
          filter.map((item, i) => (
            <ListItem
              key={i}
              onClick={() =>
                onClickFilter(
                  item.id !== undefined ? item.id : item.name,
                  item.name
                )
              }
            >
              {item.name}
            </ListItem>
          ))}
      </ListContainer>
    </>
  );
};

export default TabletFilter;
