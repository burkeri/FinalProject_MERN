import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class GoalForm extends Component {
  state = {
    name: "",
    icon: "",
    frequency: 0
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(`${name} state changed to ${value}`);
  };

  render() {
    // console.log(this.props);

    return (
      <Form>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Goal name here..."
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="icon">Icon:</Label>
          <Input 
            type="file" 
            name="file" 
            id="file" 
          />
        </FormGroup>
        <FormGroup>
          <Label for="frequency">Frequency:</Label>
          <Input 
            type="select" 
            name="frequency" 
            id="frequency"
            value={this.state.frequency}
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
          <FormText color="muted">
            (per week)
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default GoalForm;
