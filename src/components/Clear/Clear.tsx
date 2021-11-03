import { ClearButton } from './Style';
import React from 'react';

export interface ClearProps {
   gotBackground?: boolean;
   onClick?: () => void;
}

const Clear = ({gotBackground=false, onClick}: ClearProps) => {
    return(
        <ClearButton 
            backgroundColor={gotBackground}
            onClick={onClick}
        >
            CLEAR
        </ClearButton>
    );
}

export default Clear;