"use client";

import { Line } from '@ant-design/charts';
import { DatePicker, Card } from 'antd';
import React, { useState } from 'react';

// Helper function to generate random values
const generateRandomData = () => {
  return [
    { time: '08:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '09:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '10:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '11:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '12:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '13:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '14:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '15:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '16:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '17:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '18:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '19:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '20:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '21:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '22:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '23:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '00:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '01:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '02:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '03:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '04:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '05:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '06:00', value: Math.floor(Math.random() * 10) + 1 },
    { time: '07:00', value: Math.floor(Math.random() * 10) + 1 }
  ];
};

const Graph = () => {
  const [data, setData] = useState(generateRandomData());

  const handleDateChange = (date: any, dateString: string | string[]) => {
    // Update data when date changes
    setData(generateRandomData());
  };

  const config = {
    data,
    xField: 'time',
    yField: 'value',
    height: 200,
  };

  return (
    <div className="flex flex-col gap-4">
      {/* DatePicker on top */}
      <DatePicker onChange={handleDateChange} style={{ marginBottom: '16px' }} />

      {/* Row for Graph and Card */}
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
        {/* Graph */}
        <div style={{ flex: 2, minWidth: '60%', maxWidth: 'calc(100% - 140px)', height: 200 }}>
          <Line {...config} />
        </div>

        {/* Card */}
        <Card
          title={<span style={{ fontSize: '18px', color: '#F57C00' }}>New</span>}
          bordered={false}
          style={{
            width: 140,
            height: 200,
            marginLeft: '16px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p style={{ fontSize: '24px', color: '#F57C00', margin: 0 }}>123</p>
        </Card>
      </div>
    </div>
  );
};

export default Graph;
