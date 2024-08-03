'use client';

import { Card } from 'antd';
import BarGraph from './components/BarGraph';
import Graph from './components/Graph';
import Header from './components/Header';
import ProgressIndicators from './components/ProgressIndicators';
import SalesForecast from './components/SalesForecast';
import TotalSales from './components/TotalSales';

export default function Home() {
  return (
    <div className="flex flex-col p-4 space-y-4">
      {/* <VerticalNavbar /> */}
      <main className="flex-1">
          <Header />
        <Card style={{ marginBottom: '16px' }}>
          <Graph />
        </Card>
        <Card style={{ marginBottom: '16px' }}>
          <BarGraph />
        </Card>
        <Card style={{ marginBottom: '16px' }}>
          <ProgressIndicators />
        </Card>
        <Card style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ flex: 5, paddingRight: '10px' }}>
              <SalesForecast />
            </div>
            <div style={{ flex: 5, paddingLeft: '10px' }}>
              <TotalSales />
            </div>
          </div>
        </Card>
        {/* Add more content or components as needed */}
      </main>
    </div>
  );
}
