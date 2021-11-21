import styled from "styled-components";
import {
  darkBlue,
  gray,
  Gray90,
  white,
  DarkGray,
  GhostWhite,
} from "../../globalStyle";

const style = {
  background: `${DarkGray}`,
  opacity: "0.7",
  width: "402px",
};
export const Container = styled.div`
  background: ${GhostWhite};
  @media (max-width: 768px) {
    display: flex;
    width: 770px;
  }
`;

export const PageContent = styled.div`
  width: 80%;
  margin: 0% 10%;
`;

export const Content = styled.div`
  padding: 0px 21px;
`;

export const TabletPageContent = styled.div<{ showFilter: boolean }>`
  ${(props) => (props.showFilter ? style : null)}
`;

export const FilterSidebar = styled.div<{ showFilter: boolean }>`
  background: ${white};
  z-index: 1;
  width: 368px;
  ${(props) => (!props.showFilter ? "display: none" : null)}
`;

export const Title = styled.h3`
  color: ${darkBlue};
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
`;

export const ContentLists = styled.div`
  display: flex;
  gap: 20px;
`;

export const CardsListTablet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 728px;
`;

export const SeparateLine = styled.div`
  opacity: 0.5;
  border: 1px solid ${gray};
`;
