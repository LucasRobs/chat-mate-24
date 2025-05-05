
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
    <div className="dashboard-card p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300 card-hover h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xs sm:text-sm font-medium text-secondary">
          Atividade Recente
        </h3>
        <span className="text-xs bg-gray-100 text-gray-600 py-1 px-2 rounded-full">
          Últimos dias
        </span>
      </div>

      <div className="h-full w-full flex-1 min-h-[160px] sm:min-h-[200px] animate-on-scroll from-bottom animate-in">
        <ChartContainer config={chartConfig} className="h-full text-xs">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: isMobile ? 5 : 15,
              bottom: isMobile ? 15 : 20,
              left: isMobile ? 0 : 5,
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
              fontSize={8}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8 }}
              dy={5}
              interval={0}
            />
            <YAxis
              stroke="#888"
              fontSize={8}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8 }}
              width={20}
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
              strokeWidth={1.5}
              fillOpacity={1}
              fill="url(#colorActivity)"
              activeDot={{ r: isMobile ? 3 : 4, strokeWidth: 0, fill: "#00af6b" }}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
