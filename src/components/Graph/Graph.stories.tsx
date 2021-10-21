import Graph from './Graph';
import { Meta, Story } from "@storybook/react";

export default {
    component: Graph,
    title: "Components/Graph",
  } as Meta;

const graph = {
    title: "Sources",
    data: 'this is Data Graph!'
}

// Here we define the content we want to render
const Template: Story = () => <Graph title={graph.title} data={graph.data} />;

// Here we define variants
export const Primary = Template.bind({});

