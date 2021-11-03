import {Category, Name, Option} from './FilterCategoryStyle';
import React from 'react';

export interface Category {
    categoryName: string;
    categoryOption?: string;
}

const FilterCategory = ({categoryName, categoryOption}: Category) => {
    return(
        <Category onClick={() => console.log("Category name: ", categoryName, categoryOption)}>
            <Name>{categoryName}</Name>
            <Option>{categoryOption}</Option>
        </Category>
    );
}

export default FilterCategory;