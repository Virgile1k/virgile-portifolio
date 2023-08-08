// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface StatsData {
  month: string;
  visitors: number;
  pageViews: number;
}

const defaultStats: StatsData[] = [
  {
    month: "",
    visitors: 0,
    pageViews: 0,
  },
];

const MonthlyStats = () => {
  const [stats, setStats] = useState<StatsData[]>(defaultStats);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const statsData: StatsData[] = [
      {
        month: "January",
        visitors: 10000,
        pageViews: 50000,
      },
      {
        month: "February",
        visitors: 11500,
        pageViews: 52500,
      },
    ];

    setStats(statsData);
  }, []);

  const chartData = {
    labels: stats.map((row) => row.month),
    datasets: [
      {
        label: "Visitors",
        data: stats.map((row) => row.visitors),
        backgroundColor: "#f87979",
      },
      {
        label: "Page Views",
        data: stats.map((row) => row.pageViews),
        backgroundColor: "#60a5fa",
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current && chartData) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        chartInstanceRef.current = new Chart(ctx, {
          type: "bar",
          data: chartData,
        });
      }
    }
  }, [chartData]);

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Monthly Statistics
      </h2>

      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default MonthlyStats;
