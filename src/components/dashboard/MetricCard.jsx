import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MetricCard({
  title,
  value,
  change,
  trend,
  description,
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
          <TrendingUp size={16} className="text-muted-foreground" />
        </div>
          </div>
          <div>
  <h2 className="text-3xl font-bold text-foreground tracking-tight">
    {value}
  </h2>
          </div>
          
          
<div className="flex items-center gap-2">
  <div className={cn(
    'flex items-center gap-1 text-xs font-medium',
    trend === 'up' ? 'text-emerald-500' : 'text-red-500'
  )}>
    {trend === 'up'
      ? <TrendingUp size={14} />
      : <TrendingDown size={14} />
    }
    <span>{change}</span>
  </div>
  <p className="text-xs text-muted-foreground">{description}</p>
</div>

    </div>
  );
}
