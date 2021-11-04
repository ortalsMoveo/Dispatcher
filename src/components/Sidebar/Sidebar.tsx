import {ButtonProps} from '../Button/Button';
import FilterTablet from '../Tablet&Mobile/FilterTablet/FilterTablet';
import {useState} from 'react';
import {subFilterList} from '../../FiltersData';
import React from 'react';

const button: ButtonProps = {
    buttonText: 'VIEW RESULTS',
}

interface SidebarProps {
    subFilter?: boolean;
}

const Sidebar = ({subFilter=false}: SidebarProps) => {
    const [headLine, setHeadline] = useState("FILTER");

    return(
        <FilterTablet 
            title={headLine}
            list={subFilterList}
            button={button}
            subFilter={subFilter}  
        /> 
    );
}

export default Sidebar;