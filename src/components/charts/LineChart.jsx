import { useMemo } from "react";
import * as d3 from "d3";

const MARGIN = { top: 20, right: 20, bottom: 30, left: 50 };

export default function LineChart({ data, width = 500, height = 300 }) {
  const innerWidth = width - MARGIN.left - MARGIN.right;
  const innerHeight = height - MARGIN.top - MARGIN.bottom;

  const xScale = useMemo(
    () =>
      d3
        .scalePoint()
        .domain(data.map((d) => d.month))
        .range([0, innerWidth])
        .padding(0.5),
    [data, innerWidth],
  );

  const yScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.revenue) * 1.1])
        .range([innerHeight, 0]),
    [data, innerHeight],
  );

  const linePath = useMemo(
    () =>
      d3
        .line()
        .x((d) => xScale(d.month))
        .y((d) => yScale(d.revenue))
        .curve(d3.curveMonotoneX)(data),
    [data, xScale, yScale],
  );

  return (
    <svg width={width} height={height} className="w-full overflow-visible">
      <g transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
        {yScale.ticks(5).map((tick) => (
          <g key={tick}>
            <line
              x1={0}
              y1={yScale(tick)}
              x2={innerWidth}
              y2={yScale(tick)}
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeDasharray="4,4"
            />
            <text
              x={-10}
              y={yScale(tick)}
              textAnchor="end"
              dominantBaseline="middle"
              className="fill-muted-foreground text-xs"
              fontSize={11}
            >
              ${(tick / 1000).toFixed(0)}k
            </text>
          </g>
        ))}
        {data.map((d) => (
          <text
            key={d.month}
            x={xScale(d.month)}
            y={innerHeight + 20}
            textAnchor="middle"
            className="fill-muted-foreground"
            fontSize={11}
          >
            {d.month}
          </text>
        ))}
        <path
          d={linePath}
          fill="none"
          stroke="var(--color-chart-1)"
          strokeWidth={2}
        />
        {data.map((d) => (
          <circle
            key={d.month}
            cx={xScale(d.month)}
            cy={yScale(d.revenue)}
            r={4}
            fill="var(--color-chart-1)"
            stroke="var(--background)"
            strokeWidth={2}
          />
        ))}
      </g>
    </svg>
  );
}
