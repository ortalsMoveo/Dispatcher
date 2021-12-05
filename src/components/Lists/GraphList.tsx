import { GraphsContainer } from "./style";
import Graph from "../Graph/Graph";
import { GraphProps } from "./Props";
import React, { useEffect, useState } from "react";
import { CardObj } from "../../fetchers/MainPage/MainPage";
import moment from "moment";

interface GraphsListProps {
  graphList: GraphProps[];
  displayText: boolean;
  cards: CardObj[];
  noQuery: boolean;
}

export interface FilterValue {
  name: string;
  numInstance: number;
}

const GraphList = ({
  graphList,
  displayText,
  cards,
  noQuery,
}: GraphsListProps) => {
  const [noDataToDisplay, setNoDataToDisplay] = useState(
    cards.length > 0 ? true : false
  );

  const getData = (graphType: string) => {
    if (!cards) {
      const res: FilterValue[] = [];
      return [];
    } else if (graphType === "Sources") {
      const sourcesVals: FilterValue[] = [];
      for (let item = 0; item < cards.length; item++) {
        const itemName = cards[item].source.name;
        let match = false;
        if (sourcesVals.length < 1) {
          sourcesVals.push({ name: itemName, numInstance: 1 });
          continue;
        }
        for (let val = 0; val < sourcesVals.length; val++) {
          const element = sourcesVals[val];
          if (element.name === itemName) {
            const currVal = element.numInstance;
            element.numInstance = currVal + 1;
            match = true;
          }
        }
        if (!match) {
          sourcesVals.push({ name: itemName, numInstance: 1 });
        }
      }
      return sourcesVals.sort(function (a, b) {
        return b.numInstance - a.numInstance;
      });
    } else {
      const dates: FilterValue[] = [];
      for (let item = 0; item < cards.length; item++) {
        const itemName = cards[item].publishedAt;
        let match = false;
        if (dates.length < 1) {
          dates.push({
            name: moment(itemName).format("MMM DD"),
            numInstance: 1,
          });
          continue;
        }
        for (let val = 0; val < dates.length; val++) {
          const element = dates[val];
          if (element.name === moment(itemName).format("MMM DD")) {
            const currVal = element.numInstance;
            element.numInstance = currVal + 1;
            match = true;
          }
        }
        if (!match) {
          dates.push({
            name: moment(itemName).format("MMM DD"),
            numInstance: 1,
          });
        }
      }

      return dates.sort((a, b) =>
        moment(a.name, "MMM DD").diff(moment(b.name, "MMM DD"))
      );
    }
  };

  return (
    <GraphsContainer noDataToDisplay={displayText}>
      {graphList?.map((item) => (
        <Graph
          key={item.title}
          title={item.title}
          data={getData(item.title)}
          noQuery={noQuery}
          cardsLength={cards.length}
        />
      ))}
    </GraphsContainer>
  );
};

export default GraphList;
