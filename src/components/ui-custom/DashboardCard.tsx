
import React from "react";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
}

const DashboardCard = ({ title, value, icon: Icon, trend }: DashboardCardProps) => {
  const isPositive = trend && trend > 0;
  
  return (
    <div className="dashboard-card p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300 animate-on-scroll from-left animate-in h-full">
      <div className="flex flex-col gap-1">
        <p className="text-xs text-gray-500 font-light">{title}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg sm:text-xl font-bold text-secondary transition-colors">
            {value.toLocaleString()}
          </p>
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          </div>
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
