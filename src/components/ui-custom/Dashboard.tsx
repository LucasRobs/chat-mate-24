
import React from "react";
import { Users, MessageSquare, BarChart2 } from "lucide-react";
import DashboardCard from "./DashboardCard";
import ActivityChart from "./ActivityChart";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardProps {
  activityData: Array<{ name: string; value: number }>;
  isMobile?: boolean;
}

const Dashboard = ({ activityData, isMobile: propIsMobile }: DashboardProps) => {
  // Use o hook useIsMobile se não for fornecido via props
  const hookIsMobile = useIsMobile();
  const isMobile = propIsMobile !== undefined ? propIsMobile : hookIsMobile;
  
  // Simplified data for mobile view
  const simplifiedData = isMobile ? activityData.filter((_, idx) => idx % 2 === 0) : activityData;

  return (
    <div className="w-full h-full flex flex-col max-w-full mx-auto rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-500 relative">
      {/* Dashboard content */}
      <div className="bg-[#fafafa] p-3 sm:p-4 flex-1 flex flex-col h-full">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 shadow-sm border border-gray-50">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
              alt="followop Logo" 
              className="h-5 sm:h-6"
            />
            <span className="font-medium text-xs sm:text-sm text-gray-800">Visão Geral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">AU</span>
            </div>
          </div>
        </div>

        {/* Dashboard Stats Cards - More minimal layout */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
          <DashboardCard title="Atendimentos" value={329} icon={Users} trend={+12} />
          <DashboardCard title="Mensagens" value={2559} icon={MessageSquare} trend={+28} />
          <DashboardCard title="Conversões" value={43} icon={BarChart2} trend={+8} />
        </div>

        {/* Smaller activity chart */}
        <div className="flex-1 flex flex-col min-h-[180px] sm:min-h-[250px]">
          <ActivityChart data={simplifiedData} isMobile={isMobile} />
        </div>
      </div>
      
      {/* Simplified footer */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
        <div className="flex items-center gap-1">
          <img 
            src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
            alt="followop Logo" 
            className="h-3 sm:h-4"
          />
          <span className="font-medium text-xs text-gray-800">followop</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
