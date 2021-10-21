import {Container, Sort} from './FilterStyle';
import Icon from '../../Icon/Icon';

interface Filter {
    sortbyIcon: string;
    icon: string
}
const Filter = ({sortbyIcon, icon}: Filter) => {
    return(
        <Container>
            <Sort>
                Sort By
                <Icon iconPath={sortbyIcon}/>
            </Sort>
            <Icon iconPath={icon}/>
        </Container>
    );
}

export default Filter 