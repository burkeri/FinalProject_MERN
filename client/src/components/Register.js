import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import API from "../utils/API";

export class Register extends Component {
  state = {
    redirect: false,
    notValid: false,
    validEmail:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    formError: [],
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    dob: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, username, email, password, password2, dob, formError, validEmail } = this.state;
    let newUser = {};

    // all fields complete
    if(!name || !username || !email || !password || !password2 || !dob ) {
      formError.push("Please complete all fields.");
    }

    // name and username length check
    if(name.length <= 2) {
      formError.push("Name must be longer than 2 characters.");
    }
    else if(username.length <= 2) {
      formError.push("Username must be longer than 2 characters.")
    }
    else {
      newUser.name = name;
      newUser.username = username;
    }

    // email validation
    if(!validEmail.test(email)) {
      formError.push("Please enter a valid email address.")
    }
    else {
      newUser.email = email;
    }

    // password length and matching password
    if (password.length < 6) {
      formError.push("Password must be longer than 6 characters.")
    }
    else if (password !== password2) {
      formError.push("Passwords do not match.")
    }
    else {
      newUser.password = password;
    }

    if (dob.length > 0) {
      // set date of birth
      newUser.dob = dob;
    }

    console.log(formError);
    
    if (Object.keys(newUser).length === 5) {
      API.registerUser(newUser);
    };
    
  }

  clearForm = () => {
    const formError = this.state.formError;
    this.setState({ formError: [] });
    console.log("cleared");
    console.log(formError);
  }

  handleFormSumbit = event => {
    event.preventDefault();
    this.validateForm();
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
