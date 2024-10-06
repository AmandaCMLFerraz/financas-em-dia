import React from 'react';
import { Card, Col, Row } from 'antd';

const Cards = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Saldo Atual" bordered={true}>
        R$ 1.000,00
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Receitas" bordered={true}>
        R$ 2.500,00
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Despesas" bordered={true}>
        R$ 1.500,00
      </Card>
    </Col>
  </Row>
);
export default Cards;