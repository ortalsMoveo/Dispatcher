import { Meta, Story } from "@storybook/react";
import NoSearchResults from "./NoSearchResults";

export default {
  component: NoSearchResults,
  title: "Components/NoSearchResults",
} as Meta;

const SearchResults = {
  path: "../../not-found.svg",
  text: "We couldn't find any matches for your query",
};

const DataResults = {
  path: "../../chart.svg",
  text: "No data to display",
};
// Here we define the content we want to render
const Template: Story = () => (
  <NoSearchResults logoPath={DataResults.path} text={DataResults.text} />
);

// Here we define variants
export const Primary = Template.bind({});
