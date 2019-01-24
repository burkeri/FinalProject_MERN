import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export class Register extends Component {
  state = {};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSumbit = event => {
    event.preventDefault();
    console.log(this.state);
   
  };

  render() {
    return (
      <Form >
        <FormGroup>
          <Label for="nameReg">Name</Label>
          <Input
            className="form-control"
            type="text"
            name="name"
            id="nameReg"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="usernameReg">Username</Label>
          <Input
            className="form-control"
            type="text"
            name="username"
            id="usernameReg"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="emailReg">Email</Label>
          <Input
            className="form-control"
            type="email"
            name="email"
            id="emailReg"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dobReg">Date of Birth</Label>
          <Input
            className="form-control"
            type="date"
            name="dob"
            id="dobReg"
            value={this.state.dob}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="passwordReg">Password</Label>
          <Input
            className="form-control"
            type="password"
            name="password"
            id="passwordReg"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPasswordReg">Confirm Password</Label>
          <Input
            className="form-control"
            type="password"
            name="password2"
            id="confirmPasswordReg"
            value={this.state.password2}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <Button 
          type="submit"
          onClick={this.handleFormSumbit}
          >
          Register
        </Button>
      </Form>
    );
  }
}

export default Register;
