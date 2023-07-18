import React from 'react';

interface MetricCardProps {
  title: string;
  value: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-3xl font-bold text-indigo-600">{value}</p>
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <MetricCard title="Total Users" value={15} />
      <MetricCard title="Website Views" value={823} />
      <MetricCard title="Revenue" value={192} />
    </div>
  );
};

export default DashboardCards;