import Clear from './Clear';
import { Meta, Story } from "@storybook/react";

export default {
    component: Clear,
    title: "Components/Clear",
  } as Meta;

// Here we define the content we want to render
const Template: Story = () => <Clear/>;

// Here we define variants
export const Primary = Template.bind({});

