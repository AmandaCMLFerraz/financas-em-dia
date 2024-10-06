// src/components/SimplePieChart.js
import React from 'react';
import { Pie } from '@ant-design/charts';

const SimplePieChart = () => {
  const data = [
    { type: 'A', value: 30 },
    { type: 'B', value: 70 },
  ];

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    legend: {
      position: 'right', // Posição da legenda
      layout: 'vertical', // Layout vertical
    },
    width: 300,
    height: 280,
  };

  return <Pie {...config} />;
};

export default SimplePieChart;
