import { Container, SearchContainer, Input } from "./SearchStyle";
import backIcon from '../../../assets/back.svg';
import exitIcon from '../../../assets/exit.svg';
import { SearchResults } from "../../NoResults/NoSearchResults";
import React from "react";

export interface SearchProps {
    icon?: string;
}
const Search = ({icon}: SearchProps) => {
    return(
        <Container>
            <SearchContainer>
                <img 
                    src={backIcon}
                    onClick={() => console.log('GO back')}
                    alt="backIcon"
                />
                <Input placeholder="Search"/>
            </SearchContainer>
            {icon && 
                <img 
                    src={exitIcon} 
                    onClick={() => console.log('Delete search')}
                    alt="exitIcon"
                />
            }
        </Container>
    );
}

export default Search;