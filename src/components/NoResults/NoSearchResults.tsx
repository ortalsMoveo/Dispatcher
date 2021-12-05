import { SearchResults, LogoSearch } from "./Style";
import noFound from "../../assets/not-found.svg";
import chart from "../../assets/chart.svg";

const notFoundMatch = "We couldn't find any matches for your query";
const noData = "No data to display";

export interface SearchResults {
  noQuery?: boolean;
  resultsText?: string;
  isGraph?: boolean;
}

const NoSearchResults = ({
  noQuery = false,
  resultsText,
  isGraph,
}: SearchResults) => {
  return (
    <SearchResults>
      <LogoSearch src={isGraph ? chart : noFound} />
      <p>{noQuery ? resultsText : isGraph ? noData : notFoundMatch}</p>
    </SearchResults>
  );
};

export default NoSearchResults;
