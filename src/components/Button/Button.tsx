import {ButtonStyle, IconStyle} from './ButtonStyle';
import Arrow from '../../assets/Arrow - Right.svg';

export type ButtonType = "primary" | "secondary" | "text";

export interface ButtonProps {
    buttonType?: ButtonType;
    buttonText: string;
    icon?: string;
    fullWidth?: boolean;
}

const Button = ({buttonType='primary', buttonText, icon, fullWidth=false}: ButtonProps)  => {
    return(
        <ButtonStyle name={buttonType} fullWidth={fullWidth}>
            {buttonText} 
            <IconStyle src={icon}/>
        </ButtonStyle>
    );   
}

export default Button;