import React from 'react';
import Button, {ButtonProps} from './Button';
import { Meta, Story } from "@storybook/react";


export default {
    component: Button,
    title: "Components/Button",
  } as Meta;

const primaryButton: ButtonProps = {
  buttonType: 'primary',
  buttonText: 'NAVIGATE TO DISPATCH',
  icon: '../../Icons/Arrow - Right.svg',
  isFullWidth: true
}
const secondaryButton: ButtonProps = {
  buttonText: 'SECONDARY',
  buttonType: 'secondary',
}
const textButton: ButtonProps = {
  buttonText: 'TEXT BUTTON',
  buttonType: 'text',
}

// Here we define the content we want to render
const Template: Story = () => 
  <Button 
    buttonText={primaryButton.buttonText} 
    buttonType={primaryButton.buttonType} 
    icon={primaryButton.icon}
    isFullWidth={primaryButton.isFullWidth}
  />;

// Here we define variants
export const Primary = Template.bind({});

