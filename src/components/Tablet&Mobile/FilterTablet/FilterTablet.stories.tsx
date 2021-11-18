import FilterTablet, { FilterProps } from "./FilterTablet";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "../../Button/Button";
import { FilterData } from "../../../FiltersData";

export default {
  component: FilterTablet,
  title: "Components/FilterTablet",
} as Meta;

const cat1 = {
  categoryName: "Sources",
  categoryOption: "All",
};
const cat2 = {
  categoryName: "Language",
  categoryOption: "All",
};
const cat3 = {
  categoryName: "Dates",
  categoryOption: "All",
};

const list: FilterData[] = [
  {
    filterText: "Country",
    listItems: [
      "Country",
      "United Kingdom",
      "United States",
      "Israel",
      "Italy",
      "Mexioco",
      "Portugal",
      "Czechia",
      "Belgium",
    ],
  },
  {
    filterText: "Category",
    listItems: [
      "Category",
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
  },
  {
    filterText: "Sources",
    listItems: [],
  },
];

const subFilterList = [
  { categoryName: "CBS" },
  { categoryName: "NBC" },
  { categoryName: "Sport 1" },
  { categoryName: "Ynet" },
  { categoryName: "Walla" },
];
const icon = "../../Icons/Arrow - Right.svg";
const primaryButton: ButtonProps = {
  buttonText: "VIEW RESULTS",
};
// Here we define the content we want to render
const Template: Story<FilterProps> = (args) => <FilterTablet {...args} />;

// Here we define variants
export const Primary = Template.bind({});
Primary.args = {
  title: "SOURCES",
  icon: "../../Icons/Arrow - Right.svg",
  list: list,
  button: primaryButton,
  subFilter: true,
};
