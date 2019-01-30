import React, { Component } from "react";
import API from "../utils/API";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading, 
  ListGroupItemText
} from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      goals: [],
      username: "Test Username"
    };
  }

  componentDidMount() {
    this.getGoals();
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  getGoals = () => {
    API.getGoals()
      .then(res => {
        this.setState({
          goals: res.data
        });
      })
      .catch(err => console.log(err));
  };

  handleDeleteBook = (id) => {
    console.log(`Goal ID to delete: ${id}`);
    API.deleteGoal(id)
      .then(res => this.getGoals())
      .catch(err => console.log(err));
  }

  handleUpdateGoal = (id, prog) => {
    console.log(`Goal ID to update: ${id}`);
    console.log(`Goal's progress: ${prog}`);
    API.updateGoal(id, prog + 1)
    .then(res => this.getGoals())
    .catch(err => console.log(err));
  }

  render() {
    const { goals } = this.state;

    return (
      <Container className="bg-dark p-2">
        {/* Row for the dropdown menu */}
        <Row>
          <Col xs={{ size: "auto", offset: 10 }}>
            <Dropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
              className="mt-2"
            >
              <DropdownToggle className="bg-danger">=</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>App Name</DropdownItem>
                <DropdownItem>Edit Goal</DropdownItem>
                <DropdownItem>Stats</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/user/logout">Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        {/* Main Image and Name */}
        <Row>
          <Col>
            <img
              src="https://via.placeholder.com/100"
              className="img-fluid img-thumbnail mx-auto d-block"
              alt="User profile"
            />
            <p className="text-center text-white">{this.state.username}</p>
          </Col>
        </Row>

        {/* Social Ticker */}
        <Row>
          <Col>
            <Card inverse>
              <CardImg width="100%" height="150px" src="" alt="Card BG cap" />
              <CardImgOverlay>
                <CardTitle className="font-weight-bold">Another User</CardTitle>
                <hr />
                <CardText>
                  Another User completed this goal... I feel great after doing
                  this!
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>

        {/* Goal header and button */}
        <Row>
          <Col>
            <p className="text-center text-white">Goals:</p>
            <div className="text-center mb-2">
              <Button color="danger" href="/addgoalcreate">
                Add Goal
              </Button>
            </div>
          </Col>
        </Row>
        {/* Goal list */}
        <Row>
          <Col>
            {goals.length ? (
              <ListGroup>
                {goals.map(goal => 
                  <ListGroupItem key={goal._id}>
                    <ListGroupItemHeading>
                      {goal.name}
                      <Button 
                        color="danger" 
                        className="float-right"
                        onClick={() => this.handleDeleteBook(goal._id)}
                      >X</Button>
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Frequency: {goal.frequency} times per week
                      <br />
                      Progress: {(goal.progress / goal.frequency) * 100} %
                    </ListGroupItemText>
                    <div className="text-center mb-2">
                      <Button
                        color="success"
                        onClick={() => this.handleUpdateGoal(goal._id, goal.progress)}
                      >Finish</Button>
                    </div>
                  </ListGroupItem>
                )}
              </ListGroup>
            ) : (<h2 className="text-white">No goals...</h2>)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
