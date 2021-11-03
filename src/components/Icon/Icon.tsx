import React from "react";

export interface Icon {
    iconPath: string;
    onClick?: () => void;
    alt?: string;
}

const Icon = ({iconPath, onClick, alt}: Icon) => {
    return(
        <img src={iconPath} onClick={onClick} alt={alt}/>
    );
}

export default Icon;