import { DropDownContainer, DropDownHeader, DropDownListContainer, ListItems } from "./Style";
import Icon from '../Icon/Icon';
import React ,{useState} from 'react';

export interface FilterProps {
    filterText: string;
    listItems: string[];
    iconPath: string;
}

const Filter = ({filterText, listItems, iconPath}: FilterProps) => {
    const [dropDownClicked, setDropDownClicked] = useState(false);

    return(
        <DropDownContainer>
            <DropDownHeader 
                onClick={() => setDropDownClicked(!dropDownClicked)}
            >
                {filterText}<Icon iconPath={iconPath} />
            </DropDownHeader>
            {dropDownClicked ? (
                <DropDownListContainer>
                    {listItems ? listItems.map((item) => (
                        <ListItems>{item}</ListItems>

                    )): null}
                </DropDownListContainer>
            ) : null}
        </DropDownContainer>
    );
}


export default Filter;