import styled from "styled-components";
import { lightBlue, gray, GhostWhite } from "../../globalStyle";

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: Roboto;
  background: ${GhostWhite};
  @media (max-width: 768px) {
    flex-direction: column;
    height: 1024px;
  }
  @media (max-width: 376px) {
    flex-direction: column;
    height: 667px;
  } ;
`;

export const PageContent = styled.div`
  margin: auto 0px;
  padding: 50px;
  width: 40%;
  color: ${lightBlue};
  @media (max-width: 768px) {
    width: 90%;
    padding: 10px 20px;
    text-align: center;
    height: 699px;
  }
  @media (max-width: 376px) {
    width: 90%;
    text-align: center;
    height: 417px;
    padding: 0px;
    margin: 10px 20px;
  } ;
`;

export const Title = styled.div`
  margin: 24px 0px;
  font-weight: 300;
  font-size: 48px;
  letter-spacing: 0.25px;
  color: ${lightBlue};
  @media (max-width: 768px) {
    font-size: 42px;
    margin: 10px 0px;
  }
  @media (max-width: 376px) {
    font-size: 32px;
    line-height: 22px;
  } ;
`;

export const TextPage = styled.div`
  font-weight: 200;
  font-size: 36px;
  letter-spacing: 0.25px;
  margin: 24px 0px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
    margin: 20px;
    padding-bottom: 350px;
  }
  @media (max-width: 376px) {
    font-size: 22px;
    margin: 0px;
    padding-bottom: 185px;
  } ;
`;

export const ButtonPosition = styled.div`
  @media (max-width: 770px) {
    padding: 10px;
  } ;
`;
export const SeparateLine = styled.div`
  opacity: 0.5;
  border: 1px solid ${gray};
  margin: 20px 0px;
`;
