import {
  NavbarContainer,
  IconsContainer,
  Nav,
  Logo,
  Avatar,
  Icons,
  MobileSearch,
} from "./NavbarStyle";
import Search from "../Search/Search";
import LogoIcon from "../../assets/Group 1086418.svg";
import settings from "../../assets/settings.svg";
import notifications from "../../assets/notifications.svg";
import React, { Dispatch } from "react";
import { FILTER_OPTIONS } from "../../FiltersData";
import { useAuth0 } from "@auth0/auth0-react";
import { CurrentFilters } from "../../fetchers/MainPage/MainPage";

export interface NavbarProps {
  recentSearches: string[];
  filterType: FILTER_OPTIONS;
  setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
  setMobileSearch?: Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({
  recentSearches,
  filterType,
  setFilterState,
  currentFilter,
  setCurrentFilter,
  setMobileSearch,
}: NavbarProps) => {
  const { logout, user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const onClickHandler = () => {
      if(setMobileSearch){
          setMobileSearch(true);
      }

  }
  return (
    <NavbarContainer>
      <Nav>
        <Logo src={LogoIcon}></Logo>
        <Search
          recentSearches={recentSearches}
          filterType={filterType}
          setFilterState={setFilterState}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      </Nav>
      <IconsContainer>
        <MobileSearch src={SearchIcon} onClick={onClickHandler}/> 
          <Icons>
              <img src={settings}/> 
              <img src={notifications}/>
          </Icons>
        <Avatar onClick={() => logout({ returnTo: window.location.origin })}>
          {user?.name?.charAt(0)}
          {user?.family_name?.charAt(0)}
        </Avatar>
      </IconsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
