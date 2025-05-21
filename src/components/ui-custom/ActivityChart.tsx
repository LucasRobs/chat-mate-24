
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ActivityChartProps {
  data: Array<{ name: string; value: number }>;
  isMobile: boolean;
}

const ActivityChart = ({ data, isMobile }: ActivityChartProps) => {
  // For mobile, show fewer data points
  const chartData = isMobile ? data.filter((_, index) => index % 3 === 0) : data;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{
          top: 5,
          right: isMobile ? 5 : 20,
          bottom: isMobile ? 15 : 30,
          left: isMobile ? 0 : 10,
        }}
      >
        <CartesianGrid stroke="#f0f0f0" vertical={false} strokeDasharray="3 3" />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: isMobile ? 8 : 11 }} 
          tickLine={false}
          axisLine={{ stroke: "#e6e6e6" }}
          dy={isMobile ? 5 : 10}
          interval={isMobile ? 1 : 0}
        />
        <YAxis 
          tick={{ fontSize: isMobile ? 8 : 11 }}
          tickLine={false}
          axisLine={false}
          domain={[0, 'auto']}
          tickFormatter={(value) => value}
          width={isMobile ? 20 : 30}
        />
        <Tooltip
          contentStyle={{ 
            backgroundColor: "white", 
            border: "1px solid #e2e8f0", 
            borderRadius: "6px",
            padding: "6px 8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            fontSize: isMobile ? "9px" : "11px"
          }}
          labelStyle={{ 
            color: "#333", 
            fontWeight: 500,
            marginBottom: "2px",
            fontSize: isMobile ? "9px" : "11px"
          }}
          formatter={(value) => [`${value}`, 'Valor']}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#00af6b"
          fill="#e2f5ed"
          strokeWidth={2}
          activeDot={{ r: isMobile ? 3 : 5, strokeWidth: 0, fill: "#00af6b" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
