"use client";
import React from 'react';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    { type: 'Active Product', value: 75 },
    { type: 'Total Sold', value: 35 },
  ];

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,  // Similar to the second example
    label: {
      text: 'value', // Displays the value in the label
      style: {
        fontWeight: 'bold',

      },
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
          text: 'P&L\nTotal profit growth of 65%', // Custom annotation text
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 12,
          fontStyle: 'bold',
        },
      },
    ],
     color: ['#FF7F50', '#87CEFA'],
  };

  return <Pie {...config} />;
};

export default DemoPie;
