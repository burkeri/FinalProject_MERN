import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// Components
import Avatar from "../components_re/dashboard/Avatar";
import GoalContainer from "../components_re/dashboard/GoalContainer";
import DashNav from "../components_re/dashboard/DashNav";

import "../css/index.css";

export class Dashboard extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div className="dashboardBackground">
        <Avatar onClick={this.toggleModal} />
        <GoalContainer
          username={this.props.username}
          goals={this.props.goals}
          getGoals={this.props.getGoals}
          handleUserChoice={this.props.handleUserChoice}
          userChoiceID={this.props.userChoiceID}
          userChoiceGoal={this.props.userChoiceGoal}
        />
        <DashNav />

        {/* Modal Content */}
        <Modal isOpen={this.state.modal}>
          <ModalHeader>Great job! You made progress!</ModalHeader>
          <ModalBody>
            <h1>BODY</h1>
          </ModalBody>
          <ModalFooter>
            <Button>Finish</Button> <Button>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
