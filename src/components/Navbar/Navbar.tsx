import { NavbarContainer, IconsContainer, Nav, Logo } from "./NavbarStyle";
import Search from "../Search/Search";
import LogoIcon from "../../assets/Group 1086418.svg";
import settings from "../../assets/settings.svg";
import notifications from "../../assets/notifications.svg";
import avatar from "../../assets/User avatar.svg";
import React, { Dispatch } from "react";
import { FILTER_OPTIONS } from "../../FiltersData";
import { CurrentFilters } from "../../fetchers/MainPage/MainPage";

export interface NavbarProps {
  recentSearches: string[];
  filterType: FILTER_OPTIONS;
  setFilterState: Dispatch<React.SetStateAction<FILTER_OPTIONS>>;
  currentFilter: CurrentFilters;
  setCurrentFilter: Dispatch<React.SetStateAction<CurrentFilters>>;
}

const Navbar = ({
  recentSearches,
  filterType,
  setFilterState,
  currentFilter,
  setCurrentFilter,
}: NavbarProps) => {
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
        <img src={settings} alt="settings" />
        <img src={notifications} alt="notifications" />
        <img src={avatar} alt="avatar" />
      </IconsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
