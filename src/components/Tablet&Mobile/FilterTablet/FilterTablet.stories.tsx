import FilterTablet, { FilterProps } from "./FilterTablet";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "../../Button/Button";
import { FilterData, FILTER_OPTIONS } from "../../../FiltersData";

export default {
  component: FilterTablet,
  title: "Components/FilterTablet",
} as Meta;

const list: FilterData[] = [
  {
    filterText: "Country",
    listItems: [
      {
        id: "",
        name: "Country",
      },
      {
        id: "uk",
        name: "United Kingdom",
      },
      {
        id: "us",
        name: "United States",
      },
      {
        id: "il",
        name: "Israel",
      },
    ],
  },
  {
    filterText: "Category",
    listItems: [
      {
        id: "",
        name: "Category",
      },
      {
        id: "business",
        name: "Business",
      },
      {
        id: "entertainment",
        name: "Entertainment",
      },
      {
        id: "general",
        name: "General",
      },
      {
        id: "health",
        name: "Health",
      },
      {
        id: "science",
        name: "Science",
      },
      {
        id: "sports",
        name: "Sports",
      },
      {
        id: "technology",
        name: "Technology",
      },
    ],
  },
  {
    filterText: "Sources",
    listItems: [
      {
        name: "Aftenposten",
      },
      {
        name: "ANSA",
      },
      {
        name: "Axios",
      },
      {
        name: "Bild",
      },
      {
        name: "Bloomberg",
      },
      {
        name: "Axios",
      },
      {
        name: "Axios",
      },
    ],
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
  filterType: FILTER_OPTIONS.EVERYTHING,
  list: list,
  button: primaryButton,
  subFilter: true,
};
