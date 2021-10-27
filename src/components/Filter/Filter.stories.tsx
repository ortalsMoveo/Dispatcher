import Filter,{FilterProps} from './Filter';
import { Meta, Story } from "@storybook/react";

export default {
    component: Filter,
    title: "Components/Filter",
  } as Meta;


  const filter = {
    filterText: "Sources",
    listItems: ['Mako', 'Ynet', 'Walla', 'BBC'],
    date: false
  }
// Here we define the content we want to render
const Template: Story<FilterProps> = (args) => <Filter {...args}/>;

// Here we define variants
export const Primary = Template.bind({});

Primary.args = {
    filterText: filter.filterText,
    listItems: filter.listItems, 
    date: filter.date
}
