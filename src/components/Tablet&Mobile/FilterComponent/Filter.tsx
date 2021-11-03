import {Container, Sort} from './FilterStyle';
import Icon from '../../Icon/Icon';
import FilterIcon from '../../../assets/filter.svg';
import DropIcon from '../../../assets/dropdown.svg';
import React,{Dispatch} from 'react'

export interface FilterProps {
    currState: boolean
    setfilterState: Dispatch<boolean>;
}
const Filter = ({currState, setfilterState}: FilterProps) => {
    return(
        <Container>
            <Sort>
                Sort By
                <Icon iconPath={DropIcon}/>
            </Sort>
            <Icon iconPath={FilterIcon} onClick={() => setfilterState(true)} alt="Filter Icon"/>
        </Container>
    );
}

export default Filter 