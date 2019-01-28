import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import API from "../../utils/API";

class GoalForm extends Component {
  state = {
    category: "",
    name: "",
    icon: "",
    frequency: 0,
  };

  // updates the choice between mind/spirit/body
  handleChoice(choice) {
    // update the state
    this.setState({ category: choice });
  }

  // updates the values in the form inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // runs the code after the submit button is clicked
  handleSubmit = event => {
    event.preventDefault();
    const { category, name, icon, frequency } = this.state;

    console.log(
      `Goal name: ${name} \nCategory: ${category} \nIcon: ${icon} \nFrequency: ${frequency}`
    );

    // TODO: confirm data exists before creating goal
    // TODO: check that Goal name doesn't already exist
    // create the goal
    API.createGoal({
      userID: "test",
      category: category,
      name: name,
      icon: icon,
      frequency: parseInt(frequency)
    });

  };

  render() {
    return (
      <div>
        <p>What type of goal?</p>
        <ul>
          <li>
            <Button
              onClick={() => this.handleChoice("Spirit")}
              className="mb-2"
            >
              Spirit
            </Button>
          </li>
          <li>
            <Button onClick={() => this.handleChoice("Mind")} className="mb-2">
              Mind
            </Button>
          </li>
          <li>
            <Button onClick={() => this.handleChoice("Body")} className="mb-2">
              Body
            </Button>
          </li>
        </ul>
        <Form action="/dashboard">
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Goal name here..."
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="icon">Icon:</Label>
            <Input type="file" name="file" id="file" />
          </FormGroup>
          <FormGroup>
            <Label for="frequency">Frequency:</Label>
            <Input
              type="select"
              name="frequency"
              id="frequency"
              onChange={this.handleInputChange}
            >
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
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default GoalForm;
