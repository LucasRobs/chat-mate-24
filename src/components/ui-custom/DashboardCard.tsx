
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
    <div className="dashboard-card p-2 bg-white rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300 animate-on-scroll from-left animate-in h-full">
      <div className="flex flex-col gap-1">
        <p className="text-xs text-gray-500 font-light">{title}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm sm:text-base font-bold text-secondary transition-colors">
            {value.toLocaleString()}
          </p>
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-2.5 h-2.5 text-primary" />
          </div>
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? (
              <TrendingUp className="w-2 h-2" />
            ) : (
              <TrendingDown className="w-2 h-2" />
            )}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
