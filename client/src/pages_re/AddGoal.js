import React, { Component } from "react";
import { Link } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import { Form, FormGroup, FormText, Label, Input } from "reactstrap";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css";

import DashNav from "../components_re/dashboard/DashNav";

import API from "../utils/API";
import "../css/index.css";

const CategorySelect = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const AddGoalForm = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export class AddGoal extends Component {
  state = {
    userChoiceID: this.props.userChoiceID || "",
    username: this.props.username || "",
    category: this.props.userChoiceGoal.category || "",
    name: this.props.userChoiceGoal.name || "",
    icon: this.props.userChoiceGoal.icon || "",
    frequency: this.props.userChoiceGoal.frequency.toString() || "0",
    description: this.props.userChoiceGoal.description || "",
    selectCat: true,
    showForm: false
  };

  // updates the values in the form inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // updates the choice between mind/spirit/body
  handleChoice = choice => {
    this.setState({
      category: choice,
      selectCat: false,
      showForm: true
    });
  };

  // select goal icon
  handleIconChange = icon => {
    this.setState({ icon: icon });
  };

  // adds new goal or edits existing goal
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
        <PoseGroup>
          {this.state.selectCat && (
            <CategorySelect key="btn" className="catBtnBackground">
              <h1 className="catText">Category:</h1>
              <button
                className="catBtn"
                id="spirit"
                onClick={() => this.handleChoice("Spirit")}
              >
                Spirit
              </button>
              <button
                className="catBtn"
                onClick={() => this.handleChoice("Mind")}
              >
                Mind
              </button>
              <button
                className="catBtn"
                onClick={() => this.handleChoice("Body")}
              >
                Body
              </button>
            </CategorySelect>
          )}

          {this.state.showForm && (
            <AddGoalForm key="form" className="goalForm">
              <h1 className="formLabel" id="catLabel">
                {this.state.category}
              </h1>
              <Form action="/dashboard">
                <FormGroup>
                  <Label for="name" className="formLabel">
                    Name:
                  </Label>
                  <Input
                    id="formInput"
                    type="text"
                    name="name"
                    placeholder="Goal name here..."
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="icon" className="formLabel">
                    Icon:
                  </Label>
                  <FontIconPicker
                    icons={iconPack}
                    theme="indigo"
                    onChange={this.handleIconChange}
                    value={this.state.icon}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="frequency" className="formLabel">
                    Frequency:
                  </Label>
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
                  <FormText color="white">(per week)</FormText>
                </FormGroup>

                {this.state.userChoiceID.length > 0 && (
                  <FormGroup>
                    <Label for="description" className="formLabel">
                      Details/ Description:
                    </Label>
                    <Input
                      id="formInput, description"
                      type="textarea"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                )}
              </Form>
              <Link to="/dashboard">
                <button className="createGoalBtn" onClick={this.handleSubmit}>
                  Submit
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="createGoalBtn">Cancel</button>
              </Link>
            </AddGoalForm>
          )}
        </PoseGroup>

        <DashNav />
      </div>
    );
  }
}

export default AddGoal;
