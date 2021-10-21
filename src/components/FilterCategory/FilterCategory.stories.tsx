import FilterCategory from './FilterCategory';
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
const Template: Story = () => <FilterCategory   
   categoryName={filterCategory.categoryName}
   categoryOption={filterCategory.categoryOption}
/>;

// Here we define variants
export const Primary = Template.bind({});

