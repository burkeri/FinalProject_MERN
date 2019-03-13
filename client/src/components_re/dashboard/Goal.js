import React, { Component } from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import { Progress, Modal, Form, Input, Button } from "reactstrap";
import MaterialIcons from "material-icons-react";

import API from "../../utils/API";
import "../../css/index.css";

const GoalCard = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export class Goal extends Component {
  state = {
    goalID: "",
    goalProg: 0,
    goalNote: "",
    goalPic: "",
    enableModal: true,
    openModal: false
  };

  // updates form input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // opens modal
  toggleModal = () => {
    this.setState(prevState => ({
      openModal: !prevState.modal
    }));
  };

  // reset goal choice, closes modal
  closeModal = () => {
    this.setState(
      {
        goalID: "",
        goalProg: 0,
        goalNote: "",
        goalPic: ""
      },
      () => {
        this.toggleModal();
      }
    );
  };

  // selects goal to update
  handleUpdateChoice = (id, prog) => {
    this.setState({
      goalID: id,
      goalProg: prog
    });
  };

  // updates goal progress
  handleUpdateProgress = () => {
    const { goalID, goalProg, goalNote, goalPic } = this.state;

    const goalData = {
      progress: goalProg + 1,
      note: goalNote,
      picture: goalPic
    };

    API.updateGoal(goalID, goalData)
      // Update the goals state in App and close the modal
      .then(response => {
        this.props.getGoals(this.props.username);
        this.setState({ openModal: false });
      })
      .catch(err => console.log(err));
  };

  // deletes goal
  handleDeleteGoal = id => {
    API.deleteGoal(id)
      .then(response => this.props.getGoals(this.props.username))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.openModal} id="modal">
          <button className="closeButton" onClick={this.closeModal}>
            <MaterialIcons icon="close" id="closeIcon" />
          </button>
          <h1 className="modalTitle">Great job!</h1>
          <h3>You made progress!</h3>
          <br />
          <p>Why not make a note of the occasion?</p>
          <br />
          <Form id="input">
            <Input
              type="textarea"
              name="goalNote"
              placeholder="How you feel afterwards? Etc..."
              value={this.state.goalNote}
              onChange={this.handleInputChange}
              rows={4}
            />
          </Form>
          <button className="finishBtn" onClick={this.handleUpdateProgress}>
            Finish
          </button>
        </Modal>

        <GoalCard key={this.props.key} className="goalCard">
          <i className={this.props.icon} id="goalIcon" />
          <h3 className="goalTitle">{this.props.name}</h3>
          <button
            className="deleteGoal"
            onClick={() => this.handleDeleteGoal(this.props.id)}
          >
            <MaterialIcons id="deleteIcon" icon="delete" />
          </button>
          <h3 className="goalFr">
            {this.props.progress}/{this.props.frequency}
          </h3>
          <Progress value={this.props.progress} max={this.props.frequency} />
          <button
            className="goalBtn"
            onClick={() => {
              this.handleUpdateChoice(this.props.id, this.props.progress);
            }}
            onMouseUp={() => {
              this.toggleModal();
            }}
          >
            Finish
          </button>
          <Link to="/details">
            <button
              className="goalBtn"
              onClick={() => this.props.handleUserChoice(this.props.id)}
            >
              Edit
            </button>
          </Link>
          <div style={{ clear: "both" }} />
        </GoalCard>
      </div>
    );
  }
}

export default Goal;
