import { Meta, Story } from "@storybook/react";
import NoSearchResults from "./NoResults";

export default {
    component: NoSearchResults,
    title: "Components/NoSearchResults",
  } as Meta;

const SearchResults = {
  path: '../../not-found.svg',
  title: "We couldn't find any matches for your query"
}

const DataResults = {
  path: '../../chart.svg',
  title: "No data to display"
}
// Here we define the content we want to render
const Template: Story = () => <NoSearchResults logoPath={DataResults.path} title={DataResults.title}/>;

// Here we define variants
export const Primary = Template.bind({});

