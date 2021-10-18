import { IconStyle } from './IconStyle';

export interface Icon {
    iconPath: string;
}

const Icon = ({iconPath}: Icon) => {
    return(
        <IconStyle src={iconPath}/>
    );
}

export default Icon;