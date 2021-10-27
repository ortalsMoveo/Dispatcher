import Filter from './Filter';
import { Meta, Story } from "@storybook/react";

export default {
    component: Filter,
    title: "Components/SmallScreens/Filter",
  } as Meta;

const downArrow = '../../assets/dropdown.svg';
const icon = '../../assets/filter.svg' 
// Here we define the content we want to render
const Template: Story = (args) => <Filter {...args} />;

// Here we define variants
export const Primary = Template.bind({});
Primary.args = {
  sortbyIcon: downArrow,
  icon: icon
}