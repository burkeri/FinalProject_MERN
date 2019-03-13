import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";

import SocialNav from "../components_re/social/SocialNav";

import API from "../utils/API";
import "../css/index.css";

const AddPostForm = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export class AddPost extends Component {
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
          <Button onClick={this.handleSubmit} id="postSubmit">
            Submit
          </Button>
        </Link>
      );
    else
      submitButton = (
        <Button onClick={this.handleSubmit} disabled id="postSubmitD">
          Submit
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
                onClick={() => this.handleGoalChoice(goal.name)}
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
      <div className="socialBackground">
        <PoseGroup>
          <AddPostForm key="form" className="postForm">
            <h1 className="postTitle">Create a post:</h1>
            <Form>
              <FormGroup>
                <Input
                  type="textarea"
                  name="textarea"
                  id="postFormInput"
                  rows={6}
                  value={this.state.textarea}
                  onChange={this.handleInputChange}
                />
                <div className="postBtns">
                  <FormGroup>
                    <Button
                      id="postBtn"
                      onClick={() => this.handleAddChoice("goal")}
                    >
                      Add Goal
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    <Button
                      id="postBtn"
                      onClick={() => this.handleAddChoice("image")}
                    >
                      Add Image
                    </Button>
                  </FormGroup>
                  <FormGroup>
                    <Button id="postBtnData" disabled>
                      Add Data
                    </Button>
                  </FormGroup>
                </div>
              </FormGroup>
              {submitButton}
              <Link to="/socialfeed">
                <Button id="postSubmit">Cancel</Button>
              </Link>
            </Form>
          </AddPostForm>
        </PoseGroup>

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
        <SocialNav />
      </div>
    );
  }
}

export default AddPost;
