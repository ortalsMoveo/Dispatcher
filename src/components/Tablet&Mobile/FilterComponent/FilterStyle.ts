import styled from "styled-components";
import { white, gray, lightBlue } from "../../../globalStyle";

export const Container = styled.div<{
  mobileSearch: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: ${white};
  border: 1px solid ${gray};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 0px;
  width: 100%;
  padding-top: ${(props) => (props.mobileSearch ? "80px" : "10px")};
  box-sizing: border-box;
  z-index: 2;
  height: ${(props) => (props.mobileSearch ? "123px" : "60px")}; ;
`;

export const FilterType = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${lightBlue};
  font-family: Roboto;
  height: 1rem;
  margin: 5px;
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 17px;
    width: 40%;
  }
`;

export const ListItem = styled.div`
  :hover {
    background: rgba(223, 224, 235, 0.41);
  }
  padding: 9px;
  list-style: none;
  color: ${lightBlue};
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0px;
  padding-left: 10px;
  background: ${white};
  border-radius: 10px;
  &::-webkit-scrollbar {
    background: none;
    width: 3px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${lightBlue};
  }
  max-height: 120px;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 1;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  position: absolute;
  width: 20%;
  @media (max-width: 480px) {
    padding-left: 8px;
    width: 43%;
  }
`;
