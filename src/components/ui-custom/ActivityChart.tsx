
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

  // For mobile, show fewer data points
  const mobileData = isMobile ? data.filter((_, index) => index % 2 === 0) : data;

  return (
    <div className="dashboard-card p-1 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300 card-hover h-full flex flex-col">
      <div className="flex justify-between items-center mb-1 sm:mb-2">
        <h3 className="text-[9px] sm:text-sm font-medium text-secondary">
          Atividade Recente
        </h3>
        <span className="text-[7px] sm:text-xs bg-gray-100 text-gray-600 py-0.5 sm:py-1 px-1 sm:px-2 rounded-full">
          Últimos dias
        </span>
      </div>

      <div className="h-full w-full flex-1 min-h-[60px] sm:min-h-[150px] animate-on-scroll from-bottom animate-in">
        <ChartContainer config={chartConfig} className="h-full text-[6px] sm:text-xs">
          <AreaChart
            data={mobileData}
            margin={{
              top: 5,
              right: isMobile ? 0 : 10,
              bottom: isMobile ? 0 : 15,
              left: isMobile ? -10 : 5,
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
              fontSize={isMobile ? 6 : 8}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: isMobile ? 6 : 8 }}
              dy={5}
              interval={0}
            />
            <YAxis
              stroke="#888"
              fontSize={isMobile ? 6 : 8}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: isMobile ? 6 : 8 }}
              width={isMobile ? 12 : 20}
              dx={isMobile ? -8 : 0}
              tickFormatter={(value) => isMobile ? value.toString().substring(0, 2) : value}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <ChartTooltipContent
                      className="border-primary/20 bg-white/95 backdrop-blur-sm text-[6px] sm:text-xs"
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
              activeDot={{ r: isMobile ? 2 : 4, strokeWidth: 0, fill: "#00af6b" }}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
