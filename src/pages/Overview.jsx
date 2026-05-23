import MetricCard from "@/components/dashboard/MetricCard";
import LineChart from "@/components/charts/LineChart";
import { metrics } from "@/data/metrics";
import { revenueData } from "@/data/revenue";
import { useRef } from "react";
import { useContainerWidth } from "@/hooks/useContainerWidth";

export default function Overview() {
  const chartRef = useRef(null);
  const chartWidth = useContainerWidth(chartRef);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>

      <div
        ref={chartRef}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h2 className="text-base font-semibold text-foreground">
          Revenue Over Time
        </h2>
        <p className="text-sm text-muted-foreground mb-4">Last 12 months</p>
        <LineChart data={revenueData} width={chartWidth} height={300} />
      </div>
    </div>
  );
}
