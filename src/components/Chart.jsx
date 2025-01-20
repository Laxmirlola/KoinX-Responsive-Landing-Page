// components/Chart.js
import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["16 Dec", "17 Dec", "18 Dec", "19 Dec", "20 Dec", "21 Dec"],
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        data: [42000, 43000, 44000, 45000, 46000, 47000],
        borderColor: "#007bff",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return <Line data={data} options={options} />;
};

export default Chart;
