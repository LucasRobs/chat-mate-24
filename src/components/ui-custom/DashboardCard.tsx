
import React from "react";
import { ArrowUp, ArrowDown, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: number;
}

const DashboardCard = ({ title, value, icon: Icon, trend }: DashboardCardProps) => {
  // Format value for better readability
  const formattedValue = value.toLocaleString();
  
  return (
    <Card className="p-3 sm:p-5 flex flex-col">
      <div className="text-xs sm:text-sm text-gray-500 mb-1">{title}</div>
      <div className="flex items-end justify-between mt-1">
        <div className="text-lg sm:text-2xl font-semibold text-gray-900">{formattedValue}</div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-primary/5">
          <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
        </div>
      </div>
      
      {trend !== undefined && (
        <div className="flex items-center mt-2">
          {trend > 0 ? (
            <>
              <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
              <span className="text-xs text-green-500">
                {Math.abs(trend)}%
              </span>
            </>
          ) : (
            <>
              <ArrowDown className="w-3 h-3 text-red-500 mr-1" />
              <span className="text-xs text-red-500">
                {Math.abs(trend)}%
              </span>
            </>
          )}
        </div>
      )}
    </Card>
  );
};

export default DashboardCard;
