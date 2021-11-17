import { SearchResults, LogoSearch } from "./Style";
import logoPath from "../../assets/chart.svg";

const notFoundMatch = "We couldn't find any matches for your query";

export interface SearchResults {
  noQuery?: boolean;
}

const NoSearchResults = ({ noQuery = false }: SearchResults) => {
  return (
    <SearchResults>
      <LogoSearch src={logoPath} />
      <p>{noQuery ? "Please add an query!" : notFoundMatch}</p>
    </SearchResults>
  );
};

export default NoSearchResults;
