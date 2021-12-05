import styled from "styled-components";
import { blue } from "../../globalStyle";

export const ButtonStyle = styled.button<{
  fullWidth: boolean;
  welcomeButton: boolean;
}>`
  border-radius: ${(props) => (props.welcomeButton ? "10px" : "22px")};
  padding: 13px 25px;
  font: Roboto;
  border: none;
  font-weight: 500;
  font-size: 18px;

  :hover {
    ${(props) =>
      props.name === "text" ? `background: rgba(217, 219, 233, 0.3)` : null};
    opacity: 0.8;
  }
  color: ${(props) => (props.name === "primary" ? "#FFFFFF" : "#5A5A89")};
  background: ${(props) =>
    props.name === "primary"
      ? blue
      : props.name === "secondary"
      ? "#D9DBE9"
      : "white"};
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  @media (max-width: 480px) {
    width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  }
`;

export const IconStyle = styled.img`
  width: 20px;
  padding-left: 5px;
`;
