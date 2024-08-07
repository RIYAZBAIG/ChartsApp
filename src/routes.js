import React, { useState } from "react";
import {NavLink, useHistory } from "react-router-dom";
import Dashboard from "views/Dashboard";
import Dashboard1 from "views/Dashboard1"; // Add the import for Dashboard1 component

const getDashboardPath = (index) => `/dashboard${index > 1 ? index : ""}`;

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/create-dashboard",
    name: "Create Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    layout: "/admin",
    component: Dashboard1,
  },
  // Rest of the routes...
];

const DashboardRoutes = () => {
  const [dashboardCount, setDashboardCount] = useState(1);
  const history = useHistory();

  const handleCreateDashboard = () => {
    setDashboardCount((prevCount) => prevCount + 1);
    const dashboardPath = getDashboardPath(dashboardCount);
    history.push(dashboardPath);
  };

  return (
    <div>
      {routes.map((route) =>
        route.path === "/create-dashboard" ? (
          <button key={route.path} onClick={handleCreateDashboard}>
            {route.name}
          </button>
        ) : (
          <NavLink key={route.path} to={route.path}>
            {route.name}
          </NavLink>
        )
      )}
    </div>
  );
};

export default routes;
