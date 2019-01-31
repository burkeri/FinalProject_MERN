import React, { Component } from "react";
import API from "../utils/API";
import "./dashboard.css";
import MaterialIcon from "material-icons-react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  // CardTitle,
  // CardImg,
  // CardImgOverlay,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading, 
  ListGroupItemText,
  Progress
} from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      goals: [],
      username: "Hello, mangoman"
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

  handleDeleteBook = id => {
    // console.log(`Goal ID to delete: ${id}`);
    API.deleteGoal(id)
      .then(res => this.getGoals())
      .catch(err => console.log(err));
  };

  handleUpdateGoal = (id, prog) => {
    console.log(`Goal ID to update: ${id}`);
    console.log(`Goal's progress: ${prog}`);
    API.updateGoal(id, prog + 1)
      .then(res => this.getGoals())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="allBackground">

        {/* <Row>
          <Col>
          Row for the dropdown menu
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
          </Row> */}

        {/* Main Image and Name */}
        <Row className="header">
          <Col>
            <h1 className="text-center" id="welcomeUser">
              {this.state.username}
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
                  <h3 id="text">
                    "If you want to accomplish the goals of your life, you have to
                    begin with the spirit."
                    <br />
                    <hr />
                    <br />
                    Oprah Winfrey
                  </h3>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Goal header and button */}
        <Row id="goalHeader">
          <Col>
            <p className="text-center">Goals:</p>
            <hr></hr>
            <div className="text-center mb-2">
              <Button id="addGoal" href="/addgoalcreate">
                Add Goal
              </Button>
            </div>
          </Col>
        </Row>
      
        {/* Goal list */}
        <Row>
          <Col>
            <ListGroup>
              {this.state.goals.map(goal => (
                <ListGroupItem key={goal._id} id="goalItem">
                  <ListGroupItemHeading>
                    <Button id="goalIcon">
                      <i className={goal.icon} />
                    </Button>
                    {goal.name}
                    <Button
                      close
                      color="danger"
                      className="float-right"
                      onClick={() => this.handleDeleteBook(goal._id)}
                    />
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    Frequency: {goal.frequency} times per week
                    <br />
                    <span>Progress:</span>
                    <div className="text-center">{goal.progress} of {goal.frequency}</div>
                    <Progress id="progressBar" value={goal.progress} max={goal.frequency} />                  
                  </ListGroupItemText>
                  <Button
                      id="finishGoal"
                      onClick={() =>
                        this.handleUpdateGoal(goal._id, goal.progress)
                      }
                    >
                      Finish
                    </Button>

                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
