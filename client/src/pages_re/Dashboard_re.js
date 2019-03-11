import React, { Component } from 'react';

import Avatar from "../components_re/dashboard_re/Avatar";
import GoalContainer from "../components_re/dashboard_re/GoalContainer";
import DashNav from "../components_re/dashboard_re/DashNav";

import "../css/index.css";

export class Dashboard_re extends Component {

  render() {
    return (
      <div className="dashboardBackground">
        <Avatar />
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
