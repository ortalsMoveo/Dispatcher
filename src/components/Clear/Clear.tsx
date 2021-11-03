import { ClearButton } from './Style';
import React from 'react';

export interface ClearProps {
    gotBackground?: boolean;
}

const Clear = ({gotBackground=false}: ClearProps) => {
    return(
        <ClearButton backgroundColor={gotBackground}>CLEAR</ClearButton>
    );
}

export default Clear;