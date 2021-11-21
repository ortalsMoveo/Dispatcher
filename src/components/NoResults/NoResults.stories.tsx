import { Meta, Story } from "@storybook/react";
import NoSearchResults from "./NoSearchResults";

export default {
  component: NoSearchResults,
  title: "Components/NoSearchResults",
} as Meta;

const DataResults = {
  path: "../../chart.svg",
  text: "No data to display",
};
// Here we define the content we want to render
const Template: Story = () => <NoSearchResults noQuery={false} />;

// Here we define variants
export const Primary = Template.bind({});
