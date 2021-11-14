import styled from "styled-components";
import { white, gray } from "../../globalStyle";

export const Container = styled.div`
  background: ${white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
`;

export const SearchBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 423px;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: auto 8px;
  width: 60%;
  max-width: 230px;
`;

export const SearchInput = styled.input`
  width: 70%;
  max-width: 200px;
  border: none;
  color: rgba(90, 90, 137, 0.5);
  font-family: Roboto;
  border: none;
`;

export const FilterContainer = styled.div`
  display: flex;
  margin: auto 10px;
  @media (max-width: 769px) {
    display: none;
  }
`;
export const SeparateLine = styled.div`
  opacity: 0.5;
  border: 0.1px solid ${gray};
  height: 50px;
`;
