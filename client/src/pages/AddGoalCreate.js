import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import GoalForm from "../components/GoalForm";

class AddGoalCreate extends Component {

  render() {

    return (
      <Wrapper>
        <h1>Add Goal Create</h1>
        <GoalForm 
        />
      </Wrapper>
    );
  }
}

export default AddGoalCreate;
