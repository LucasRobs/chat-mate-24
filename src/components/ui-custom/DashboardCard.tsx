
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
  // Formatar o valor para facilitar a leitura
  const formattedValue = value.toLocaleString();
  
  return (
    <Card className="p-4 sm:p-6 flex flex-col">
      <div className="text-sm text-gray-600 mb-1">{title}</div>
      <div className="flex items-end justify-between">
        <div className="text-xl sm:text-3xl font-semibold text-gray-900">{formattedValue}</div>
        <div className="w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-green-50">
          <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
        </div>
      </div>
      
      {trend !== undefined && (
        <div className="flex items-center mt-2">
          {trend > 0 ? (
            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1" />
          ) : (
            <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-1" />
          )}
          <span className={`text-xs ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {Math.abs(trend)}%
          </span>
        </div>
      )}
    </Card>
  );
};

export default DashboardCard;
