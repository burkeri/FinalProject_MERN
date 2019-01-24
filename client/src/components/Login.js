import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export class Login extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="usernameLogin">Username</Label>
          <Input
            className="form-control"
            type="text"
            name="username"
            id="usernameLogin"
          />
        </FormGroup>
        <FormGroup>
          <Label for="passowrdLogin">Password</Label>
          <Input
            className="form-control"
            type="password"
            name="password"
            id="passwordLogin"
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

export default Login;
