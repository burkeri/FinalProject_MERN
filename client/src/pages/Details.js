import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import GoalForm from "../components/GoalForm";
import "./createGoal.css";
// import API from '../utils/API';

class Details extends Component {

    // componentWillUpdate() {
    //     console.log(this.props);
    // }

    render() {
        return (
            <Container id="CGFbackground">
                <Col md="6" xs="10" id="formCont">
                    <h1>Edit a Goal:</h1>
                    <small>(User Choice: {this.props.userChoiceID})</small>
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

export default Details;
