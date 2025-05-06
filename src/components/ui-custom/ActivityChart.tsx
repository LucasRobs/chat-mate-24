
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { ChevronDown } from "lucide-react";

interface ActivityChartProps {
  data: Array<{ name: string; value: number }>;
  isMobile: boolean;
}

const ActivityChart = ({ data, isMobile }: ActivityChartProps) => {
  // Extended data with messages and attendance values
  const extendedData = [
    { name: "7/04", messages: 120, attendance: 15 },
    { name: "8/04", messages: 20, attendance: 10 },
    { name: "9/04", messages: 340, attendance: 25 },
    { name: "10/04", messages: 50, attendance: 20 },
    { name: "11/04", messages: 60, attendance: 30 },
    { name: "12/04", messages: 20, attendance: 10 },
    { name: "13/04", messages: 80, attendance: 15 },
    { name: "14/04", messages: 160, attendance: 20 },
    { name: "15/04", messages: 30, attendance: 15 },
    { name: "16/04", messages: 330, attendance: 10 },
    { name: "17/04", messages: 90, attendance: 5 },
    { name: "18/04", messages: 70, attendance: 10 },
    { name: "19/04", messages: 20, attendance: 15 },
    { name: "20/04", messages: 30, attendance: 10 },
  ];

  return (
    <div className="dashboard-card p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300 card-hover h-full flex flex-col">
      <div className="flex justify-between items-center mb-2 sm:mb-3">
        <h3 className="text-sm sm:text-base font-medium text-gray-900">
          Atividade Recente
        </h3>
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg py-1 px-2 text-xs sm:text-sm text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors">
          <span>Últimos 30 dias</span>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="h-full w-full flex-1 min-h-[200px] sm:min-h-[300px] animate-on-scroll from-bottom animate-in">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={extendedData}
            margin={{
              top: 10,
              right: isMobile ? 0 : 30,
              bottom: 30,
              left: isMobile ? 0 : 20,
            }}
          >
            <defs>
              <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00af6b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00af6b" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#333333" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#333333" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: isMobile ? 10 : 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: isMobile ? 10 : 12 }}
              tickCount={5}
              domain={[0, 'auto']}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: "white", 
                border: "1px solid #f0f0f0", 
                borderRadius: "8px", 
                padding: "10px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                fontSize: isMobile ? "12px" : "14px" 
              }}
              labelStyle={{ 
                color: "#333", 
                fontWeight: "bold", 
                marginBottom: "5px" 
              }}
              itemStyle={{ padding: "2px 0" }}
              formatter={(value, name) => {
                return [
                  value, 
                  name === "messages" ? "Mensagens" : "Atendimentos"
                ];
              }}
              labelFormatter={(label) => `${label}`}
            />
            <Area
              type="monotone"
              dataKey="messages"
              stroke="#00af6b"
              strokeWidth={2}
              fill="url(#colorMessages)"
              activeDot={{ 
                r: 6, 
                stroke: "#fff", 
                strokeWidth: 2,
                fill: "#00af6b" 
              }}
              name="messages"
            />
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#333333"
              strokeWidth={2}
              fill="url(#colorAttendance)"
              activeDot={{ 
                r: 6, 
                stroke: "#fff", 
                strokeWidth: 2,
                fill: "#333333" 
              }}
              name="attendance"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
