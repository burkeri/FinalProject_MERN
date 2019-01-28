import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from 'axios';

export class Register extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    dob: "",
    errors: [""]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSumbit = event => {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      dob: this.state.dob
    }
    axios.post("/user/register", newUser)
      .then(({ data }) => this.setState({
        errors: data
      }));
  };

  render() {
    return (
      <Form action="/user/register" method="POST">
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

        {this.state.errors.map((error) => <span>{error.msg}</span>)}


        <Button 
          type="submit"
          disabled={this.state.notValid}
          onClick={this.handleFormSumbit}
          >
          Register
        </Button>
      </Form>
    );
  }
}

export default Register;
