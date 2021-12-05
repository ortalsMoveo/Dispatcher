import {
  Container,
  FilterTitle,
  SeparateLine,
  FilterSearch,
  ButtonPosition,
  FilterContent,
  IconStyle,
  AllSearches,
  CurrentFilter,
} from "./FilterTabletStyle";
import FilterCategory from "../../FilterCategory/FilterCategory";
import Button, { ButtonProps } from "../../Button/Button";
import React, { useState, Dispatch, useEffect } from "react";
import SubFilter from "./SubFilter/SubFilter";
import { FilterData, FILTER_OPTIONS, FilterValue } from "../../../FiltersData";
import backIcon from "../../../assets/back.svg";
import { SidebarFilters } from "../../Sidebar/Sidebar";
import moment from "moment";
import exit from "../../../../src/assets/exit.svg";

export interface FilterProps {
  filterType: FILTER_OPTIONS;
  setFilterType: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
  list: FilterData[];
  button: ButtonProps;
  subFilter: boolean;
  sidebarFilters: SidebarFilters;
  setSidebarFilters: Dispatch<React.SetStateAction<SidebarFilters>>;
  disable: string[];
  onSubmit: (val: any) => void;
}

const FilterTablet = ({
  filterType,
  setFilterType,
  subFilter,
  list,
  button,
  sidebarFilters,
  setSidebarFilters,
  disable,
  onSubmit,
}: FilterProps) => {
  const [currList, setCurrList] = useState<FilterValue[]>([]);
  const [openSubFilter, setOpenSubFilter] = useState(false);
  const [currFilter, setCurrFilter] = useState("");
  const [disableCountry, setDisableCountry] = useState(false);
  const [disableCategory, setDisableCategory] = useState(false);
  const [disableSources, setDisableSources] = useState(false);
  const [filterStartDate, setFilterStartDate] = useState<any>();
  const [clearFilterDate, setClearFilterDate] = useState(false);

  const openSubFilterHandle = async (
    FilterName: string | undefined,
    list: FilterValue[]
  ) => {
    if (FilterName === "Country" && disableCountry) {
      return;
    } else if (FilterName === "Category" && disableCategory) {
      return;
    } else if (FilterName === "Sources" && filterType === "Top Headlines") {
      return;
    }
    setCurrList(list);
    setOpenSubFilter(!openSubFilter);
    setCurrFilter(FilterName!);
  };

  const updateFiltersState = (subFilterVal: string, subFilterId: string) => {
    if (subFilterVal === "Top Headlines") {
      setFilterType(FILTER_OPTIONS.TOP);
      setOpenSubFilter(!openSubFilter);
      return;
    } else if (subFilterVal === "Everything") {
      setFilterType(FILTER_OPTIONS.EVERYTHING);
      setOpenSubFilter(!openSubFilter);
      return;
    }

    list.map((item) => {
      if (item.filter?.name === currFilter) {
        if (subFilterId === "All") {
          item.filter.value = "All";
        } else if (subFilterVal === "from" || subFilterVal === "to") {
          if (subFilterVal === "from" && subFilterId) {
            item.filter.value = moment(subFilterId).format("DD MMM");
            setFilterStartDate(item.filter.value);
          }
          if (subFilterVal === "to" && subFilterId !== "") {
            item.filter.value =
              moment(filterStartDate).format("DD MMM") +
              moment(subFilterId).format(" - DD MMM");
          }
        } else {
          item.filter.value = subFilterVal;
        }
      }
    });
    setState(subFilterId, subFilterVal);
  };

  const setState = (subFilterId: string, subFilterVal: string) => {
    const prevState = sidebarFilters;
    const value = subFilterId === "All" ? null : subFilterId;

    if (filterType === FILTER_OPTIONS.TOP) {
      setSidebarFilters({
        ...prevState,
        topHeadlinesFilters: {
          ...prevState.topHeadlinesFilters,
          [currFilter.toLowerCase()]: value,
        },
      });
    } else if (currFilter === "Sort by") {
      setSidebarFilters({
        ...prevState,
        everythingFilters: {
          ...prevState.everythingFilters,
          sortBy: value,
        },
      });
    } else if (currFilter === "Dates" && subFilterVal === "from") {
      setSidebarFilters({
        ...prevState,
        everythingFilters: {
          ...prevState.everythingFilters,
          from: value,
        },
      });
    } else if (currFilter === "Dates" && subFilterVal === "to") {
      setSidebarFilters({
        ...prevState,
        everythingFilters: {
          ...prevState.everythingFilters,
          to: value,
        },
      });
    } else {
      setSidebarFilters({
        ...prevState,
        everythingFilters: {
          ...prevState.everythingFilters,
          [currFilter.toLowerCase()]: value,
        },
      });
    }
    if (subFilterVal === "from" || subFilterVal === "to") {
      return;
    }
    setOpenSubFilter(!openSubFilter);
  };

  useEffect(() => {
    if (disable) {
      for (let i = 0; i < disable.length; i++) {
        if (disable[i] === "Country") {
          setDisableCountry(true);
        } else if (disable[i] === "Category") {
          setDisableCategory(true);
        } else {
          setDisableSources(true);
        }
      }
    }
  }, [disable, currFilter]);

  const clearFilter = () => {
    setClearFilterDate(true);
    setFilterStartDate(null);
    const prevState = sidebarFilters;
    setSidebarFilters({
      ...prevState,
      everythingFilters: {
        ...prevState.everythingFilters,
        from: null,
        to: null,
      },
    });
    list.map((item) => {
      if (item.filter?.name === "Dates") {
        item.filter.value = "All";
      }
    });

    setOpenSubFilter(false);
  };

  return (
    <Container>
      <FilterContent>
        <FilterTitle>
          {openSubFilter && (
            <IconStyle
              src={backIcon}
              onClick={() => setOpenSubFilter(!openSubFilter)}
            />
          )}
          {openSubFilter ? currFilter : "FILTER"}
        </FilterTitle>
        {!openSubFilter && (
          <span>
            <SeparateLine></SeparateLine>
            <FilterSearch
              onClick={() => {
                openSubFilterHandle("Search in", [
                  { name: "Top Headlines" },
                  { name: "Everything" },
                ]);
              }}
            >
              {openSubFilter && (
                <SubFilter
                  list={currList}
                  currFilter={currFilter}
                  updateFiltersState={updateFiltersState}
                  setFilterStartDate={setFilterStartDate}
                  clearFilterDate={clearFilterDate}
                  setClearFilterDate={setClearFilterDate}
                />
              )}
              <AllSearches>Search in</AllSearches>
              <AllSearches>{filterType}</AllSearches>
            </FilterSearch>
          </span>
        )}
        <SeparateLine></SeparateLine>

        {openSubFilter ? (
          <SubFilter
            list={currList}
            currFilter={currFilter}
            updateFiltersState={updateFiltersState}
            setFilterStartDate={setFilterStartDate}
            clearFilterDate={clearFilterDate}
            setClearFilterDate={setClearFilterDate}
          />
        ) : (
          list.map((item, i) => (
            <div key={i}>
              <div>
                <CurrentFilter
                  disable={
                    filterType === "Top Headlines" &&
                    (i === 0
                      ? disableCountry
                      : i === 1
                      ? disableCategory
                      : disableSources)
                  }
                  onClick={() =>
                    openSubFilterHandle(item.filter?.name, item.listItems)
                  }
                >
                  <FilterCategory
                    categoryName={item.filter?.name!}
                    categoryOption={item.filter?.value}
                    exitIcon={filterStartDate && item.date}
                  />
                  {filterStartDate && item.date ? (
                    <IconStyle src={exit} onClick={clearFilter} />
                  ) : null}
                </CurrentFilter>
              </div>
              <SeparateLine></SeparateLine>
            </div>
          ))
        )}
      </FilterContent>
      <ButtonPosition>
        <Button
          buttonText={button.buttonText}
          onClick={() => onSubmit(filterType)}
          fullWidth={false}
        />
      </ButtonPosition>
    </Container>
  );
};

export default FilterTablet;
