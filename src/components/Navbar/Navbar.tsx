import { NavbarContainer, IconsContainer, Nav, Logo} from './NavbarStyle';
import Search from '../Search/Search';
import LogoIcon from '../../assets/Group 1086418.svg';
import settings from '../../assets/settings.svg';
import notifications from '../../assets/notifications.svg';
import avatar from '../../assets/User avatar.svg';
import React,{Dispatch} from 'react';
import { FILTER_OPTIONS } from '../../FiltersData';

export interface NavbarProps {
    recentSearches: string[];
    filterType?: FILTER_OPTIONS;
    setFilterState?: Dispatch<React.SetStateAction<FILTER_OPTIONS>>
    size?: string;
}

const Navbar = ({
    recentSearches, 
    filterType=FILTER_OPTIONS.TOP, 
    setFilterState=((value) => void(value)),
    size="desktop"}: NavbarProps) => {
    return(
        <NavbarContainer>
            <Nav>
                <Logo src={LogoIcon}></Logo>
                <Search 
                    recentSearches={recentSearches}
                    filterType={filterType}
                    setFilterState={setFilterState}
                    size={size}
                />
            </Nav>
            <IconsContainer>
                <img src={settings}/> 
                <img src={notifications}/>
                <img src={avatar}/> 
            </IconsContainer>
        </NavbarContainer>
    );
}

export default Navbar;