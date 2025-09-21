import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Sidebar from "./Menus/Sidebar";
import Navbar from "./Menus/Navbar";
import CRMPage from "./MainSection/CRMPage";
const data = [
  { name: "Another Trial Running", value: 4 },
  { name: "Converted to site", value: 13 },
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-contentt">
        <div className="topbar">
          <Navbar />
        </div>
        <CRMPage/>
      </div>
    </div>
  );
}
