"use client";
import React from 'react';
import { Pie } from '@ant-design/plots';

const DemoPiechat = () => {
  const data = [
    { type: 'Active Product', value: 75 },
    { type: 'Total Sold', value: 35 },
  ];

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    radius: 1,
    autoFit: true,
    style: {
      backgroundColor: '#EEF9FE', // chart background
    },
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }:{percent: number}) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        fontWeight: 600,
        fill: '#222', // label text color
      },
    },
    tooltip: {
      formatter: (datum: { type: string; value: number }) => ({
        name: datum.type,
        value: `${datum.value} (${((datum.value / 110) * 100).toFixed(1)}%)`,
      }),
    },
    legend: {
      color: {
        title: false,
        position: 'top',
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: 'P&L\nTotal growth\n65%',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 14,
          fontWeight: 600,
          fill: '#48B1DB', // accent text color
        },
      },
    ],
    color: ['#48B1DB', '#FF7F50'], // Primary + Coral
  };

  return (
    <div style={{ backgroundColor: '#EEF9FE', padding: '0.5rem', borderRadius: '12px' }}>
      <Pie {...config} />
    </div>
  );
};

export default DemoPiechat;
