import React, { Component } from "react";

import Avatar from "../components_re/dashboard/Avatar";
import GoalContainer from "../components_re/dashboard/GoalContainer";
import DashNav from "../components_re/dashboard/DashNav";

import "../css/index.css";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardBackground">
        <Avatar />
        <GoalContainer
          username={this.props.username}
          goals={this.props.goals}
          getGoals={this.props.getGoals}
          handleUserChoice={this.props.handleUserChoice}
          userChoiceID={this.props.userChoiceID}
          userChoiceGoal={this.props.userChoiceGoal}
        />
        <DashNav />
      </div>
    );
  }
}

export default Dashboard;
