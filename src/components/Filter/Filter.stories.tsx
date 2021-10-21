import Filter from './Filter';
import { Meta, Story } from "@storybook/react";

export default {
    component: Filter,
    title: "Components/Filter",
  } as Meta;


  const filter = {
    filterText: "Sources",
    listItems: ['Mako', 'Ynet', 'Walla', 'BBC'],
    iconPath: '../../Icons/dropdown.svg',
  }
// Here we define the content we want to render
const Template: Story = () => <Filter   
  filterText={filter.filterText}
  listItems={filter.listItems} 
  iconPath={filter.iconPath} />;

// Here we define variants
export const Primary = Template.bind({});

