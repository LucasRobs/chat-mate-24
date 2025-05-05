
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
  Legend,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface ActivityChartProps {
  data: Array<{ name: string; value: number }>;
  isMobile: boolean;
}

const ActivityChart = ({ data, isMobile }: ActivityChartProps) => {
  const chartConfig = {
    activity: {
      label: "Atividade",
      theme: {
        light: "#00af6b",
        dark: "#00af6b",
      },
    },
  };

  return (
    <div className="dashboard-card p-3 sm:p-5 bg-white rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300 card-hover">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-5">
        <h3 className="text-sm sm:text-lg font-medium text-secondary mb-1 sm:mb-0">
          Atividade Recente
        </h3>
        <span className="text-xs bg-gray-100 text-gray-600 py-1 px-2 sm:px-3 rounded-full font-medium self-start sm:self-auto">
          Últimos {isMobile ? '15' : '30'} dias
        </span>
      </div>

      <div className="h-[200px] sm:h-[280px] md:h-[320px] w-full animate-on-scroll from-bottom animate-in">
        <ChartContainer config={chartConfig} className="h-full text-xs sm:text-sm">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: isMobile ? 10 : 30,
              bottom: isMobile ? 20 : 30,
              left: isMobile ? 0 : 10,
            }}
          >
            <defs>
              <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00af6b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00af6b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              stroke="#888"
              fontSize={isMobile ? 10 : 12}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: isMobile ? 8 : 12 }}
              dy={5}
              interval={isMobile ? 1 : 0}
            />
            <YAxis
              stroke="#888"
              fontSize={isMobile ? 10 : 12}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: isMobile ? 8 : 12 }}
              width={isMobile ? 25 : 40}
              dx={isMobile ? -5 : 0}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <ChartTooltipContent
                      className="border-primary/20 bg-white/95 backdrop-blur-sm"
                      indicator="dot"
                      payload={payload.map((item) => ({
                        ...item,
                        name: "activity",
                        value: item.value,
                      }))}
                    />
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#00af6b"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorActivity)"
              activeDot={{ r: isMobile ? 4 : 6, strokeWidth: 0, fill: "#00af6b" }}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              height={36} 
              iconType="circle" 
              iconSize={8}
              formatter={(value) => <span className="text-sm font-medium">Atividade Diária</span>} 
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
