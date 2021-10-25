import RecentSearches from './RecentSearches';
import { Meta, Story } from "@storybook/react";
import { ClearProps } from '../../Clear/Clear';

export default {
    component: RecentSearches,
    title: "Components/RecentSearches",
  } as Meta;

const recentReaches = ["crypto", "soccer", "soccer"];
const clearButton: ClearProps={
  smallScreen: false,
}

// Here we define the content we want to render
const Template: Story = () => <RecentSearches recentSearches={recentReaches} clearButton={clearButton}  />;

// Here we define variants
export const Primary = Template.bind({});

