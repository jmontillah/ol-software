import React from 'react';

export const checkSession = () => {
  const username = localStorage.getItem('username');
  return username ? username : false;
}

export const loginSession = username => {
  localStorage.setItem('username', username);
}

export const logoutSession = () => {
  localStorage.removeItem('username');
}

export const renderCustomizedLabelPieChart = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};