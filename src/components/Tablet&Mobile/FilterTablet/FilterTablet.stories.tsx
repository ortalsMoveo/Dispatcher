import FilterTablet, { FilterProps } from "./FilterTablet";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "../../Button/Button";

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

const listItems = [cat1, cat2, cat3];
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
  list: subFilterList,
  button: primaryButton,
  subFilter: true,
};
