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
  ListGroupItem
} from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      goals: [],
      username: ""
    };
  }

  componentDidMount() {
    this.getGoals();
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

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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
            <p className="text-center text-white">Username</p>
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
            <div className="text-center">
              <Button color="danger" href="/addgoalcreate">
                Add Goal
              </Button>
            </div>
          </Col>
        </Row>
        {/* Goal list */}
        <Row>
          <Col>
            <ListGroup>
              {/* {this.state.goals} */}
              {goals.length > 0 &&
                goals.map(goal => (
                  <Card>
                    <CardTitle>{goal.name}</CardTitle>
                    <CardText>
                      {goal.category}
                      {goal.frequency}
                      {goal.progress}
                    </CardText>
                  </Card>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
