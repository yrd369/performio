import React from "react";
import ActivitesChart from "../components/ActivitiesChart";
import StaticsGrid from "../components/StaticsGrid";
import CustomChart from "../components/CustomChart";
import Header from "../components/Header";

const DashBoard = () => {
  return (
    <div className="bg-indigo-100 space-y-10 p-10 h-full font-poppins">
      <Header />
      <StaticsGrid />
      <ActivitesChart />
      <CustomChart />
    </div>
  );
};

export default DashBoard;
