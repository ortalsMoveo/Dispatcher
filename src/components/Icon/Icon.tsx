export interface Icon {
    iconPath: string;
}

const Icon = ({iconPath}: Icon) => {
    return(
        <img src={iconPath}/>
    );
}

export default Icon;