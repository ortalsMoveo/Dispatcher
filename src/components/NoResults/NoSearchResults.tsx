import { SearchResults, LogoSearch } from "./Style";
import logoPath from "../../assets/chart.svg";

const notFoundMatch = "We couldn't find any matches for your query";

export interface SearchResults {
  noQuery?: boolean;
  resultsText?: string;
}

const NoSearchResults = ({ noQuery = false, resultsText }: SearchResults) => {
  return (
    <SearchResults>
      <LogoSearch src={logoPath} />
      <p>{noQuery ? resultsText : notFoundMatch}</p>
    </SearchResults>
  );
};

export default NoSearchResults;
