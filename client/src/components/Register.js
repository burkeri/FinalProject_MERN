import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export class Register extends Component {
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
          />
        </FormGroup>
        <FormGroup>
          <Label for="usernameReg">Username</Label>
          <Input
            className="form-control"
            type="text"
            name="username"
            id="usernameReg"
          />
        </FormGroup>
        <FormGroup>
          <Label for="emailReg">Email</Label>
          <Input
            className="form-control"
            type="email"
            name="email"
            id="emailReg"
          />
        </FormGroup>
        <FormGroup>
          <Label for="dobReg">Date of Birth</Label>
          <Input
            className="form-control"
            type="date"
            name="date"
            id="dobReg"
          />
        </FormGroup>
        <FormGroup>
          <Label for="passwordReg">Password</Label>
          <Input
            className="form-control"
            type="password"
            name="password"
            id="passwordReg"
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPasswordReg">Confirm Password</Label>
          <Input
            className="form-control"
            type="password"
            name="password"
            id="confirmPasswordReg"
          />
        </FormGroup>
        <Button type="submit">Register</Button>
      </Form>
    );
  }
}

export default Register;
