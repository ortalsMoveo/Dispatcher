import { GraphsContainer } from "./style";
import Graph from "../Graph/Graph";
import { GraphProps } from "./Props";

interface GraphsListProps {
  graphList: GraphProps[];
}

const GraphList = ({ graphList }: GraphsListProps) => {
  return (
    <GraphsContainer>
      {graphList?.map((item) => (
        <Graph key={item.title} title={item.title} data={item.data} />
      ))}
    </GraphsContainer>
  );
};

export default GraphList;
