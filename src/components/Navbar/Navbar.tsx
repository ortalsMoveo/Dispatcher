import { NavbarContainer, IconsContainer, Nav, Logo, MobileSearch} from './NavbarStyle';
import Search from '../Search/Search';
import LogoIcon from '../../assets/Group 1086418.svg';
import settings from '../../assets/settings.svg';
import notifications from '../../assets/notifications.svg';
import avatar from '../../assets/User avatar.svg';
import React,{Dispatch} from 'react';
import { FILTER_OPTIONS } from '../../FiltersData';
import SearchIcon from '../../assets/search.svg';

export interface NavbarProps {
    recentSearches: string[];
    filterType?: FILTER_OPTIONS;
    setFilterState?: Dispatch<React.SetStateAction<FILTER_OPTIONS>>
}

const Navbar = ({
    recentSearches, 
    filterType=FILTER_OPTIONS.TOP, 
    setFilterState=((value) => void(value)),}: NavbarProps) => {
    return(
        <NavbarContainer>
            <Nav>
                <Logo src={LogoIcon}></Logo>
                    <Search 
                        recentSearches={recentSearches}
                        filterType={filterType}
                        setFilterState={setFilterState}
                    />
                
            </Nav>
            <IconsContainer>
                <MobileSearch src={SearchIcon} onClick={() => console.log('Click to open search component')}/> 
                <img src={settings}/> 
                <img src={notifications}/>
                <img src={avatar}/> 
            </IconsContainer>
        </NavbarContainer>
    );
}

export default Navbar;