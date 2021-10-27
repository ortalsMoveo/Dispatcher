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

    return(
        <DropDownContainer>
            <DropDownHeader 
                onClick={() => setOpen(!open)}
            >
                {filterText}<Icon iconPath={date?DateIcon:DropIcon} />
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