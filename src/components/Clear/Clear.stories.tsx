import Clear, { ClearProps } from "./Clear";
import { Meta, Story } from "@storybook/react";

export default {
  component: Clear,
  title: "Components/Clear",
} as Meta;

// Here we define the content we want to render
const Template: Story<ClearProps> = (args) => <Clear {...args} />;

// Here we define variants
export const Primary = Template.bind({});
Primary.args = {};
export const Secondary = Template.bind({});
Secondary.args = {
  gotBackground: true,
};
