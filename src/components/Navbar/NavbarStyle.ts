import styled from "styled-components";
import { darkBlue, blue, white } from "../../globalStyle";

export const NavbarContainer = styled.div`
  background: ${darkBlue};
  display: flex;
  justify-content: space-between;
  height: 74px;
  width: 100%;
  /* gap: 2%; */
  /* min-width: 768px; */
  position: fixed;
  top: 0;
  z-index: 3;
  @media (max-width: 768px) {
    max-width: 768px;
  }
  @media (max-width: 480px) {
    width: 100vw;
  } ;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  gap: 5%;
  @media (max-width: 768px) {
    /* gap: 2%;
    width: 80%; */
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  padding-right: 5px;
`;

export const Icons = styled.div`
  display: flex;
  padding: 15px 0px;
  margin: 10px 0px;
  gap: 11px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 74px;
  padding: 4px 0px;
  margin: 11px 0px;
  padding-left: 10px;
`;

export const MobileSearch = styled.img`
  width: 40px;
  padding: 15px 0px;
  margin: 10px 0px;
  gap: 11px;

  @media (min-width: 481px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  background: ${blue};
  border-radius: 30px;
  color: ${white};
  text-align: center;
  width: 50px;
  height: 50px;
  /* padding: 13px; */
  margin: 13px;
  padding: 15px 0px;
  /* margin: 10px; */
  box-sizing: border-box;
`;
