import React from "react";

import GoalContainer from "../components_re/dashboard_re/GoalContainer";
import DashNav from "../components_re/dashboard_re/DashNav";

import "../components_re/index.css";

export default function Dashboard_re() {
  return (
    <div className="dashboardBackground">
      <img src="https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png"/>
      <GoalContainer />
      <DashNav />
    </div>
  );
}
