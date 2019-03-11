import React, { Component } from "react";
import posed from "react-pose";
import { Progress } from "reactstrap";
import MaterialIcons from "material-icons-react";

import "../../css/index.css";

const GoalCard = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export class Goal extends Component {
  render() {
    return (
        <GoalCard key={this.props.key} className="goalCard">
          <i className={this.props.icon} id="goalIcon" />
          <h3 className="goalTitle">{this.props.name}</h3>
          <button className="deleteGoal">
            <MaterialIcons
              id="deleteIcon"
              icon="delete"
            />
          </button>
          <h3 className="goalFr">0/{this.props.frequency}</h3>
          <Progress
            value={this.props.progress} 
            max={this.props.frequency} 
          />
          <button className="goalBtn">Finish</button>
          <button className="goalBtn">Details</button>
          <div style={{clear: "both"}}></div>
        </GoalCard>
    );
  }
}

export default Goal;
