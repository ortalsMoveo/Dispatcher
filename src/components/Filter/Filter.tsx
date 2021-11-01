import { DropDownContainer, DropDownHeader, DropDownListContainer, ListItems } from "./Style";
import Icon from '../Icon/Icon';
import {useState} from 'react';
import DropIcon from '../../assets/dropdown.svg';
import DateIcon from '../../assets/date.svg';

export interface FilterProps {
    filterText: string;
    listItems: string[];
    date?: boolean;
}

const Filter = ({filterText, listItems, date=false}: FilterProps) => {
    const [open, setOpen] = useState(false);
    let icon =  DropIcon;
    if(date){
        icon = DateIcon;
    }

    return(
        <DropDownContainer>
            <DropDownHeader 
                onClick={() => setOpen(!open)}
            >
                {filterText}<Icon iconPath={icon} />
            </DropDownHeader>
            {open && (
            <DropDownListContainer>
                {listItems && listItems.map((item) => (
                    <ListItems>{item}</ListItems>

                ))}
            </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}


export default Filter;