import Search from './Search';
import { Meta, Story } from "@storybook/react";

export default {
    component: Search,
    title: "Components/SmallScreens/Search",
  } as Meta;

const downArrow = '../../Icons/back.svg' 
const icon = '../../Icons/exit.svg' 
// Here we define the content we want to render
const Template: Story = () => <Search searchIcon={downArrow} icon={icon}/>;

// Here we define variants
export const Primary = Template.bind({});

