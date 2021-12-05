import styled from "styled-components";
import { white, gray, lightBlue } from "../../globalStyle";

export const Container = styled.div<{ onClickInput: boolean }>`
  background: ${white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
  margin: auto;
  width: 80%;
  height: 44px;
  margin-left: 74px;
  /* margin-top: 3%; */
  @media (min-width: 769px) {
    min-width: ${(props) => (props.onClickInput ? "663px" : "423px")};
    max-width: 60%;
  }
  @media (max-width: 768px) {
    min-width: ${(props) => (props.onClickInput ? "465px" : "423px")};
    margin-top: 4%;

    margin-left: 10%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SearchBox = styled.div`
  height: 43px;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 100%;

  @media (max-width: 480px) {
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 500px;
`;

export const SearchInput = styled.input<{ onClickInput: boolean }>`
  border: none;
  color: ${lightBlue};
  font-family: Roboto;
  letter-spacing: 0.25px;
  border: none;
  font-size: 16px;
  line-height: 22px;
  padding: 12px 0px;
  width: 85%;
  :focus {
    outline: none;
  }
  @media (min-width: 769px) {
    min-width: ${(props) => (props.onClickInput ? "390px" : "205px")};
  }
  @media (max-width: 768px) {
    width: 360px;
    min-width: 225px;
  }
  ::placeholder {
    color: rgba(90, 90, 137, 0.5);
  }
`;

export const FilterContainer = styled.div<{ onClickInput: boolean }>`
  display: flex;
  z-index: 2;
  width: 35%;
  margin: 0px;
  width: ${(props) => (props.onClickInput ? "25%" : "35%")};
  min-width: 160px;

  @media (max-width: 769px) {
    display: none;
  }
`;
export const SeparateLine = styled.div`
  opacity: 0.5;
  height: 42px;
  opacity: 0.5;
  border: 0.2px solid ${gray};
`;
