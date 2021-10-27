import Graph from './Graph';
import { Meta, Story } from "@storybook/react";
import { SearchResults } from '../NoResults/NoSearchResults';

export default {
    component: Graph,
    title: "Components/Graph",
  } as Meta;

  const searchResults: SearchResults = {
    logoPath: '../../chart.svg',
    text: "No data to display"
  }
const graph = {
    title: "Sources",
    data: 'this is Data Graph!',
    noDataToDisplay: searchResults,
}

// Here we define the content we want to render
const Template: Story = () => <Graph title={graph.title} data={graph.data} noDataToDisplay={graph.noDataToDisplay}/>;

// Here we define variants
export const Primary = Template.bind({});

