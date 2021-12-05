import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { FilterValue } from "../../Lists/GraphList";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import {
  GraphView,
  GraphDetails,
  SourceName,
  SourceValue,
  Div,
  Container,
  Category,
} from "./style";
ChartJS.register(ArcElement, Tooltip, Legend);

const doughnutData: any = {
  datasets: [
    {
      data: [],
      backgroundColor: [
        "#DDF3FE",
        " #FF9800",
        " #030035",
        "#E8E8E8",
        "#343A6E",
        "#866526 ",
        "#3499cc",
        "#a76262",
        " #3e3996",
        " #eba337",
      ],

      borderWidth: 0,
    },
  ],
  legend: {
    display: false,
  },
};

export const doughnutOptions = {
  cutout: "85%",
  plugins: {
    legend: false as any,
  },
};

interface DoughnutChartValues {
  sourcesData: FilterValue[];
  cardsLength: number;
}
const DoughnutChart = ({ sourcesData, cardsLength }: DoughnutChartValues) => {
  const sourseValue = (sourceVal: number) => {
    let value = null;
    value = (100 * sourceVal) / cardsLength;
    doughnutData.datasets[0].data.push(value);
    return value;
  };

  const cleanDataArr = () => {
    const newArr: any = [];
    doughnutData.datasets[0].data = newArr;
  };

  return (
    <Container>
      {cleanDataArr()}
      <GraphView>
        <div style={{ position: "absolute" }}>{sourcesData.length}</div>
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </GraphView>
      <GraphDetails>
        {sourcesData.map((item, i) => (
          <Div key={i}>
            <Category>
              <div
                style={{
                  background: doughnutData.datasets[0].backgroundColor[i],
                  width: "5px",
                  height: "5px",
                  borderRadius: "50px",
                  margin: "7px",
                }}
              ></div>
              <SourceName>{item.name}</SourceName>
            </Category>
            <SourceValue>
              {Math.floor(sourseValue(item.numInstance)) + "%"}
            </SourceValue>
          </Div>
        ))}
      </GraphDetails>
    </Container>
  );
};

export default DoughnutChart;
