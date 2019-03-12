import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { Form, FormGroup, FormText, Label, Input } from "reactstrap";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css";

import DashNav from "../components_re/dashboard/DashNav";

import API from "../utils/API";
import "../css/index.css";

const CategorySelect = posed.div({});
const AddGoalForm = posed.div({});
const CategoryBtn = posed.button({});

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
    this.setState({ category: choice });
  };

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
          <CategorySelect key="btn">
            <h1>Category:</h1>
            <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn />
          </CategorySelect>

          <AddGoalForm key="form">
            <Form action="/dashbaord">
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Goal name here..."
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="icon">Icon:</Label>
                <FontIconPicker
                  icons={iconPack}
                  theme="red"
                  renderUsing="class"
                  onChange={this.handleIconChange}
                  value={this.state.icon}
                  closeOnSelect={false}
                  isMulti={false}
                />
                </FormGroup>
                <FormGroup>
                  <Label for="frequency">Frequency:</Label>
                  <Input
                    type="select"
                    name="frequency"
                    id="frequency"
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
                  <FormText color="muted">(per week)</FormText>
                </FormGroup>

                {this.state.userChoiceID.length > 0 && (
                  <FormGroup>
                    <Label for="description">Details/ Description:</Label>
                      <Input
                        type="textarea"
                        name="description"
                        id="description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                      />
                  </FormGroup>
                )}
            </Form>
          </AddGoalForm>
        </PoseGroup>

        <DashNav />
      </div>
    );
  }
}

export default AddGoal;
