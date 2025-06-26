"use client";
import React from 'react';
import { Pie } from '@ant-design/plots';
import { useGetDashboardStatusQuery } from '@/redux/features/dashboard/dashboardApi';

const DemoPiechat = () => {
  const { data } = useGetDashboardStatusQuery({});
  const active = data?.attributes?.totalProduct;
  const sold = data?.attributes?.totalSoldProduct;
  console.log(`active ${active},    sold ${sold}`)

  const datas = [
    { type: 'Active Product', value: active },
    { type: 'Total Sold', value: sold },
  ];

  const config = {
    data: datas,
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
      content: ({ percent }: { percent: number }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        fontWeight: 600,
         // label text color
          },
            },
            tooltip: {
          formatter: (datum: PieChartData) => ({
            name: datum.type,
            value: `${datum.value} (${((datum.value / (active + sold)) * 100).toFixed(1)}%)`,
          }),
            },
            legend: {
          color: {
            title: false,
            position: 'top' as const,
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
              textAlign: 'center' as const,
              fontSize: 14,
              fontWeight: 600,
              fill: '#48B1DB', // accent text color
            },
          },
            ],
      color: ['#48B1DB', '#FF7F50'], // Primary + Coral
    };
  
  // Types
  interface PieChartData {
    type: string;
    value: number;
  }

  return (
    <div style={{ backgroundColor: '#EEF9FE', padding: '0.5rem', borderRadius: '12px' }}>
      <Pie {...config} height={420} /> {/* Adjust the height as needed */}
    </div>
  );
};

export default DemoPiechat;
