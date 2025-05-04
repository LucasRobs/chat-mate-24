
import React from "react";
import { Users, MessageSquare, BarChart2 } from "lucide-react";
import DashboardCard from "./DashboardCard";
import ActivityChart from "./ActivityChart";

interface DashboardProps {
  activityData: Array<{ name: string; value: number }>;
  isMobile: boolean;
}

const Dashboard = ({ activityData, isMobile }: DashboardProps) => {
  // Simplified data for mobile view
  const simplifiedData = isMobile ? activityData.filter((_, idx) => idx % 3 === 0) : activityData;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-[6px] border-primary/10 hover:border-primary/20 transition-all duration-500 relative mobile-container">
      {/* Dashboard inspirado na imagem de referência */}
      <div className="bg-[#fafafa] p-2 sm:p-4">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 shadow-sm">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
              alt="followop Logo" 
              className="h-6 sm:h-8"
            />
            <span className="font-semibold text-sm sm:text-base text-gray-800">Visão Geral</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">AU</span>
            </div>
          </div>
        </div>

        {/* Dashboard Stats Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
          <DashboardCard title="Atendimentos" value={329} icon={Users} />
          <DashboardCard title="Mensagens" value={2559} icon={MessageSquare} />
          <DashboardCard title="Conversões" value={43} icon={BarChart2} />
        </div>

        {/* Gráfico de atividade recente */}
        <ActivityChart data={simplifiedData} isMobile={isMobile} />
      </div>
      
      {/* Floating logo footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-sm">
        <div className="flex items-center gap-1 sm:gap-2">
          <img 
            src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
            alt="followop Logo" 
            className="h-4 sm:h-6"
          />
          <span className="font-medium text-xs sm:text-sm text-gray-800">followop</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
