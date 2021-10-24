import { ClearButton } from './Style';

export interface ClearProps {
    smallScreen: boolean;
}

const Clear = ({smallScreen}: ClearProps) => {
    return(
        <ClearButton backgroundColor={smallScreen}>CLEAR</ClearButton>
    );
}

export default Clear;