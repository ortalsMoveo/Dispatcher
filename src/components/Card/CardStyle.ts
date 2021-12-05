import styled from "styled-components";
import { white, gray, darkBlueColor, lightBlue } from "../../globalStyle";

export const CardContainer = styled.div`
  background: ${white};
  border-radius: 20px;
  border: 1px solid ${gray};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  display: flex;
  font-family: Roboto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  /* height: 242px; */
  @media (max-width: 480px) {
    flex-direction: column;
    max-width: 330px;
  } ;
`;

export const CardContent = styled.div`
  padding: 10px 0px;
  margin-right: 17px;
  margin-left: 17px;
  width: 75%;
  height: fit-content;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 94%;
    margin: auto;
    padding: 10px;
  } ;
`;

export const HeadContentCard = styled.div`
  @media (max-width: 480px) {
  } ;
`;
export const TagList = styled.div`
  /* display: flex;
  justify-content: space-between;
  height: fit-content;
  margin: 10px;
  gap: 5px; */
`;
export const ImgCard = styled.img`
  max-height: 100%;
  width: 25%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 20px 0px 0px 20px;
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 480px) {
    width: 100%;
    max-height: 70%;

    border-radius: 20px 20px 0px 0px;
  }
`;

export const HeadLines = styled.p`
  font-size: 18px;
  color: rgba(90, 90, 137, 0.5);
  @media (max-width: 480px) {
    display: flex;
  }
`;

export const CardTitle = styled.h2`
  display: flex;
  color: ${darkBlueColor};
  font-weight: bold;
  font-size: 20px;
`;

export const CardText = styled.p`
  color: ${lightBlue};
  font-size: 18px;
  display: flex;
  padding-bottom: 10px;
  min-height: 50px;
  @media (max-width: 480px) {
    flex-direction: column;
    min-height: 5px;
  } ;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 0px;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;
