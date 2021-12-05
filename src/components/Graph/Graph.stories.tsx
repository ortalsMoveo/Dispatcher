import Graph from "./Graph";
import { Meta, Story } from "@storybook/react";
import { SearchResults } from "../NoResults/NoSearchResults";

export default {
  component: Graph,
  title: "Components/Graph",
} as Meta;

const searchResults: SearchResults = {
  noQuery: false,
};
const graph = {
  title: "Sources",
  data: [{ name: "Ynet", numInstance: 1 }],
  noQuery: false,
};

// Here we define the content we want to render
const Template: Story = () => (
  <Graph
    title={graph.title}
    data={graph.data}
    noQuery={false}
    cardsLength={10}
  />
);

// Here we define variants
export const Primary = Template.bind({});
