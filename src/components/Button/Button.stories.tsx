import React from 'react';
import Button, {ButtonTemplate} from './Button';
import { Meta, Story } from "@storybook/react";


export default {
    component: Button,
    title: "Components/Button",
  } as Meta;

const primaryButton: ButtonTemplate = {
  title: 'NAVIGATE TO DISPATCH',
  buttonName: 'primary',
  width: '',
  icon: '../../Icons/Arrow - Right.svg'
}
const secondaryButton: ButtonTemplate = {
  title: 'SECONDARY',
  buttonName: 'secondary',
  width: ''
}
const textButton: ButtonTemplate = {
  title: 'TEXT BUTTON',
  buttonName: 'text',
  width: ''
}

// Here we define the content we want to render
const Template: Story = () => 
  <Button 
    title={primaryButton.title} 
    buttonName={primaryButton.buttonName} 
    width={primaryButton.width}
    icon={primaryButton.icon}
  />;

// Here we define variants
export const Primary = Template.bind({});

