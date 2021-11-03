import { DropDownContainer, DropDownHeader, DropDownListContainer, ListItems } from "./Style";
import Icon from '../Icon/Icon';
import React,{useState, Dispatch} from 'react';
import DropIcon from '../../assets/dropdown.svg';
import DateIcon from '../../assets/date.svg';
import { FILTER_OPTIONS } from '../../FiltersData';


export interface FilterProps {
    filterText: string;
    listItems: string[];
    date?: boolean;
    setFilterState?: Dispatch<React.SetStateAction<FILTER_OPTIONS>> // TODO need to change the state filter
}

const Filter = ({filterText, listItems, date=false, setFilterState}: FilterProps) => {
    const [open, setOpen] = useState(false);
    let icon =  DropIcon;
    if(date){
        icon = DateIcon;
    }

    const onClickHandle = (item: string) => {
        setFilterState &&
        setFilterState(item === "Top Headlines" ? FILTER_OPTIONS.TOP : FILTER_OPTIONS.EVERYTHING );
    } 

    return(
        <DropDownContainer>
            <DropDownHeader 
                onClick={() => setOpen(!open)}>
                {filterText}<Icon iconPath={icon} />
            </DropDownHeader>
            {open && (
                <DropDownListContainer>
                    {listItems && listItems.map((item, i) => (
                        <ListItems key={i} onClick={() => onClickHandle(item)}>{item}</ListItems>
                    ))}
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}


export default Filter;