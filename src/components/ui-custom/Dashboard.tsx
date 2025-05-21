
import React from "react";
import { Users, MessageSquare, BarChart2, ArrowRight, Bell, Calendar, TrendingUp } from "lucide-react";
import DashboardCard from "./DashboardCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
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
    <div className="w-full max-w-3xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-500 bg-white hover:shadow-lg">
      <div className="p-3 sm:p-5 flex-1 flex flex-col gap-2 sm:gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <img src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" alt="followop Logo" className="h-4 sm:h-6" />
            <span className="font-medium text-[10px] sm:text-sm text-gray-800">Painel de Controle</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <div className="text-[8px] sm:text-xs text-primary/90 bg-primary/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-primary/20">Premium</div>
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-[9px] sm:text-xs font-medium text-primary">AU</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <DashboardCard title="Atendimentos" value={329} icon={Users} trend={+12} />
          <DashboardCard title="Mensagens" value={2559} icon={MessageSquare} trend={+28} />
          <DashboardCard title="Conversões" value={43} icon={BarChart2} trend={+8} />
        </div>

        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border flex items-center hover:border-primary/30 transition-all duration-300">
            <div className="w-5 h-5 sm:w-7 sm:h-7 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
              <Bell className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-[8px] sm:text-xs text-gray-500">Notificações</p>
              <p className="text-[10px] sm:text-sm font-medium">12 novas</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border flex items-center hover:border-primary/30 transition-all duration-300">
            <div className="w-5 h-5 sm:w-7 sm:h-7 bg-green-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
              <Calendar className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-green-500" />
            </div>
            <div>
              <p className="text-[8px] sm:text-xs text-gray-500">Agendamentos</p>
              <p className="text-[10px] sm:text-sm font-medium">5 hoje</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[120px] sm:h-[180px] border border-gray-100 rounded-lg p-2 shadow-sm animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-1">
              <TrendingUp size={isMobile ? 14 : 16} className="text-primary" />
              <span className="text-[9px] sm:text-xs font-medium text-gray-800">Desempenho</span>
            </div>
            <span className="text-[7px] sm:text-[9px] text-gray-500">Últimos 5 dias</span>
          </div>
          <ResponsiveContainer width="100%" height="88%">
            <AreaChart data={simplifiedData}>
              <defs>
                <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00af6b" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#00af6b" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: isMobile ? 9 : 11 }} 
                tickLine={false}
                axisLine={{ stroke: "#eee" }}
                dy={5}
              />
              <YAxis 
                hide={isMobile}
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: "white", 
                  border: "1px solid #e2e8f0", 
                  fontSize: isMobile ? "10px" : "12px",
                  padding: isMobile ? "4px" : "8px",
                  borderRadius: "6px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}
                labelStyle={{ color: "#333", fontWeight: 500 }}
                formatter={(value) => [`${value}`, 'Valor']}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00af6b"
                fill="url(#colorPrimary)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-end animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Button
            onClick={handleViewMore}
            variant="outline"
            size="sm"
            className="text-[10px] sm:text-xs font-medium flex items-center gap-1.5 p-1.5 sm:p-2.5 h-auto border-primary/20 text-primary hover:bg-primary/5"
          >
            Ver Painel Completo
            <ArrowRight size={isMobile ? 10 : 12} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
