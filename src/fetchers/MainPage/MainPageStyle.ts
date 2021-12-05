import styled from "styled-components";
import {
  darkBlue,
  gray,
  Gray90,
  white,
  DarkGray,
  GhostWhite,
  blue,
} from "../../globalStyle";

const titleStyle = {
  fontSize: "14px",
  lineHeight: "22px",
  letterSpacing: "0.25px",
  color: "rgba(90, 90, 137, 0.5)",
};

export const Container = styled.div<{
  isLoading?: boolean;
}>`
  background: ${GhostWhite};
  width: 100%;
  margin: auto;

  height: ${(props) => (!props.isLoading ? "100% " : "100vh")};

  /* z-index: 1; */
  /* @media (max-width: 768px) {
    width: 100%;
    height: ${(props) => (!props.isLoading ? "100%" : "100vh")};
  }
  @media (max-width: 480px) {
    height: ${(props) => (!props.isLoading ? "100%" : "100vh")};
  } */
`;

export const PageContent = styled.div<{
  isLoading: boolean;
  dispalyText: boolean;
}>`
  padding-top: 90px;
  width: 80%;
  margin: auto;
  height: ${(props) => (props.dispalyText ? "100%" : "100vh")};
`;

export const Content = styled.div`
  padding: 0px 21px;
  max-width: 728px;
  margin: auto;
  /* z-index: 1; */
`;

export const TabletPageContent = styled.div<{
  showFilter: boolean;
  isLoading: boolean;
  dispalyText: boolean;
}>`
  /* position: fixed; */
  width: ${(props) => (props.showFilter ? "100%" : null)};
  height: ${(props) =>
    props.isLoading || props.dispalyText ? "100%" : "100vh"};
`;

export const FilterSidebar = styled.div<{ showFilter: boolean }>`
  z-index: 10;
  height: 100vh;
  right: 0;
  width: 45%;
  margin-top: 0px;
  ${(props) => (!props.showFilter ? "display: none" : null)};
  position: absolute;
  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const Title = styled.h3<{ firstRender: boolean }>`
  color: ${darkBlue};
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  ${(props) => (!props.firstRender ? titleStyle : null)};
  @media (max-width: 768px) {
    font-size: 17px;
    padding: 0px;
  }
`;

export const ContentLists = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
`;

export const CardsListTablet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SeparateLine = styled.div`
  opacity: 0.5;
  border: 1px solid ${gray};
  margin-top: 70px;
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid ${darkBlue}; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 270px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 480px) {
    margin: 50% auto;
  }
`;

export const BackgroudContainer = styled.div`
  opacity: 0.7;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #303032;
  z-index: 10;
`;
