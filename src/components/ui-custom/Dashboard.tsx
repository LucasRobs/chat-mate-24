
import React from "react";
import { Users, MessageSquare, BarChart2, ArrowRight, Bell, Calendar } from "lucide-react";
import DashboardCard from "./DashboardCard";
import ActivityChart from "./ActivityChart";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

interface DashboardProps {
  activityData: Array<{ name: string; value: number }>;
  isMobile?: boolean;
}

const Dashboard = ({ activityData, isMobile: propIsMobile }: DashboardProps) => {
  // Use the hook useIsMobile if not provided via props
  const hookIsMobile = useIsMobile();
  const isMobile = propIsMobile !== undefined ? propIsMobile : hookIsMobile;
  
  // Simplified data for mobile view
  const simplifiedData = isMobile ? activityData.filter((_, idx) => idx % 2 === 0) : activityData;

  // Handler for "Ver Mais" button
  const handleViewMore = () => {
    window.open("https://www.followop.com.br/register", "_blank");
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-500 relative">
      {/* Dashboard content */}
      <div className="bg-[#fafafa] p-2 sm:p-3 flex-1 flex flex-col">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between bg-white rounded-lg p-2 mb-2 sm:mb-3 shadow-sm border border-gray-50">
          <div className="flex items-center gap-1 sm:gap-2">
            <img 
              src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
              alt="followop Logo" 
              className="h-3 sm:h-5"
            />
            <span className="font-medium text-[10px] sm:text-xs text-gray-800">Visão Geral</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="text-[10px] sm:text-xs text-primary/80 bg-primary/5 px-1.5 sm:px-2 py-0.5 rounded-full">
              Premium
            </div>
            <div className="h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-[10px] sm:text-xs font-medium text-primary">AU</span>
            </div>
          </div>
        </div>

        {/* Dashboard Stats Cards - More compact layout */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-2 sm:mb-3">
          <DashboardCard title="Atendimentos" value={329} icon={Users} trend={+12} />
          <DashboardCard title="Mensagens" value={2559} icon={MessageSquare} trend={+28} />
          <DashboardCard title="Conversões" value={43} icon={BarChart2} trend={+8} />
        </div>

        {/* Additional Features Section */}
        <div className="grid grid-cols-2 gap-1 sm:gap-2 mb-2 sm:mb-3">
          <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-sm border border-gray-50 flex items-center">
            <div className="w-5 h-5 sm:w-7 sm:h-7 bg-blue-50 rounded-lg flex items-center justify-center mr-1.5 sm:mr-2">
              <Bell className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-blue-500" />
            </div>
            <div>
              <p className="text-[9px] sm:text-xs text-gray-500">Notificações</p>
              <p className="text-[10px] sm:text-xs font-medium">12 novas</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-sm border border-gray-50 flex items-center">
            <div className="w-5 h-5 sm:w-7 sm:h-7 bg-green-50 rounded-lg flex items-center justify-center mr-1.5 sm:mr-2">
              <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-green-500" />
            </div>
            <div>
              <p className="text-[9px] sm:text-xs text-gray-500">Agendamentos</p>
              <p className="text-[10px] sm:text-xs font-medium">5 hoje</p>
            </div>
          </div>
        </div>

        {/* Smaller activity chart */}
        <div className="flex-1 flex flex-col min-h-[80px] sm:min-h-[120px]">
          <ActivityChart data={simplifiedData} isMobile={isMobile} />
        </div>
        
        {/* "Ver Mais" button */}
        <div className="mt-1 sm:mt-2 flex justify-end">
          <Button 
            onClick={handleViewMore}
            variant="minimal" 
            size="sm" 
            className="text-[10px] sm:text-xs font-medium flex items-center gap-1"
          >
            Ver Mais
            <ArrowRight size={10} />
          </Button>
        </div>
      </div>
      
      {/* Simplified footer */}
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-sm">
        <div className="flex items-center gap-1">
          <img 
            src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
            alt="followop Logo" 
            className="h-2.5 sm:h-3"
          />
          <span className="font-medium text-[10px] sm:text-xs text-gray-800">followop</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
