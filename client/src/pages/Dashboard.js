import React, { Component } from "react";
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
  Button
} from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      goals: []
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
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
                <DropdownItem>Logout</DropdownItem>
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
              <CardImg
                width="100%"
                height="150px"
                src=""
                alt="Card BG cap"
              />
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
        <Row>{/* content */}</Row>
      </Container>
    );
  }
}

export default Dashboard;
