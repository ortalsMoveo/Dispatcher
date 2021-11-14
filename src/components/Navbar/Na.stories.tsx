import Navbar from "./Navbar";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { FILTER_OPTIONS } from "../../FiltersData";
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

// Here we define the content we want to render
const Template: Story = () => (
  <Navbar
    recentSearches={navbarProps.recentSearches}
    filterType={FILTER_OPTIONS.EVERYTHING}
    setFilterState={stateHandler}
  />
);

// Here we define variants
export const Primary = Template.bind({});
