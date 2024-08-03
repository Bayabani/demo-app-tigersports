"use client";

import { Card } from 'antd';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

// Dynamically import ReactApexChart
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TotalSales = () => {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Total Sales', 'Total Articles'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
            horizontalAlign: 'center',
          },
        },
      },
    ],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 0,
    },
 
 
  };

  const series = [72, 260]; // Sample data

  return (
    <Card bordered={false} style={{ width: 300 }}>
      <ReactApexChart options={options} series={series} type="donut" height={320} />
    </Card>
  );
};

export default TotalSales;
