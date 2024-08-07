import React from "react";
import Sidebar from "./Sidebar";

const ParentComponent = () => {
  // Define the number of dashboards here
  const numberOfDashboards = 3;

  return (
    <div>
      <Sidebar numberOfDashboards={numberOfDashboards} />
      {/* Other components and content */}
    </div>
  );
};

export default ParentComponent;
