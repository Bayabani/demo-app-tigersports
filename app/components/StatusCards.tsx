"use client";

// components/StatusCards.tsx
import { Card, Col, Row } from 'antd';

const statusData = [
  { status: 'Invited contact', value: 65 },
  { status: 'Negotiations', value: 35 },
  // Add more statuses
];

const StatusCards = () => {
  return (
    <Row gutter={16}>
      {statusData.map((item) => (
        <Col span={4} key={item.status}>
          <Card title={item.status} bordered={false}>
            <p>{item.value}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatusCards;
