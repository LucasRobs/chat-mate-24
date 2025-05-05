
import React from "react";
import { Users, MessageSquare, BarChart2, TrendingUp } from "lucide-react";
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
    <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-500 relative mobile-container">
      {/* Dashboard content */}
      <div className="bg-[#fafafa] p-3 sm:p-6">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between bg-white rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm border border-gray-50">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
              alt="followop Logo" 
              className="h-6 sm:h-8"
            />
            <span className="font-medium text-sm sm:text-base text-gray-800">Visão Geral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs sm:text-sm font-medium text-primary">AU</span>
            </div>
          </div>
        </div>

        {/* Dashboard Stats Cards - Responsive grid with improved spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <DashboardCard title="Atendimentos" value={329} icon={Users} trend={+12} />
          <DashboardCard title="Mensagens" value={2559} icon={MessageSquare} trend={+28} />
          <DashboardCard title="Conversões" value={43} icon={BarChart2} trend={+8} />
        </div>

        {/* Gráfico de atividade recente */}
        <ActivityChart data={simplifiedData} isMobile={isMobile} />
      </div>
      
      {/* Floating logo footer */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-sm">
        <div className="flex items-center gap-1 sm:gap-2">
          <img 
            src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
            alt="followop Logo" 
            className="h-4 sm:h-5"
          />
          <span className="font-medium text-xs sm:text-sm text-gray-800">followop</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
