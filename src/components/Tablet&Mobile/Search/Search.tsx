import { Container, SearchContainer, Input } from "./SearchStyle";
import Icon from '../../Icon/Icon';

export interface SearchProps {
    searchIcon: string;
    icon?: string;
}
const Search = ({searchIcon, icon}: SearchProps) => {
    return(
        <Container>
            <SearchContainer>
                <Icon iconPath={searchIcon}/>
                <Input placeholder="Search"/>
            </SearchContainer>
            {icon? <Icon iconPath={icon} />: null}
        </Container>
    );
}

export default Search;