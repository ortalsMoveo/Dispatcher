import styled from "styled-components";

export const LogoContainer = styled.div`
  background: #262146;
  border-radius: 0px;
  width: 40%;
  height: 100%;
  height: 1400px;
  display: flex;
  @media (max-width: 770px) {
    width: 100%;
    height: 325px;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 250px;
  } ;
`;

export const Logo = styled.img`
  width: 100%;
`;
