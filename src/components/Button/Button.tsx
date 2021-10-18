import {ButtonStyle, IconStyle} from './ButtonStyle';

export type ButtonType = "primary" | "secondary" | "text";

export interface ButtonProps {
    buttonType: ButtonType;
    buttonText: string;
    icon?: string;
    isFullWidth?: boolean;
}

const Button = ({buttonType, buttonText, icon, isFullWidth}: ButtonProps)  => {
    return(
        <ButtonStyle name={buttonType} >
            {buttonText} 
            <IconStyle src={icon}/>
        </ButtonStyle>
    );   
}

export default Button;