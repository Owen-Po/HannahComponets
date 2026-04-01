import type { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export interface KPICardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: { value: number; label?: string };
  className?: string;
}

export const KPICard = ({ title, value, icon, trend, className = "" }: KPICardProps) => {
  const isPositive = trend && trend.value >= 0;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 tracking-tight">{value}</p>
          {trend && (
            <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
              {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span>{isPositive ? "+" : ""}{trend.value}%</span>
              {trend.label && <span className="text-gray-400 ml-1">{trend.label}</span>}
            </div>
          )}
        </div>
        {icon && (
          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl shrink-0">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
