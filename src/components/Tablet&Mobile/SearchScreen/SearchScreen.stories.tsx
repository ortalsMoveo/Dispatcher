import SearchScreen from './SearchScreen';
import { Meta, Story } from "@storybook/react";
import RecentSearches,{Searches} from '../../Search/RecentSearches/RecentSearches';


export default {
    component: SearchScreen,
    title: "Components/SmallScreens/SearchScreen",
  } as Meta;
 
  const downArrow = '../../Icons/back.svg' 
  const icon = '../../Icons/exit.svg' 

const searchProps = {
    searchIcon : downArrow,
    icon: icon
} 
 
const recentReaches = ["crypto", "soccer", "soccer"];

// Here we define the content we want to render
const Template: Story = () => <SearchScreen searchProps={searchProps} recentSearches={recentReaches}/>;

// Here we define variants
export const Primary = Template.bind({});

