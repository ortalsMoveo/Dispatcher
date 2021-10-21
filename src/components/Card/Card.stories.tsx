import Card from './Card';
import { Meta, Story } from "@storybook/react";
import {ButtonProps} from '../Button/Button';
import { CardText } from './Card'; 

export default {
    component: Card,
    title: "Components/Card",
  } as Meta;

const primaryButton: ButtonProps = {
  buttonType: 'primary',
  buttonText: 'NAVIGATE TO DISPATCH',
  icon: '../../Icons/Arrow - Right.svg',
  fullWidth: false
}
const cardText = {
  date: "Friday Jun 25, 2021",
  title: "Vaccination Operation is officially underway",
  sourcePath: "Walla.co.il",
  text: 'Simone has withdrawn from the event final for floor and will make a decision on beam later this week\" USA Gymnastics said. "\Either way, we\'re all behind you, Simone.'
}
const data =["#Covid-19", "Israel", "+2"];

// Here we define the content we want to render
const Template: Story = () => <Card 
  imagePath='../../logo192.png' 
  tags={data} buttonProps={primaryButton} 
  cardData={cardText}
/>;

// Here we define variants
export const Primary = Template.bind({});

