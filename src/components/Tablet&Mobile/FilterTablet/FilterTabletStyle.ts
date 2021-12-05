import styled from "styled-components";
import { white, gray, lightBlue, GhostWhite } from "../../../globalStyle";

export const Container = styled.div`
  background: ${white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Roboto;
  gap: 10%;
  height: 100%;
`;

export const FilterContent = styled.div`
  height: 30%;
  @media (min-width: 481px) {
    height: 20%;
  }
`;
export const FilterTitle = styled.div`
  color: ${lightBlue};
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  padding: 30px 10px;
  display: flex;
`;
export const FilterSearch = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  color: ${lightBlue};
  font-family: Roboto;
  font-size: 14px;

  :hover {
    background: rgba(90, 90, 137, 0.05);
  }
`;

export const AllSearches = styled.span`
  padding: 10px;
  font-size: 16px;
`;

export const ButtonPosition = styled.div`
  background: ${GhostWhite};
  order: inherit;
  padding: 30px;
  display: flex;
  justify-content: center;
  @media (min-width: 481px) {
    margin-top: 0%;
  }
`;

export const SeparateLine = styled.div`
  opacity: 0.5;
  border: 1px solid ${gray};
  height: 0px;
`;
export const IconStyle = styled.img`
  width: 6%;
  padding: 0px 4px;
  padding-right: 10px;
`;

export const CurrentFilter = styled.div<{ disable: boolean }>`
  opacity: ${(props) => (props.disable ? "50%" : "none")};
  cursor: ${(props) => (props.disable ? "not-allowed" : "default")};
  width: 100%;
  display: flex;
`;
