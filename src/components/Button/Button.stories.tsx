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
const Template: Story<ButtonProps> = (args) => 
  <Button {...args}
  />;
  
  // Here we define variants
  
  export const Primary = Template.bind({});
  Primary.args = { 
    buttonText: primaryButton.buttonText,
    buttonType: primaryButton.buttonType,
    icon: primaryButton.icon, 
    fullWidth: primaryButton.fullWidth
 };

 export const Secondary = Template.bind({});
 Secondary.args = { 
    buttonText: secondaryButton.buttonText,
    buttonType: secondaryButton.buttonType,
 };

 export const Tertiary = Template.bind({});
  Tertiary.args = { 
    buttonText: textButton.buttonText,
    buttonType: textButton.buttonType,
 };
