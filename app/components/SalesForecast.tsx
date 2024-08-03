"use client";

import React from 'react';
import { Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip, Area, CartesianGrid } from 'recharts';

const data = [
  { day: '1 Day', sales: 10 },
  { day: '2 Days', sales: 20 },
  { day: '5 Days', sales: 50 },
  { day: '10 Days', sales: 80 }
];

const SalesForecast = () => {
  return (
    <Card title="Sales Forecast" bordered={false} style={{ width: '100%' }}>
      <div style={{ height: '200px' }}>
        <LineChart
          width={500}
          height={250}
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            fillOpacity={0.3}
            fill="#8884d8"
          />
          <Line
            type="step"
            dataKey="sales"
            stroke="#8884d8"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </div>
    </Card>
  );
};

export default SalesForecast;
