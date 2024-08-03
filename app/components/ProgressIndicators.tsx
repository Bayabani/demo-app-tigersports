"use client";

// components/ProgressIndicators.tsx
import { Progress } from 'antd';

const ProgressIndicators = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
      {/* Left side */}
      <div style={{ flex: 2, marginRight: '20px' }}>
        <span>Average processing time</span>
        <Progress percent={50} status="active" />
      </div>

      {/* Right side */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <span>Processing time 1</span>
          <Progress percent={40} status="active" />
        </div>
        <div>
          <span>Processing time 2</span>
          <Progress percent={60} status="active" />
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicators;

