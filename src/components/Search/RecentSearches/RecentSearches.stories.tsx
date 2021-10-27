import RecentSearches, {Searches} from './RecentSearches';
import { Meta, Story } from "@storybook/react";
import { ClearProps } from '../../Clear/Clear';

export default {
    component: RecentSearches,
    title: "Components/RecentSearches",
  } as Meta;

const recentReaches = ["crypto", "soccer", "soccer"];
const clearButton: ClearProps={
  gotBackground: false,
}

// Here we define the content we want to render
const Template: Story<Searches> = (args) => <RecentSearches {...args}/>;

// Here we define variants
export const Primary = Template.bind({});
Primary.args = {
  recentSearches: recentReaches, 
  clearButton: clearButton 
}
