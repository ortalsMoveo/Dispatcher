import styled from "styled-components";
import { BlueBuzz, GhostWhite } from "../../globalStyle";

export const CardsContainer = styled.div`
  background: ${GhostWhite};
  width: 100%;
  height: 100%;
  @media (min-width: 769px) {
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 10px;
      margin: 0px 2%;
    }
    ::-webkit-scrollbar-thumb {
      background: ${BlueBuzz};
      border-radius: 10px;
    }
    padding: 0px 16px 0px 0px;
    margin: 0px;
    margin-right: 15px;
    height: 100vh;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 400px;
  @media (max-width: 1300px) {
    width: 97%;
  }
  @media (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    width: 100%;
    overflow-y: scroll;
    height: 100vh;
  }
  @media (max-width: 480px) {
    /* width: 90%; */
    min-width: 320px;

    /* overflow: scroll;
    height: 120vh; */
  } ;
`;

export const GraphsContainer = styled.div<{ noDataToDisplay: boolean }>`
  width: 40%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 26px;
  padding-top: ${(props) => (props.noDataToDisplay ? "0px" : "20px")};
  @media (max-width: 1300px) {
    width: 34%;
    margin-left: 10px;
  }
  @media (max-width: 850px) {
    margin-left: 6px;
  }
`;
