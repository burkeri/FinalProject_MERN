import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import GoalForm from "../components/GoalForm";

class AddGoalCreate extends Component {

  render() {
    // console.log(this.props);

    return (
      <Wrapper>
        <h1>Add Goal Create</h1>
        <GoalForm createGoal={this.props.createGoal}/>
      </Wrapper>
    );
  }
}

export default AddGoalCreate;
