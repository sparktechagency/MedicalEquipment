/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState,} from 'react';
import { useGetIncomeRatioQuery } from '@/redux/features/dashboard/dashboardApi';
import React, { FC } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Select } from 'antd';

const PureComponentChart: FC = () => {
  const { data } = useGetIncomeRatioQuery({});
  const allData = data?.attributes;

  // State for the selected year filter
  const [selectedYear, setSelectedYear] = useState<number>(2024); // Default year set to 2024

  // Extract unique years from the data
  const years = Array.from(new Set(allData?.map((item: any) => item.year)));

  // Filter data based on the selected year
  const filteredData = allData?.filter((item: any) => item.year === selectedYear);

  // Map the filtered data to the format required for the chart
  const formattedData = filteredData?.map((item: any) => ({
    name: item.monthName, // Set month names for X-axis
    uv: item.monthlyIncome, // Set income values for the area chart
  }));

  console.log(formattedData);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div>
      {/* Year Filter Dropdown */}
      <div className='flex justify-between items-center'>
       <h1>Imcome Ratio</h1>
      <Select
        defaultValue={selectedYear}
        style={{ width: 120, marginBottom: 20 }}
        onChange={handleYearChange}
      >
        {years.map((year) => (
          <Select.Option key={String(year)} value={year}>
            {String(year)}
          </Select.Option>
        ))}
      </Select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={formattedData} // Use the mapped and filtered data
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`} />
          <Tooltip
            formatter={(value: number) => `$${(value / 1000).toFixed(2)}k`}
            labelFormatter={(label: string) => `Time: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="url(#gradient)" // Apply the gradient
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#72C2E3" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#EEF9FE" stopOpacity={0.8} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PureComponentChart;
