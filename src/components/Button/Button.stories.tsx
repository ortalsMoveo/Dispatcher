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
  fullWidth: false
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
    fullWidth={primaryButton.fullWidth}
  />;

// Here we define variants
export const Primary = Template.bind({});

