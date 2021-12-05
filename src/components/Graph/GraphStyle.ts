import styled from "styled-components";
import { white, darkBlueColor, lightBlue } from "../../globalStyle";

export const GraphContainer = styled.div`
  max-width: 500px;
  background: ${white};
  border: 1px solid #d9dbe9;
  box-sizing: border-box;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;

  @media (max-width: 1200px) {
    height: 360px;
  }
`;

export const Head = styled.div`
  padding-left: 15px;
`;
export const Title = styled.h2`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  color: ${darkBlueColor};
`;

export const LineRow = styled.div`
  background: ${lightBlue};
  border: 2px solid ${lightBlue};
  width: 15px;
  border-radius: 10px;
  margin: 0px;
  padding: 0px;
`;

export const DataContainer = styled.div<{
  barChart: boolean;
  doughnutChart: boolean;
}>`
  width: ${(props) =>
    props.barChart ? "60%" : props.doughnutChart ? "50%" : "90%"};

  margin: auto;
  display: ${(props) => (props.barChart ? "flex" : "null")};
`;
