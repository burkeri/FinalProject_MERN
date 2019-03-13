import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "reactstrap";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css";

import API from "../utils/API";
import "../css/index.css";

import DashNav from "../components_re/dashboard/DashNav";

export class EditGoal extends Component {
  state = {
    userChoiceID: this.props.userChoiceID,
    username: this.props.username,
    category: this.props.userChoiceGoal.category,
    name: this.props.userChoiceGoal.name,
    icon: this.props.userChoiceGoal.icon,
    frequency: this.props.userChoiceGoal.frequency.toString(),
    description: this.props.userChoiceGoal.description || ""
  };

  // updates the choice between mind/spirit/body
  handleChoice = choice => {
    // update the state
    this.setState({ category: choice });
  };

  // updates the values in the form inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleIconChange = icon => {
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
      <div className="dashboardBackground">
        <Form className="editGoalForm">
          <h1 className="goalEditTitle">Name:</h1>
          <Input
            id="formInput"
            type="text"
            name="name"
            placeholder={this.state.name}
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <h1 className="goalEditTitle">Category: {this.state.category}</h1>
          <Button id="editCatBtn" onClick={() => this.handleChoice("Spirit")}>Spirit</Button>
          <Button id="editCatBtn" onClick={() => this.handleChoice("Mind")}>Mind</Button>
          <Button id="editCatBtn" onClick={() => this.handleChoice("Body")}>Body</Button>
          <h1 className="goalEditTitle">Frequency:</h1>
          <Input
            id="formInput"
            type="select"
            name="frequency"
            value={this.state.frequency}
            onChange={this.handleInputChange}
          >
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </Input>
          <h1 className="goalEditTitle">Icon:</h1>
          <FontIconPicker
            icons={iconPack}
            theme="indigo"
            renderUsing="class"
            onChange={this.handleIconChange}
            value={this.state.icon}
            closeOnSelect={false}
            isMulti={false}
          />
            <h1 className="goalEditTitle">Description</h1>
            <Input
              type="textarea"
              name="description"
              id="formInput"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          <Link to="/dashboard">
            <button className="createGoalBtn" onClick={this.handleSubmit}>
              Submit
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="createGoalBtn">Cancel</button>
          </Link>
        </Form>
        <DashNav />
      </div>
    );
  }
}

export default EditGoal;
