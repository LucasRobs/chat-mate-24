
import React from "react";
import {
  LineChart,
  Line,
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
  return (
    <div className="dashboard-card p-2 sm:p-4 bg-white rounded-lg shadow-sm card-hover">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4">
        <h3 className="text-sm sm:text-base font-medium text-secondary mb-1 sm:mb-0">
          Atividade Recente
        </h3>
        <span className="text-xs bg-gray-100 text-gray-600 py-1 px-2 sm:px-3 rounded-full font-medium self-start sm:self-auto">
          Últimos {isMobile ? '15' : '30'} dias
        </span>
      </div>

      <div className="h-[180px] sm:h-[230px] md:h-[280px] w-full animate-on-scroll from-bottom animate-in">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data} 
            margin={{ 
              top: 5, 
              right: isMobile ? 10 : 20, 
              bottom: isMobile ? 15 : 20, 
              left: isMobile ? -15 : 0 
            }}
          >
            <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              stroke="#888" 
              fontSize={isMobile ? 10 : 12} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fontSize: isMobile ? 8 : 12 }}
              interval={isMobile ? 1 : 0}
            />
            <YAxis 
              stroke="#888" 
              fontSize={isMobile ? 10 : 12} 
              tickLine={false} 
              axisLine={false} 
              tick={{ fontSize: isMobile ? 8 : 12 }}
              width={isMobile ? 20 : 40}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.9)', 
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '8px',
                fontSize: isMobile ? '10px' : '12px'
              }}
              itemStyle={{ padding: 0 }}
              cursor={{ stroke: '#00af6b', strokeWidth: 1, strokeDasharray: '3 3' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#00af6b" 
              strokeWidth={2}
              dot={{ r: isMobile ? 2 : 3, strokeWidth: 2, fill: "#fff", stroke: "#00af6b" }}
              activeDot={{ r: isMobile ? 4 : 5, strokeWidth: 0, fill: "#00af6b" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
