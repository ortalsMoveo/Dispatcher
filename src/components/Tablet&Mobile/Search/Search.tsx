import { Container, SearchContainer, Input } from "./SearchStyle";
import Icon from '../../Icon/Icon';
import backIcon from '../../../assets/back.svg';
import exitIcon from '../../../assets/exit.svg';
import { SearchResults } from "../../NoResults/NoSearchResults";

export interface SearchProps {
    icon?: string;
}
const Search = ({icon}: SearchProps) => {
    return(
        <Container>
            <SearchContainer>
                <Icon iconPath={backIcon}/>
                <Input placeholder="Search"/>
            </SearchContainer>
            {icon && <Icon iconPath={exitIcon} />}
        </Container>
    );
}

export default Search;