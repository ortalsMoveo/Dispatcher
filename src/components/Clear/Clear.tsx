import { ClearButton } from './Style';

export interface ClearProps {
    gotBackground: boolean;
}

const Clear = ({gotBackground}: ClearProps) => {
    return(
        <ClearButton backgroundColor={gotBackground}>CLEAR</ClearButton>
    );
}

export default Clear;