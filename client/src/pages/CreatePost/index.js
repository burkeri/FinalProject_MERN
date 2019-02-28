import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
// import navbar here
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

class CreatePost extends Component {
  state = {
    username: "Test User",
    textarea: "",
    goal: [],
    imageURL: "https://placeimg.com/320/320/animals",
    data: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleUploadFile = event => {
    this.setState({ imageURL: event.target.files[0] }, () =>
      console.log(this.state.imageURL)
    );
  };

  handleSubmit = event => {
    // console.log(this.state.textarea);
    // console.log(this.state.imageURL);

    // create the form data to send
    const userData = new FormData();
    userData.append("file", this.state.imageURL);
    userData.append("name", this.state.username);
    userData.append("description", this.state.textarea);

    API.createPost(userData);
  };

  render() {
    return (
      <Container className="bg-light">
        {/* <ReactUploadImage /> */}
        <h1>Create a Post:</h1>
        <Form>
          <Row form>
            <Col>
              <FormGroup>
                <Label for="textarea">What would you like to share?</Label>
                <Input
                  type="textarea"
                  name="textarea"
                  id="textarea"
                  rows={4}
                  value={this.state.textarea}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col>
              <FormGroup>
                <Label for="file">Add Goal</Label>
                <br />
                <Button disabled>+</Button>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="image">Add Image</Label>
                <Input
                  type="file"
                  name="image"
                  id="image"
                  onChange={this.handleUploadFile}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="data">Add Data</Label>
                <br />
                <Button disabled>+</Button>
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={this.handleSubmit}>Create Post</Button>
        </Form>
        <br />
      </Container>
    );
  }
}

export default CreatePost;
