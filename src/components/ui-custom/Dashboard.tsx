
import React, { useState } from "react";
import { Users, MessageSquare, ArrowDownRight, ArrowUpRight, BarChart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ActivityChart from "./ActivityChart";
import DashboardCard from "./DashboardCard";
import { Card } from "@/components/ui/card";

interface DashboardProps {
  activityData: Array<{ name: string; value: number }>;
  isMobile?: boolean;
}

const Dashboard = ({ activityData, isMobile: propIsMobile }: DashboardProps) => {
  const hookIsMobile = useIsMobile();
  const isMobile = propIsMobile !== undefined ? propIsMobile : hookIsMobile;
  
  const [timeFrame, setTimeFrame] = useState("Últimos 30 dias");
  
  return (
    <div className={`w-full mx-auto ${isMobile ? 'px-2 max-w-full' : 'max-w-5xl px-4'}`}>
      <div className="mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-2xl font-medium text-gray-900">Visão Geral</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
        <DashboardCard 
          title="Atendimentos" 
          value={446} 
          icon={Users} 
          trend={12} 
        />
        
        <DashboardCard 
          title="Mensagens" 
          value={3119} 
          icon={MessageSquare} 
          trend={-5} 
        />
      </div>
      
      <Card className={`p-3 sm:p-6 ${isMobile ? 'h-64' : 'h-auto'}`}>
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-sm sm:text-lg font-medium text-gray-900">Atividade Recente</h3>
          <div className="relative">
            <select 
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
              className="text-xs sm:text-sm text-gray-600 bg-white border border-gray-200 rounded-md p-1 sm:p-2 pl-2 pr-6 appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
              <option>Último mês</option>
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={`${isMobile ? 'h-44' : 'h-72 sm:h-96'}`}>
          <ActivityChart data={activityData} isMobile={isMobile} />
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
