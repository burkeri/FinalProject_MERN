import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import GoalForm from "../components/GoalForm";

class AddGoalCreate extends Component {

  render() {

    return (
      <Wrapper>
        <h1>Create a Goal:</h1>
        <GoalForm />
      </Wrapper>
    );
  }
}

export default AddGoalCreate;
