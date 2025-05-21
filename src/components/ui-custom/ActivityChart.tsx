
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
  // Para mobile, mostre menos pontos de dados
  const chartData = isMobile ? data.filter((_, index) => index % 2 === 0) : data;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{
          top: 10,
          right: 20,
          bottom: 30,
          left: isMobile ? 0 : 20,
        }}
      >
        <defs>
          <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00af6b" stopOpacity={0.05} />
            <stop offset="95%" stopColor="#00af6b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#f0f0f0" vertical={false} />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: isMobile ? 9 : 12 }} 
          tickLine={false}
          axisLine={{ stroke: "#e6e6e6" }}
          dy={10}
        />
        <YAxis 
          tick={{ fontSize: isMobile ? 9 : 12 }}
          tickLine={false}
          axisLine={false}
          domain={[0, 'auto']}
          tickFormatter={(value) => value}
        />
        <Tooltip
          contentStyle={{ 
            backgroundColor: "white", 
            border: "1px solid #e2e8f0", 
            borderRadius: "8px",
            padding: "8px 12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            fontSize: isMobile ? "11px" : "12px"
          }}
          labelStyle={{ 
            color: "#333", 
            fontWeight: 500,
            marginBottom: "4px" 
          }}
          formatter={(value) => [`${value}`, 'Valor']}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#00af6b"
          fill="url(#colorActivity)"
          strokeWidth={2}
          activeDot={{ r: isMobile ? 4 : 6, strokeWidth: 0, fill: "#00af6b" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
