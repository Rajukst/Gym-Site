import React from 'react';
import ReactApexChart from "react-apexcharts"
const LineChartTwo = () => {
 const series= [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}]
 const options= {
  chart: {
    height: 100,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    row: {
      colors: [ 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },

}




    return (
        <div id='chart'>
             <ReactApexChart options={options} series={series} type="line" height={120} />
        </div>
    );
};

export default LineChartTwo;