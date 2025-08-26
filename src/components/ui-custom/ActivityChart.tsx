
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

interface ActivityChartProps {
  data: Array<{ name: string; value: number }>;
}

const ActivityChart = ({ data }: ActivityChartProps) => {
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
    <div className="dashboard-card p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1.5">
          <TrendingUp size={16} className="text-primary" />
          <h3 className="text-sm font-medium text-gray-800">
            Atividade Recente
          </h3>
        </div>
        <span className="text-xs bg-gray-100 text-gray-600 py-1 px-2.5 rounded-full">
          Últimos dias
        </span>
      </div>

      <div className="h-full w-full flex-1 min-h-[180px] animate-fade-in">
        <ChartContainer config={chartConfig} className="h-full text-xs">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 15,
              bottom: 20,
              left: 10,
            }}
          >
            <defs>
              <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00af6b" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#00af6b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#888"
              fontSize={10}
              tickLine={false}
              axisLine={{ stroke: "#eee" }}
              tick={{ fontSize: 10 }}
              dy={5}
            />
            <YAxis
              stroke="#888"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 10 }}
              width={25}
              dx={0}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <ChartTooltipContent
                      className="border border-gray-100 bg-white/98 backdrop-blur-sm text-xs shadow-md rounded-lg"
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
              activeDot={{ r: 5, strokeWidth: 0, fill: "#00af6b" }}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
