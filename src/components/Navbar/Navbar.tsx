import { NavbarContainer, IconsContainer, Nav, Logo} from './NavbarStyle';
import Search,{SearchProps} from '../Search/Search';
import Icon from '../Icon/Icon';
import LogoIcon from '../../assets/Group 1086418.svg';
import settings from '../../assets/settings.svg';
import notifications from '../../assets/notifications.svg';
import avatar from '../../assets/User avatar.svg';

export interface NavbarProps {
    search: SearchProps;
}

const Navbar = ({search}: NavbarProps) => {
    return(
        <NavbarContainer>
            <Nav>
                <Logo src={LogoIcon}></Logo>
                <Search 
                    recentSearches={search.recentSearches}
                />
            </Nav>
            <IconsContainer>
                <Icon iconPath={settings}/> 
                <Icon iconPath={notifications}/>
                <Icon iconPath={avatar}/> 
            </IconsContainer>
        </NavbarContainer>
    );
}

export default Navbar;