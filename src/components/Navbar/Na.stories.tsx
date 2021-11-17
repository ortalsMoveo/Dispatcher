import Navbar from "./Navbar";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { FILTER_OPTIONS } from "../../FiltersData";
import { CurrentFilters } from "../../fetchers/MainPage/MainPage";
export default {
  component: Navbar,
  title: "Components/Navbar",
} as Meta;
const filter = {
  filterText: "Sources",
  listItems: ["Mako", "Ynet", "Walla", "BBC"],
  iconPath: "../../Icons/dropdown.svg",
};

const navbarProps = {
  icon: "../../Icons/search.svg",
  recentSearches: ["crypto", "soccer", "soccer"],
  filter: filter,
};
const stateHandler = () => {
  return FILTER_OPTIONS.EVERYTHING;
};
const currentStateHandler = () => {
  return { currentStateHandler };
};
const currentFilterState = {
  q: null, // Check if user anter query. if not render not data found
  pageSize: null,
  page: null,
  topHeadlinesFilters: {
    country: "us",
    category: null,
    sources: null,
  },
  everythingFilters: {
    from: null,
    to: null,
    language: null,
    sortBy: null,
    sources: null,
  },
};
// Here we define the content we want to render
const Template: Story = () => (
  <Navbar
    recentSearches={navbarProps.recentSearches}
    filterType={FILTER_OPTIONS.EVERYTHING}
    setFilterState={stateHandler}
    currentFilter={currentFilterState}
    setCurrentFilter={currentStateHandler}
  />
);

// Here we define variants
export const Primary = Template.bind({});
