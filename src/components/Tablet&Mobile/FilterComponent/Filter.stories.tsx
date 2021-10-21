import Filter from './Filter';
import { Meta, Story } from "@storybook/react";

export default {
    component: Filter,
    title: "Components/SmallScreens/Filter",
  } as Meta;

const downArrow = '../../Icons/dropdown.svg' 
const icon = '../../Icons/filter.svg' 
// Here we define the content we want to render
const Template: Story = () => <Filter sortbyIcon={downArrow} icon={icon}/>;

// Here we define variants
export const Primary = Template.bind({});

