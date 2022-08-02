import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesMonthChart = () => {
   const series= [
         {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]
   const   options= {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        }
      }
    return (
        <div>
              <ReactApexChart options={options} series={series} type="area" height={120} />

        </div>
    );
};

export default SalesMonthChart;