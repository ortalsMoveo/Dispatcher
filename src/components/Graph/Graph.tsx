import NoSearchResults, { SearchResults } from "../NoResults/NoSearchResults";
import {
  GraphContainer,
  Title,
  LineRow,
  DataContainer,
  Head,
} from "./GraphStyle";
import DoughnutChart from "./Graphes/Doughnut";
import LineChart from "./Graphes/Line/LineChart";
import { FilterValue } from "../Lists/GraphList";
export interface GraphProps {
  title: string;
  data: FilterValue[];
  noQuery: boolean;
  cardsLength: number;
}

const Graph = ({ title, data, noQuery, cardsLength }: GraphProps) => {
  return (
    <GraphContainer>
      <Head>
        <Title>{title}</Title>
        <LineRow></LineRow>
      </Head>
      <DataContainer
        barChart={title === "Tags" ? true : false}
        doughnutChart={title === "Sources" ? true : false}
      >
        {!(data && data.length > 0) || noQuery ? (
          <NoSearchResults isGraph={true} />
        ) : (
          <>
            {title === "Sources" && (
              <DoughnutChart sourcesData={data} cardsLength={cardsLength} />
            )}
            {title === "Dates" && <LineChart dateData={data} />}
          </>
        )}
      </DataContainer>
    </GraphContainer>
  );
};
export default Graph;
