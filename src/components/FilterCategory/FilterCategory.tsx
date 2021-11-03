import {Category, Name, Option} from './FilterCategoryStyle';

export interface Category {
    categoryName: string;
    categoryOption?: string;
}

const FilterCategory = ({categoryName, categoryOption}: Category) => {
    return(
        <Category>
            <Name>{categoryName}</Name>
            <Option onClick={() => console.log("Category name: ", categoryName, categoryOption)}>{categoryOption}</Option>
        </Category>
    );
}

export default FilterCategory;