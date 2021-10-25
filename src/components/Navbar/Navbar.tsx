import { NavbarContainer, IconsContainer, Nav, Logo} from './NavbarStyle';
import Search,{SearchProps} from '../Search/Search';
import Icon from '../Icon/Icon';

export interface NavbarProps {
    search: SearchProps;
}

const Navbar = ({search}: NavbarProps) => {
    return(
        <NavbarContainer>
            <Nav>
                <Logo src='../../Group 1086418.svg'></Logo>
                <Search 
                    icon='../../Icons/search.svg'
                    recentSearches={search.recentSearches}
                    filter={search.filter}  
                />
            </Nav>
            <IconsContainer>
                <Icon iconPath="../../Icons/settings.svg"/> 
                <Icon iconPath="../../Icons/notifications.svg"/> 
                <Icon iconPath="../../Icons/User avatar.svg"/> 

            </IconsContainer>
        </NavbarContainer>
    );
}

export default Navbar;