import React, { Component } from 'react';

import GoalContainer from "../components_re/dashboard_re/GoalContainer";
import DashNav from "../components_re/dashboard_re/DashNav";

import "../css/index.css";

export class Dashboard_re extends Component {

  render() {
    return (
      <div className="dashboardBackground">
        <img 
          src="https://cdn.iconscout.com/icon/free/png-256/account-profile-avatar-man-circle-round-user-30452.png"
          alt="profile"
        />
        <GoalContainer
          username={this.props.username}
          goals={this.props.goals}
        />
        <DashNav />
      </div>
    )
  }
}

export default Dashboard_re;
