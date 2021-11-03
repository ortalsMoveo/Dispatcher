import { ClearButton } from './Style';

export interface ClearProps {
    gotBackground: boolean;
    onClick?: () => void;
}

const Clear = ({gotBackground, onClick}: ClearProps) => {
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