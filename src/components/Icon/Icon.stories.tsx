import Icon from './Icon';
import { Meta, Story } from "@storybook/react";
// import Icon1 from '../../../public/Icons/search.svg';


export default {
    component: Icon,
    title: "Components/Icon",
  } as Meta;
  

// Here we define the content we want to render
const Template: Story = () => <Icon iconPath='../../Icons/search.svg'/>;

// Here we define variants
export const Primary = Template.bind({});

// Primary.args = {
//     primary: true,
//     label: 'Clickk'
// };