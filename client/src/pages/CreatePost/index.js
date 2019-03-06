import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class CreatePost extends Component {
  state = {
    modal: false,
    addChoice: "",
    username: this.props.username || "user",
    textarea: "",
    goalChoice: "",
    imageURL: "",
    data: ""
  };

  // Opens the modal
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleAddChoice = add => {
    this.setState({ addChoice: add }, () => this.toggleModal());
  };

  handleGoalChoice = goal => {
    this.setState({ goalChoice: goal }, () => this.toggleModal());
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleUploadFile = event => {
    this.setState({ imageURL: event.target.files[0] }, () =>
      this.toggleModal()
    );
  };

  handleSubmit = event => {
    // console.log(this.state.textarea);
    // console.log(this.state.imageURL);

    // create the form data to send
    const userData = new FormData();
    userData.append("file", this.state.imageURL);
    userData.append("userID", this.state.username);
    userData.append("goalID", this.state.goalChoice);
    userData.append("text", this.state.textarea);

    API.createPost(userData).then(response => this.props.getPosts());
  };

  render() {
    const addChoice = this.state.addChoice;
    let submitButton;
    let content;

    // Conditional render for Create Post button
    if (this.state.textarea && this.state.goalChoice && this.state.imageURL)
      submitButton = (
        <Link to="/socialfeed">
          <Button onClick={this.handleSubmit}>Create Post</Button>
        </Link>
      );
    else
      submitButton = (
        <Button onClick={this.handleSubmit} disabled>
          Create Post
        </Button>
      );

    // Conditional render for Modal
    if (addChoice === "image") {
      content = (
        <Input
          type="file"
          name="image"
          id="image"
          onChange={this.handleUploadFile}
        />
      );
    } else if (addChoice === "goal") {
      const goals = this.props.goals;
      content = (
        <ListGroup>
          {goals.map(goal => (
            <ListGroupItem key={goal._id}>
              <Button
                onClick={() => this.handleGoalChoice(goal._id)}
                color="link"
                block
              >
                {goal.name}
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    }

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
                <Button onClick={() => this.handleAddChoice("goal")}>+</Button>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="image">Add Image</Label>
                <br />
                <Button onClick={() => this.handleAddChoice("image")}>+</Button>
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
          {submitButton}
        </Form>
        <br />

        {/* Modal content */}
        <Modal isOpen={this.state.modal}>
          <ModalHeader>Add a(n) {addChoice}:</ModalHeader>
          <ModalBody>{content}</ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default CreatePost;
