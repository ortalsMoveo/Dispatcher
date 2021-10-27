import {Container, Sort} from './FilterStyle';
import Icon from '../../Icon/Icon';
import FilterIcon from '../../../assets/filter.svg';
import DropIcon from '../../../assets/dropdown.svg';

const Filter = () => {
    return(
        <Container>
            <Sort>
                Sort By
                <Icon iconPath={DropIcon}/>
            </Sort>
            <Icon iconPath={FilterIcon}/>
        </Container>
    );
}

export default Filter 