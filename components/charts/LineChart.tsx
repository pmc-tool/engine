'use client';

interface LineChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

export default function LineChart({ title, data }: LineChartProps) {
  // Calculate max value for scaling
  const allValues = data.datasets.flatMap(d => d.data);
  const maxValue = Math.max(...allValues);
  const minValue = Math.min(...allValues);
  const range = maxValue - minValue;
  const padding = range * 0.1;
  const chartMax = maxValue + padding;
  const chartMin = minValue - padding;

  return (
    <div className="h-full">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">{title}</h3>
      <div className="relative h-64">
        {/* Simple SVG-based line chart */}
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="0" x2="400" y2="0" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="0" y1="50" x2="400" y2="50" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="0" y1="100" x2="400" y2="100" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="0" y1="150" x2="400" y2="150" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#e2e8f0" strokeWidth="1" />

          {/* Plot line */}
          {data.datasets.map((dataset, index) => {
            const points = dataset.data.map((value, i) => {
              const x = (i / (dataset.data.length - 1)) * 400;
              const y = 200 - ((value - chartMin) / (chartMax - chartMin)) * 200;
              return `${x},${y}`;
            }).join(' ');

            return (
              <g key={index}>
                {/* Area fill */}
                <polyline
                  points={`0,200 ${points} 400,200`}
                  fill={dataset.backgroundColor}
                  stroke="none"
                />
                {/* Line */}
                <polyline
                  points={points}
                  fill="none"
                  stroke={dataset.borderColor}
                  strokeWidth="2"
                />
                {/* Points */}
                {dataset.data.map((value, i) => {
                  const x = (i / (dataset.data.length - 1)) * 400;
                  const y = 200 - ((value - chartMin) / (chartMax - chartMin)) * 200;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill={dataset.borderColor}
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-2">
          {data.labels.map((label, i) => (
            <span key={i} className="text-xs text-slate-500">{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
