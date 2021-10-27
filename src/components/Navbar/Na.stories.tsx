import Navbar,{NavbarProps} from './Navbar';
import { Meta, Story } from "@storybook/react";

export default {
    component: Navbar,
    title: "Components/Navbar",
  } as Meta;
  const filter = {
    filterText: "Sources",
    listItems: ['Mako', 'Ynet', 'Walla', 'BBC'],
    iconPath: '../../Icons/dropdown.svg',
  }

const navbarProps = {
  icon: '../../Icons/search.svg',
  recentSearches: ["crypto", "soccer", "soccer"],
  filter: filter

}

// Here we define the content we want to render
const Template: Story = () => <Navbar search={navbarProps}
  
  />;

// Here we define variants
export const Primary = Template.bind({});

