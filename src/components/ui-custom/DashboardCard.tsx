
import React from "react";
import { ArrowUp, ArrowDown, LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: number;
}

const DashboardCard = ({ title, value, icon: Icon, trend }: DashboardCardProps) => {
  // Format the value for easier reading
  const formattedValue = value.toLocaleString();
  
  return (
    <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-sm border border-gray-50 flex flex-col justify-between transition-all duration-300 hover:shadow-md h-full">
      <div className="flex items-center justify-between">
        <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-gray-50 flex items-center justify-center">
          <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-gray-500" />
        </div>
        <span className="text-[9px] sm:text-xs text-gray-400 font-light">{title}</span>
      </div>
      
      <div className="mt-1.5 sm:mt-2">
        <div className="text-xs sm:text-sm font-medium text-gray-800">
          {formattedValue}
        </div>
        
        {trend && (
          <div className="flex items-center mt-0.5">
            {trend > 0 ? (
              <ArrowUp className="w-2 h-2 sm:w-3 sm:h-3 text-green-500" />
            ) : (
              <ArrowDown className="w-2 h-2 sm:w-3 sm:h-3 text-red-500" />
            )}
            <span className={`text-[8px] sm:text-[10px] ml-0.5 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(trend)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
