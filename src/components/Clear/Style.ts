import styled from "styled-components";
import { lightBlue, gray, white } from "../../globalStyle";

export const ClearButton = styled.button<{ backgroundColor: boolean }>`
  color: ${lightBlue};
  :hover {
    background: ${gray};
  }
  background: ${(props) => (props.backgroundColor ? `${gray}` : `${white}`)};
  padding: 4px 6px;
  border: none;
  font-weight: bold;
  font-size: 12px;
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
    margin: 0px 29px;
  }
`;
