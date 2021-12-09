import { Container, FilterType, ListItem, ListContainer } from "./FilterStyle";
import FilterIcon from "../../../assets/filter.svg";
import DropIcon from "../../../assets/dropdown.svg";
import React, { Dispatch, useState } from "react";
import { EverythingFilters, FILTER_OPTIONS } from "../../../FiltersData";
import Filter from "../../Filter/Filter";
import onFilter from "../../../assets/onFilter.jpeg";
import { RootState } from "../../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterType } from "../../../store/filterType";
import { updateFiltersState } from "../../../store/filtersState";

export interface FilterProps {
  currState?: boolean;
  setfilterState: Dispatch<boolean>;
  // currentFilter: CurrentFilters;
  // setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
  mobileSearch?: boolean;
  // filterType: FILTER_OPTIONS;
  // setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
}
const TabletFilter = ({
  setfilterState,
  // currentFilter,
  // setCurrentFilter,
  // filterType,
  mobileSearch,
}: // setFilterState,
FilterProps) => {
  const currentFilterState = useSelector((state: RootState) => state.filters);
  const filterType = useSelector(
    (state: RootState) => state.filterType.filterType
  );
  const dispatch = useDispatch();

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
      // setFilterState(FILTER_OPTIONS.TOP);
      dispatch(updateFilterType(FILTER_OPTIONS.TOP));
    } else {
      // setFilterState(FILTER_OPTIONS.EVERYTHING);
      dispatch(updateFilterType(FILTER_OPTIONS.EVERYTHING));
    }
  };

  const isFiltered = () => {
    if (filterType === "Top Headlines") {
      if (currentFilterState.topHeadlinesFilters.country) {
        return true;
      } else if (currentFilterState.topHeadlinesFilters.category) {
        return true;
      } else if (currentFilterState.topHeadlinesFilters.sources) {
        return true;
      } else {
        return false;
      }
    } else {
      if (currentFilterState.everythingFilters.from) {
        return true;
      } else if (currentFilterState.everythingFilters.to) {
        return true;
      } else if (currentFilterState.everythingFilters.sources) {
        return true;
      } else if (currentFilterState.everythingFilters.sortBy) {
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
