import styled from "styled-components";
import { lightBlue, gray, GhostWhite } from "../../globalStyle";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-family: Roboto;
  background: ${GhostWhite};
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: 100%;
  } ;
`;

export const PageContent = styled.div`
  margin: auto 0px;
  padding: 50px;
  width: 40%;
  color: ${lightBlue};
  @media (max-width: 768px) {
    width: 98%;
    padding: 20px 10px;
    text-align: center;
  }
  @media (max-width: 480px) {
    width: 90%;
    height: 70%;
    text-align: center;
    padding: 0px;
    margin: 20px 20px;
  } ;
`;

export const Title = styled.div`
  margin: 24px 0px;
  font-weight: 30;
  font-size: 48px;
  letter-spacing: 0.25px;
  color: ${lightBlue};
  @media (max-width: 768px) {
    font-size: 42px;
    margin: 10px 0px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 22px;
    padding: 10px 0px;
  } ;
`;

export const TextPage = styled.div`
  font-weight: 200;
  font-size: 36px;
  letter-spacing: 0.85px;
  margin: 24px 0px;
  line-height: 45px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin: 20px;
    padding: 10px;
    padding-bottom: 43%;
  }
  @media (max-width: 480px) {
    height: 50%;
    font-size: 19px;
    margin: 0px;
    padding-bottom: 41%;
  } ;
`;

export const ButtonPosition = styled.div`
  height: 20%;
  @media (max-width: 768px) {
    padding: 10px;
    /* margin-bottom: 40px; */
  } ;
`;
export const SeparateLine = styled.div`
  opacity: 0.5;
  border: 1px solid ${gray};
  margin: 20px 0px;
`;
