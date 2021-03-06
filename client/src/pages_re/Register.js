import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import axios from "axios";

import API from "../utils/API";
import "../css/index.css";

export class Register extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    dob: "",
    errors: [],
    registered: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSumbit = event => {
    event.preventDefault();
    // this.setState({ errors: [""] });
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      dob: this.state.dob
    };

    axios.post("/user/register", newUser).then(({ data }) => {
      if (data[0].msg === "You are now registered! Please login.") {
        this.setState({
          registered: data
        });
      } else {
        this.setState({
          errors: data
        });
      }
    });
  };

  render() {
    const { errors, registered } = this.state;

    return (
      <Container>
        <Row>
          <Col md="6" xs="10" id="formContainer">
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

              {errors.length > 0 &&
                errors.map(fail => (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {fail.msg}
                  </div>
                ))}

              {registered &&
                registered.map(success => (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {success.msg}
                  </div>
                ))}

              <Button
                id="formButton"
                type="submit"
                onClick={this.handleFormSumbit}
              >
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
