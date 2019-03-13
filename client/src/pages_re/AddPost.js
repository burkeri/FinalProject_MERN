import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem
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

  // handles form input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // opens modal
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
          <button onClick={this.handleSubmit} className="postSubmit">
            Submit
          </button>
        </Link>
      );
    else
      submitButton = (
        <button onClick={this.handleSubmit} disabled className="postSubmitD">
          Submit
        </button>
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
              <button
                onClick={() => this.handleGoalChoice(goal.name)}
                color="link"
                block
              >
                {goal.name}
              </button>
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
                  rows={4}
                  value={this.state.textarea}
                  onChange={this.handleInputChange}
                />
                <div className="postBtns">
                  <FormGroup>
                    <button className="postBtn" id="postGoal">
                      Add Goal
                    </button>
                    <h3 className="postInfo">Goal Name</h3>
                  </FormGroup>
                  <FormGroup>
                    <button className="postBtn" id="postData">
                      Add Data
                    </button>
                    <h3 className="postInfo">Data</h3>
                  </FormGroup>
                  <FormGroup>
                    <button className="postBtn">Add Image</button>
                    <h3>Image</h3>
                  </FormGroup>
                </div>
              </FormGroup>
              {submitButton}
              <Link to="/socialfeed">
                <button className="postSubmit">Cancel</button>
              </Link>
            </Form>
          </AddPostForm>
        </PoseGroup>
        <SocialNav />
      </div>
    );
  }
}

export default AddPost;
