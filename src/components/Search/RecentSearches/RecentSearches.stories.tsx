import RecentSearches from './RecentSearches';
import { Meta, Story } from "@storybook/react";

export default {
    component: RecentSearches,
    title: "Components/RecentSearches",
  } as Meta;

const recentReaches = ["crypto", "soccer", "soccer"];

// Here we define the content we want to render
const Template: Story = () => <RecentSearches recentSearches={recentReaches}  />;

// Here we define variants
export const Primary = Template.bind({});

