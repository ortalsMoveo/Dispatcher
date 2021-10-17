import { IconStyle } from './IconStyle';

export type icon = {
    iconPath: string;
}

const Icon = ({iconPath}: icon) => {
    return(
        <IconStyle src={iconPath}/>
    );
}

export default Icon;