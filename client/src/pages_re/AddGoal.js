import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { Form, Input } from "reactstrap";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css";

import DashNav from "../components_re/dashboard/DashNav";

import API from "../utils/API";
import "../css/index.css";
import { tween } from "popmotion";
import { linear } from "@popmotion/easing";

const AddGoalPage = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});
export class AddGoal extends Component {
  state = {
    userChoiceID: this.props.userChoiceID || "",
    username: this.props.username || "",
    category: this.props.userChoiceGoal.category || "",
    name: this.props.userChoiceGoal.name || "",
    icon: this.props.userChoiceGoal.icon || "",
    frequency: this.props.userChoiceGoal.frequency.toString() || "0",
    description: this.props.userChoiceGoal.description || ""
  };

  // updates the values in the form inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // updates the choice between mind/spirit/body
  handleChoice = choice => {
    // update the state
    this.setState({ category: choice });
  };

  handleIconChange = icon => {
    // console.log(`Current icon: ${this.state.icon}`);
    // console.log(`Selected icon: ${icon}`);
    this.setState({ icon: icon });
  };

  // runs the code after the submit button is clicked
  handleSubmit = event => {
    const {
      userChoiceID,
      category,
      name,
      icon,
      frequency,
      description,
      username
    } = this.state;

    const goalData = {
      userID: username,
      category: category,
      name: name,
      icon: icon,
      frequency: parseInt(frequency),
      description: description
    };

    this.state.userChoiceID.length > 0
      ? API.updateGoal(userChoiceID, goalData)
          .then(() => this.props.getGoals(this.props.username))
          .catch(err => console.log(err))
      : API.createGoal(goalData)
          .then(() => this.props.getGoals(this.props.username))
          .catch(err => console.log(err));
  };

  render() {
    const iconPack = [
      "far fa-angry",
      "fas fa-archive",
      "fas fa-ban",
      "fas fa-baseball-ball",
      "fas fa-bed",
      "fas fa-beer",
      "fas fa-bell",
      "fas fa-bible",
      "fas fa-bicycle",
      "fas fa-bone",
      "fas fa-book",
      "fas fa-brain",
      "fas fa-bread-slice",
      "fas fa-broom",
      "fas fa-brush",
      "fas fa-bus",
      "fas fa-calculator",
      "fas fa-calendar-alt",
      "fas fa-camera-retro",
      "fas fa-capsules",
      "fas fa-car",
      "fas fa-dumbbell",
      "fab fa-facebook",
      "fas fa-heart",
      "fas fa-weight",
      "fas fa-weight-hanging"
    ];

    return (
      <AddGoalPage className="dashboardBackground">
        <PoseGroup >
          <div key="form">
            <Form>
              <h1>Category:</h1>
              <button></button>
              <button></button>
              <button></button>
            </Form>
          </div>
        </PoseGroup>
        <DashNav />
      </AddGoalPage>
    );
  }
}

export default AddGoal;
