import React, { FC } from 'react';
import {ButtonStyle, IconStyle} from './ButtonStyle';



export type ButtonTemplate = {
    buttonName: "primary" | "secondary" | "text";
    title: string;
    icon?: string;
    width: string;
}

const Button = ({buttonName, title, icon, width}: ButtonTemplate)  => {
    return(
        <ButtonStyle name={buttonName} width={width}>
            {title} 
            <IconStyle src={icon}/>
        </ButtonStyle>
    );   
}

export default Button;