
import React from "react";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

const DashboardCard = ({ title, value, icon: Icon }: DashboardCardProps) => {
  return (
    <div className="dashboard-card p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs sm:text-sm text-gray-500">{title}</p>
          <p className="text-lg sm:text-xl font-bold text-secondary group-hover:text-primary transition-colors">
            {value}
          </p>
        </div>
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
