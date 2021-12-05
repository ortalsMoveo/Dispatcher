import styled from "styled-components";
import { GhostWhite } from "../../../globalStyle";

export const Container = styled.div<{ results: any }>`
  background: ${GhostWhite};
  width: 100%;
  height: ${(props) => (props.results ? "100% " : "100vh")};
`;
