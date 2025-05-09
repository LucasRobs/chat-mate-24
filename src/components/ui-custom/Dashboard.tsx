
import React from "react";
import { Users, MessageSquare, BarChart2, ArrowRight, Bell, Calendar } from "lucide-react";
import DashboardCard from "./DashboardCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

interface DashboardProps {
  activityData: Array<{ name: string; value: number }>;
  isMobile?: boolean;
}

const Dashboard = ({ activityData, isMobile: propIsMobile }: DashboardProps) => {
  const hookIsMobile = useIsMobile();
  const isMobile = propIsMobile !== undefined ? propIsMobile : hookIsMobile;
  const simplifiedData = isMobile ? activityData.filter((_, idx) => idx % 2 === 0) : activityData;

  const handleViewMore = () => {
    window.open("https://www.followop.com.br/register", "_blank");
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow border border-gray-100 transition-all duration-500 bg-white">
      <div className="p-2 sm:p-4 flex-1 flex flex-col gap-2 sm:gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-2">
            <img src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" alt="followop Logo" className="h-3 sm:h-5" />
            <span className="font-medium text-[10px] sm:text-xs text-gray-800">Visão Geral</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="text-[8px] sm:text-xs text-primary/80 bg-primary/10 px-1.5 sm:px-2 py-0.5 rounded-full">Premium</div>
            <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-[8px] sm:text-xs font-medium text-primary">AU</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 sm:gap-2">
          <DashboardCard title="Atendimentos" value={329} icon={Users} trend={+12} />
          <DashboardCard title="Mensagens" value={2559} icon={MessageSquare} trend={+28} />
          <DashboardCard title="Conversões" value={43} icon={BarChart2} trend={+8} />
        </div>

        <div className="grid grid-cols-2 gap-1 sm:gap-2">
          <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-sm border flex items-center">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-50 rounded-lg flex items-center justify-center mr-1.5 sm:mr-2">
              <Bell className="w-2 h-2 sm:w-4 sm:h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-[8px] sm:text-[11px] text-gray-500">Notificações</p>
              <p className="text-[9px] sm:text-xs font-medium">12 novas</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-sm border flex items-center">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-green-50 rounded-lg flex items-center justify-center mr-1.5 sm:mr-2">
              <Calendar className="w-2 h-2 sm:w-4 sm:h-4 text-green-500" />
            </div>
            <div>
              <p className="text-[8px] sm:text-[11px] text-gray-500">Agendamentos</p>
              <p className="text-[9px] sm:text-xs font-medium">5 hoje</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[100px] sm:h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={simplifiedData}>
              <defs>
                <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#00af6b" stopOpacity={0.4} />
                  <stop offset="90%" stopColor="#00af6b" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide={isMobile} tick={{ fontSize: 10 }} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: "white", 
                  border: "1px solid #e2e8f0", 
                  fontSize: isMobile ? "10px" : "12px",
                  padding: isMobile ? "4px" : "8px",
                  borderRadius: "4px"
                }}
                labelStyle={{ color: "#333" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00af6b"
                fill="url(#colorPrimary)"
                strokeWidth={1.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleViewMore}
            variant="minimal"
            size="sm"
            className="text-[10px] sm:text-xs font-medium flex items-center gap-1 p-1 sm:p-2 h-auto"
          >
            Ver Mais
            <ArrowRight size={isMobile ? 8 : 10} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
