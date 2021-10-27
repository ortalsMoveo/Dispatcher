import FilterCategory,{Category} from './FilterCategory';
import { Meta, Story } from "@storybook/react";

export default {
    component: FilterCategory,
    title: "Components/FilterCategory",
  } as Meta;


  const filterCategory = {
    categoryName: 'Sources',
    categoryOption: 'All'
  }
// Here we define the content we want to render
const Template: Story<Category> = (args) => <FilterCategory  {...args} 
/>;

// Here we define variants
export const Primary = Template.bind({});
Primary.args = {
  categoryName: filterCategory.categoryName, 
  categoryOption: filterCategory.categoryOption
}