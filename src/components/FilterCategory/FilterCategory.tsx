import { Category, Name, Option } from "./FilterCategoryStyle";
import React from "react";
export interface Category {
  categoryName: string;
  categoryOption?: string;
  exitIcon?: boolean;
  clearFilter?: () => void;
}

const FilterCategory = ({
  categoryName,
  categoryOption,
  exitIcon,
  clearFilter,
}: Category) => {
  return (
    <Category exitIcon={exitIcon!}>
      <Name>{categoryName}</Name>
      <Option>{categoryOption}</Option>
    </Category>
  );
};

export default FilterCategory;
