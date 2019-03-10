import React, { Component } from 'react';
import posed from 'react-pose';

import "../../css/index.css";

const GoalCard = posed.div({

});

export class Goal extends Component {
  render() {
    return (
      <GoalCard
        key={this.props.key}
        className="card"
      >
        <i className={this.props.icon}/>
        <h3>{this.props.name}</h3>
      </GoalCard>
    )
  }
}

export default Goal;

