import {ButtonStyle, IconStyle} from './ButtonStyle';
import Arrow from '../../assets/Arrow - Right.svg';
import React from 'react';

export type ButtonType = "primary" | "secondary" | "text";

export interface ButtonProps {
    buttonType?: ButtonType;
    buttonText: string;
    icon?: boolean ;
    fullWidth?: boolean;
    onClick?: () => void; // TODO ->  remove ? 
}

const Button = ({buttonType='primary', buttonText, icon=false, fullWidth=false, onClick}: ButtonProps)  => {
    return(
        <ButtonStyle name={buttonType} fullWidth={fullWidth} onClick={onClick}>
            {buttonText} 
            {icon && <IconStyle src={Arrow}/>}
        </ButtonStyle>
    );   
}

export default Button;