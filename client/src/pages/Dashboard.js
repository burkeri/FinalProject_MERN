import React, { Component } from "react";
import API from "../utils/API";
import "./dashboard.css";
import MaterialIcon from 'material-icons-react';
import {
  Container,
  Row,
  Col,
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

  handleDeleteBook = (id) => {
    console.log(`Goal ID to delete: ${id}`);
    // API.deleteGoal()
    //   .then(res => {
    //     this.setState({
    //       goals: res.data
    //     });
    //     getGoals();
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    const { goals } = this.state;

    return (
      <Container className="allBackground">
        <Row>
          <Col>

          {/* Row for the dropdown menu
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
              <h1 className="text-center" id="welcomeUser">{this.state.username}</h1>
              <div id="profilePic">
                <MaterialIcon icon="account_circle" id="profileIcon"/>
              </div>
            </Col>
          </Row>

          {/* Social Ticker */}
          <Row >
            <Col>
              <Card id="ticker">
                  {/* <CardTitle className="font-weight-bold">Another User</CardTitle> */}
                  <CardText>
                    <h3 id="text">
                    "If you want to accomplish the goals of your 
                    life, you have to begin with the spirit."
                    <br></br>
                    <hr></hr>
                    <br></br>
                    Oprah Winfrey 
                    </h3>
                  </CardText>
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
                        Progress: {(goal.progress / goal.frequency)} %
                      </ListGroupItemText>
                    </ListGroupItem>
                  )}
                </ListGroup>
              ) : (<h2 className="text-white">No goals...</h2>)}
            </Col>
          </Row>


          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Dashboard;
