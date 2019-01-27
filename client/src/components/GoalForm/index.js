import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class GoalForm extends Component {
  state = {
    category: "",
    name: "",
    icon: "",
    frequency: 0,
    formErrors: { category: "", name: "", frequency: 0 },
    categoryValid: false,
    nameValid: false,
    frequencyValid: false,
    formValid: false
  };

  handleChoice(choice) {
    // update the state
    this.setState({ category: choice });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { category, name, icon, frequency } = this.state;

    console.log(
      `Goal name: ${name} \nCategory: ${category} \nIcon: ${icon} \nFrequency: ${frequency}`
    );

    // confirm data exists before creating goal
    // check that Goal name doesn't already exist
    // create the goal
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
        <Form>
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
              onChange={this.handleChange}
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
