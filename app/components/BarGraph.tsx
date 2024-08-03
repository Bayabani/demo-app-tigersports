"use client";

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Button } from 'antd';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions for type checking

const BarGraph = () => {
  const [series, setSeries] = useState([
    {
      name: 'Data',
      data: [120, 80, 90, 70, 60, 100]
    }
  ]);

  const [categories, setCategories] = useState([
    'Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6'
  ]);

  // Update the data based on the selected lookup
  const handleLookupChange = (lookup: string) => {
    switch (lookup) {
      case 'All':
        setSeries([
          {
            name: 'Data',
            data: [120, 80, 90, 70, 60, 100]
          }
        ]);
        break;
      case 'Active':
        setSeries([
          {
            name: 'Data',
            data: [120, 0, 90, 70, 0, 0] // Example data for active
          }
        ]);
        break;
      case 'Closed':
        setSeries([
          {
            name: 'Data',
            data: [0, 80, 0, 0, 60, 100] // Example data for closed
          }
        ]);
        break;
      default:
        setSeries([]);
    }
  };

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 300
    },
    plotOptions: {
      bar: {
        horizontal: false, // Ensure vertical bars
        columnWidth: '50%'
      }
    },
    xaxis: {
      categories,
      title: {
        text: 'Types',
        style: {
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Values',
        style: {
          fontSize: '14px'
        }
      }
    },
    colors: ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1', '#33FFF3'], // Different colors for each bar
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Lookup Buttons */}
      <div className="flex gap-2">
        <Button onClick={() => handleLookupChange('All')}>All</Button>
        <Button onClick={() => handleLookupChange('Active')}>Active</Button>
        <Button onClick={() => handleLookupChange('Closed')}>Closed</Button>
      </div>

      {/* Bar Chart */}
      <div style={{ height: 300, width: '100%' }}>
        <ReactApexChart options={options} series={series} type="bar" height={300} />
      </div>
    </div>
  );
};

export default BarGraph;
