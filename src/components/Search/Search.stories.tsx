import Search, {SearchProps} from './Search';
import { Meta, Story } from "@storybook/react";

export default {
    component: Search,
    title: "Components/Search",
  } as Meta;

const recentReaches = ["crypto", "soccer", "soccer"];

const filter = {
  filterText: "Sources",
  listItems: ['Mako', 'Ynet', 'Walla', 'BBC'],
  iconPath: '../../Icons/dropdown.svg',
}
// Here we define the content we want to render
const Template: Story<SearchProps> = (args) => <Search {...args} />;

// Here we define variants
export const Primary = Template.bind({});
Primary.args = {
  recentSearches: recentReaches,
}
