import moment from "moment";
import { Line } from "react-chartjs-2";
import { FilterValue } from "../../../Lists/GraphList";
import { Months, Container, MonthItem } from "./style";
const lineData: any = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      fill: true,
      backgroundColor: "#c3daf3",
      borderColor: " #0058B9",
      tension: 0.5,
      pointRadius: 1,
    },
  ],
};

const options = {
  responsive: true,

  scales: {
    x: {
      display: true,
      borderColor: "white",
      grid: {
        display: false,
        borderColor: "white",
      },
      ticks: {
        display: true,
        beginAtZero: false,
      },
    },
    y: {
      beginAtZero: true,
      display: false,

      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

interface LineChartValues {
  dateData: FilterValue[];
}
const addItemToLables = (date: string) => {
  lineData.labels.push(date);
};
const LineChart = ({ dateData }: LineChartValues) => {
  const updateInstanceArry = (numInstance: number) => {
    lineData.datasets[0].data.push(numInstance);
  };
  const cleanDataArr = () => {
    const newArr: any = [];
    lineData.datasets[0].data = newArr;
    lineData.labels = [];
  };
  return (
    <Container>
      {cleanDataArr()}
      <Line data={lineData} options={options} height={"250px"} />
      <Months>
        {dateData.map((item, i) => (
          <MonthItem key={i}>
            {addItemToLables(moment(item.name).format("MMM DD"))}
            {updateInstanceArry(item.numInstance)}
          </MonthItem>
        ))}
      </Months>
    </Container>
  );
};

export default LineChart;
