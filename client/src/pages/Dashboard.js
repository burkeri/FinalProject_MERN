import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import MaterialIcon from "material-icons-react";

// style
import "./dashboard.css";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Form,
  Label,
  Button,
  Input,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class Dashboard extends Component {
  state = {
    modal: false,
    goalID: "",
    goalProg: 0,
    goalNote: "",
    goalPic: ""
  };

  // Opens the modal
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  // Will reset the user goal choice state and close the modal
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

  // Updates the values in the form inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Updates the state of the user's goal choice to update
  // and brings up the modal to add a note or just finish
  handleUpdateChoice = (id, prog) => {
    this.setState(
      {
        goalID: id,
        goalProg: prog
      },
      () => {
        this.toggleModal();
      }
    );
  };

  // Updates the progress and adds a note to the DB
  // Then refresh the goals
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
        this.toggleModal();
      })
      .catch(err => console.log(err));
  };

  // Deletes the chosen goal from the DB and refreshes the goals
  handleDeleteBook = id => {
    // console.log(`Goal ID to delete: ${id}`);
    API.deleteGoal(id)
      .then(response => this.props.getGoals(this.props.username))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="dashBackground">
        {/* Row for the dropdown menu */}
        {/* <Row>
                    <Col xs={{ size: "auto", offset: 10 }}>
                        <Dropdown
                            isOpen={this.state.dropdownOpen}
                            toggle={this.toggle}
                            className="mt-2"
                        >
                            <DropdownToggle className="bg-danger">
                                =
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem header>App Name</DropdownItem>
                                <DropdownItem>Edit Goal</DropdownItem>
                                <DropdownItem>Stats</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/user/logout">
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row> */}

        {/* Main Image and Name */}
        <Row className="header">
          <Col>
            <h1 className="text-center" id="welcomeUser">
              Hello, {this.props.username}
            </h1>
            <div id="profilePic">
              <MaterialIcon icon="account_circle" id="profileIcon" />
            </div>
          </Col>
        </Row>

        {/* Social Ticker */}
        <Row>
          <Col>
            <Card id="ticker">
              <CardBody>
                <CardText>
                  {/* <h3 id="text">
                                        "If you want to accomplish the goals of
                                        your life, you have to begin with the
                                        spirit."
                                    </h3>
                                    <br />
                                    <hr />
                                    <br />
                                    <h3>Oprah Winfrey</h3> */}
                  <Link to="/socialfeed">
                    <Button>Social!</Button>
                  </Link>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Goal header and button */}
        <Row id="goalHeader">
          <Col>
            <p className="text-center">Goals:</p>
            <hr />
            <div className="text-center mb-2">
              <Link to="/addgoalcreate">
                <Button id="addGoal">Add Goal</Button>
              </Link>
            </div>
          </Col>
        </Row>

        {/* Goal list */}
        <Row>
          <Col>
            <ListGroup>
              {this.props.goals.map(goal => (
                <ListGroupItem key={goal._id} id="goalItem">
                  <ListGroupItemHeading>
                    <Link to="/details">
                      <Button
                        id="goalIcon"
                        onClick={() => this.props.handleUserChoice(goal._id)}
                      >
                        <i className={goal.icon} />
                      </Button>
                    </Link>
                    {goal.name}
                    <Button
                      close
                      color="danger"
                      className="float-right"
                      onClick={() => this.handleDeleteBook(goal._id)}
                    />
                  </ListGroupItemHeading>
                  <div>
                    <p>Frequency: {goal.frequency} times per week</p>
                    <p>Description: {goal.description}</p>
                    <p>Progress:</p>
                    <div className="text-center">
                      {goal.progress} of {goal.frequency}
                    </div>
                    <Progress
                      id="progressBar"
                      value={goal.progress}
                      max={goal.frequency}
                    />
                    <br />
                    {goal.notes.length > 0 && (
                      <div>
                        <p>Notes:</p>
                        <ul>
                          {goal.notes.map(note => (
                            <li key={note._id}>
                              {note.createdAt}: {note.body}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <br />
                  <Button
                    id="finishGoal"
                    onClick={() =>
                      this.handleUpdateChoice(goal._id, goal.progress)
                    }
                  >
                    Finish
                  </Button>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>

        {/* Modal content */}
        <Modal isOpen={this.state.modal}>
          <ModalHeader>Great job! You made progress!</ModalHeader>
          <ModalBody>
            <Form encType="multipart/form-data">
              <Label for="goalNote">
                Why not make a note of the occasion? (optional)
              </Label>
              <Input
                id="goalNote"
                name="goalNote"
                type="textarea"
                placeholder="How you feel afterwards? Etc..."
                value={this.state.goalNote}
                onChange={this.handleInputChange}
                rows={4}
              />
              {/* <input
                id="goalPic"
                name="goalPic"
                type="file"
                value={this.state.goalPic}
                onChange={this.handleInputChange}
              /> */}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button id="finishGoal" onClick={this.handleUpdateProgress}>
              Finish
            </Button>{" "}
            <Button color="warning" onClick={this.closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default Dashboard;
