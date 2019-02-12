import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
// style
import "./dashboard.css";
// reactstrap components
import MaterialIcon from "material-icons-react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    Button,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    Progress
} from "reactstrap";

class Dashboard extends Component {
    /*state = {
        dropdownOpen: false,
    };

    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }*/

    handleDeleteBook = id => {
        // console.log(`Goal ID to delete: ${id}`);
        API.deleteGoal(id)
            .then(this.props.getGoals)
            .catch(err => console.log(err));
    };

    handleUpdateProgress = (id, prog) => {
        // console.log(`Goal ID to update: ${id}`);
        // console.log(`Goal's progress: ${prog}`);
        API.updateProgress(id, prog + 1)
            .then(this.props.getGoals)
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
                            <MaterialIcon
                                icon="account_circle"
                                id="profileIcon"
                            />
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
                                                onClick={() =>
                                                    this.props.handleUserChoice(
                                                        goal._id
                                                    )
                                                }
                                            >
                                                <i className={goal.icon} />
                                            </Button>
                                        </Link>
                                        {goal.name}
                                        <Button
                                            close
                                            color="danger"
                                            className="float-right"
                                            onClick={() =>
                                                this.handleDeleteBook(goal._id)
                                            }
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
                                    </div>
                                    <br />
                                    <Button
                                        id="finishGoal"
                                        onClick={() =>
                                            this.handleUpdateProgress(
                                                goal._id,
                                                goal.progress
                                            )
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
