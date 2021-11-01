import {ButtonStyle, IconStyle} from './ButtonStyle';
import Arrow from '../../assets/Arrow - Right.svg';

export type ButtonType = "primary" | "secondary" | "text";

export interface ButtonProps {
    buttonType?: ButtonType;
    buttonText: string;
    icon?: boolean ;
    fullWidth?: boolean;
}

const Button = ({buttonType='primary', buttonText, icon=false, fullWidth=false}: ButtonProps)  => {
    return(
        <ButtonStyle name={buttonType} fullWidth={fullWidth}>
            {buttonText} 
            {icon && <IconStyle src={Arrow}/>}
        </ButtonStyle>
    );   
}

export default Button;