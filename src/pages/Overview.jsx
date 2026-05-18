import MetricCard from '@/components/dashboard/MetricCard'
import { metrics } from '@/data/metrics'

export default function Overview() {
  return (
    <div className="flex flex-col gap-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map(metric => (
          <MetricCard key={metric.id} {...metric} />
        ))}
      </div>

    </div>
  )
}
