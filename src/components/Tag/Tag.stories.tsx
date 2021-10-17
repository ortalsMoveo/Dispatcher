import Tag from './Tag';
import { Meta, Story } from "@storybook/react";

export default {
    component: Tag,
    title: "Components/Tag",
  } as Meta;

  const title = "#Covid-19";
// Here we define the content we want to render
const Template: Story = () => <Tag title={title}/>;

// Here we define variants
export const Primary = Template.bind({});

