import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const GraphView = styled.div`
  width: 80%;
  display: flex;
  position: relative;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: auto;
`;

export const GraphDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 5px;
  margin: auto -35%;
  margin-top: 28px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    background: none;
    width: 3px;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
  }
  box-sizing: border-box;
  height: 34%;
  max-height: 16vh;
  @media (max-width: 1850px) {
    height: 37%;
  }
  @media (max-width: 1700px) {
    height: 39%;
  }
  @media (max-width: 1600px) {
    height: 41%;
  }
  @media (max-width: 1400px) {
    height: 47%;
  }
  @media (max-width: 1200px) {
    height: 44%;
  }
  @media (max-width: 1050px) {
    height: 47%;
  }
`;

export const Div = styled.div`
  width: 100%;
  min-width: 170px;
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.div`
  display: flex;
  gap: 5px;
`;
export const SourceName = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Mulish");

  color: #030035;
  letter-spacing: 0.2px;
  font-size: 18px;
  line-height: 20px;
`;
export const SourceValue = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Mulish");

  color: #9fa2b4;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.3px;
`;
