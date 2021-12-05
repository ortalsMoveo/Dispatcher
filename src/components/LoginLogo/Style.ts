import styled from "styled-components";

export const LogoContainer = styled.div`
  background: #262146;
  border-radius: 0px;
  width: 40%;
  height: 100vh;

  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    height: 35vh;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 40vh;
  } ;
`;

export const Logo = styled.img`
  width: 100%;
`;
