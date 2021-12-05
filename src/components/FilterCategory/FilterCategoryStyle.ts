import styled from "styled-components";
import { white, lightBlue } from "../../globalStyle";

export const Category = styled.div<{ exitIcon: boolean }>`
  background: ${white};
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  :hover {
    background: rgba(90, 90, 137, 0.05);
  }
  font-family: Roboto;
  font-size: 16px;
  width: ${(props) => (props.exitIcon ? "85%" : " 93%")};
`;

export const Name = styled.span`
  padding: 5px;
  color: ${lightBlue};
`;

export const Option = styled.span`
  padding: 5px;
  color: rgba(90, 90, 137, 0.5);
`;
