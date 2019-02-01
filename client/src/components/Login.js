import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./login.css";

export class Login extends Component {
  render() {
    return (
      <Container id="loginBackground">
        <Row>
          <Col md="6" xs="10" id="formContainer">
            <Form action="/user/login" method="POST">
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
                <Label for="passwordLogin">Password</Label>
                <Input
                  className="form-control"
                  type="password"
                  name="password"
                  id="passwordLogin"
                />
              </FormGroup>
              <Button id="formButton" type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
