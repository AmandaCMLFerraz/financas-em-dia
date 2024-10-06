// src/components/BarChart.js
import React from 'react';
import { Column } from '@ant-design/charts';

const BarChart = () => {
  const data = [
    { month: 'Janeiro', type: 'Receita', value: 2500 },
    { month: 'Janeiro', type: 'Despesa', value: 1000 },
    { month: 'Fevereiro', type: 'Receita', value: 2500 },
    { month: 'Fevereiro', type: 'Despesa', value: 1000 },
    { month: 'Março', type: 'Receita', value: 2500 },
    { month: 'Março', type: 'Despesa', value: 1000 },
    { month: 'Abril', type: 'Receita', value: 2500 },
    { month: 'Abril', type: 'Despesa', value: 1000 },
    { month: 'Maio', type: 'Receita', value: 2500 },
    { month: 'Maio', type: 'Despesa', value: 1000 },
    { month: 'Junho', type: 'Receita', value: 2500 },
    { month: 'Junho', type: 'Despesa', value: 1000 },
    { month: 'Julho', type: 'Receita', value: 2500 },
    { month: 'Julho', type: 'Despesa', value: 1000 },
    { month: 'Agosto', type: 'Receita', value: 2500 },
    { month: 'Agosto', type: 'Despesa', value: 1000 },
    { month: 'Setembro', type: 'Receita', value: 2500 },
    { month: 'Setembro', type: 'Despesa', value: 1000 },
    { month: 'Outubro', type: 'Receita', value: 2500 },
    { month: 'Outubro', type: 'Despesa', value: 1000 },
    { month: 'Novembro', type: 'Receita', value: 2500 },
    { month: 'Novembro', type: 'Despesa', value: 1000 },
    { month: 'Dezembro', type: 'Receita', value: 2500 },
    { month: 'Dezembro', type: 'Despesa', value: 1000 },
  ];

  const config = {
    data,
    isGroup: true, // Gráfico de colunas agrupadas
    xField: 'month',
    yField: 'value',
    seriesField: 'type', // Define as séries (Receita/Despesa)
    colorField: 'type', // Campo que define as cores
    width: 1200,
    height: 235,
    legend: {
      position: 'bottom', // Posiciona a legenda na parte inferior
      layout: 'horizontal',
    },
  };
  
  return <Column {...config} />;
};

export default BarChart;
