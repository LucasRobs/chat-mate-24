
import React, { useState } from "react";
import { Users, MessageSquare, ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ActivityChart from "./ActivityChart";
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
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-2xl font-medium text-gray-900">Visão Geral</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <Card className="p-4 sm:p-6 flex flex-col">
          <div className="text-sm text-gray-600 mb-1">Atendimentos</div>
          <div className="flex items-end justify-between">
            <div className="text-xl sm:text-3xl font-semibold text-gray-900">446</div>
            <div className="w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-green-50">
              <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
            </div>
          </div>
        </Card>
        
        <Card className="p-4 sm:p-6 flex flex-col">
          <div className="text-sm text-gray-600 mb-1">Mensagens</div>
          <div className="flex items-end justify-between">
            <div className="text-xl sm:text-3xl font-semibold text-gray-900">3119</div>
            <div className="w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-green-50">
              <MessageSquare className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
            </div>
          </div>
        </Card>
      </div>
      
      <Card className="p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-base sm:text-lg font-medium text-gray-900">Atividade Recente</h3>
          <div className="relative">
            <select 
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
              className="text-xs sm:text-sm text-gray-600 bg-white border border-gray-200 rounded-md p-1 sm:p-2 pl-3 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option>Últimos 30 dias</option>
              <option>Últimos 7 dias</option>
              <option>Último mês</option>
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-72 sm:h-96">
          <ActivityChart data={activityData} isMobile={isMobile} />
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
