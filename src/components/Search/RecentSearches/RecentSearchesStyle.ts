import styled from "styled-components";
import { white, lightBlue, GhostWhite, gray } from "../../../globalStyle";

export const SearchResults = styled.div`
  background: ${white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  color: ${lightBlue};
  padding: 10px;
  margin: 11px 0px;
  /* height: 100%; */
  z-index: 3;
  @media (max-width: 480px) {
    background: ${GhostWhite};
    border-radius: 0px;
    margin: 0px;
    padding: 15px;
    height: 100vh;
    /* width: 100%; */
  }
`;

export const RecentSearchesContainer = styled.div`
  font-weight: 500;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
    margin: 0px;
    height: auto;
    font-size: 20px;
  }
`;

export const RecentItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  @media (max-width: 480px) {
    width: 100%;
    font-size: 20px;
    padding: 5px 10px;
  }
`;

export const SeparateLine = styled.div`
  @media (max-width: 480px) {
    opacity: 0.5;
    border: 1px solid ${gray};
    height: 0px;
    width: 100%;
  }
`;
