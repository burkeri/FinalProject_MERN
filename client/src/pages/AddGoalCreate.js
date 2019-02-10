import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import GoalForm from "../components/GoalForm";
import "./createGoal.css";

class AddGoalCreate extends Component {
    render() {
        return (
            <Container id="CGFbackground">
                <Col md="6" xs="10" id="formCont">
                    <h1>Create a Goal:</h1>
                    <GoalForm
                        userChoiceID={this.props.userChoiceID}
                        username={this.props.username}
                        userChoiceGoal={this.props.userChoiceGoal}
                    />
                </Col>
            </Container>
        );
    }
}

export default AddGoalCreate;
