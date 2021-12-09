import SearchScreen, { SearchScreenProps } from "./SearchScreen";
import { Meta, Story } from "@storybook/react";
import RecentSearches, {
  RecentSearchesProps,
} from "../../Search/RecentSearches/RecentSearches";
import React, { Dispatch } from "react";

export default {
  component: SearchScreen,
  title: "Components/SmallScreens/SearchScreen",
} as Meta;

const downArrow = "../../Icons/back.svg";
const icon = "../../Icons/exit.svg";

const searchProps = {
  searchIcon: downArrow,
  icon: icon,
};

const recentReaches = ["crypto", "soccer", "soccer"];
const setState = () => {
  return false;
};
// Here we define the content we want to render

const Template: Story<SearchScreenProps> = (args) => <SearchScreen {...args} />;

// Here we define variants
export const Primary = Template.bind({});
Primary.args = {
  // recentSearches: recentReaches,
  setMobileSearch: setState,
};
