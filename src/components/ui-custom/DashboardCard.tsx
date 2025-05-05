
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
    <div className="dashboard-card p-3 sm:p-5 bg-white rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300 animate-on-scroll from-left animate-in h-full">
      <div className="flex items-center justify-between h-full">
        <div className="flex flex-col gap-2">
          <p className="text-xs sm:text-sm text-gray-500 font-light">{title}</p>
          <p className="text-2xl sm:text-4xl font-bold text-secondary group-hover:text-primary transition-colors">
            {value.toLocaleString()}
          </p>
          {trend && (
            <div className={`flex items-center gap-1 text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span>{Math.abs(trend)}% {isPositive ? 'aumento' : 'queda'}</span>
            </div>
          )}
        </div>
        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
