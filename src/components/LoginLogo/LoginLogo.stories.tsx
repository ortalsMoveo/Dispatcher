import LoginLogo from './LoginLogo';
import { Meta, Story } from "@storybook/react";

export default {
    component: LoginLogo,
    title: "Components/LoginLogo",
  } as Meta;

const logoPath = '../../Group 1086418.svg'

// Here we define the content we want to render
const Template: Story = () => <LoginLogo logoPath={logoPath}/>;

// Here we define variants
export const Primary = Template.bind({});
