import styled from "styled-components";

export const SearchResults = styled.div`
  color: #5a5a89;
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  width: 100%;
  margin: auto;
  @media (max-width: 768px) {
    margin: 40% auto;
    font-size: 20px;
  }
  @media (max-width: 480px) {
    margin: 40% auto;
    font-size: 16px;
  }
`;

export const LogoSearch = styled.img`
  width: 133px;
`;
