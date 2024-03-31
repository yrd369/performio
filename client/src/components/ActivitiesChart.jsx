import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    week: "Week 1",
    guest: 400,
    user: 240,
  },
  {
    week: "Week 2",
    guest: 300,
    user: 200,
  },
  {
    week: "Week 3",
    guest: 500,
    user: 400,
  },
  {
    week: "Week 4",
    guest: 600,
    user: 500,
  },
];

const ActivitesChart = () => {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 text-lg font-bold">Activites</strong>
      <small className="text-gray-500">May - June 2021</small>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="guest" barSize={40} fill="#a7f3d0" />
            <Bar dataKey="user" barSize={40} fill="#fda4af" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default ActivitesChart;
