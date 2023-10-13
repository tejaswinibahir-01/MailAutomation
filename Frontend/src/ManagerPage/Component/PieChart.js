import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
  const data = {
    labels: ["Completed","In-Process", "Delayed"],
    datasets: [
      {
        data: [props.complete, props.remaining, props.delayed],
        backgroundColor: ["#308df1", "#FDD017","#C11B17"],
      },
    ],
  };

  const options = {};

  return (
    <div className="Pie" style={{ position: "absolute", top: "150px", right: "400px", width: "600px", height: "600px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;