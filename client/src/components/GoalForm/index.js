import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import API from "../../utils/API";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css";
import "./createGoalForm.css";

class GoalForm extends Component {
    state = {
        userChoiceID: this.props.userChoiceID || "",
        username: this.props.username || "",
        category: this.props.userChoiceGoal.category || "",
        name: this.props.userChoiceGoal.name || "",
        icon: this.props.userChoiceGoal.icon || "",
        frequency: this.props.userChoiceGoal.frequency.toString() || "0",
        description: this.props.userChoiceGoal.description || ""
    };

    componentWillMount() {
        // console.log(`Goal form props:`);
        // console.log(this.props);
        console.log(`Goal form state:`);
        console.log(this.state);
    }

    // updates the choice between mind/spirit/body
    handleChoice = choice => {
        // update the state
        this.setState({ category: choice });
    };

    // updates the values in the form inputs
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleIconChange = icon => {
        // console.log(`Current icon: ${this.state.icon}`);
        // console.log(`Selected icon: ${icon}`);
        this.setState({ icon: icon });
    };

    // runs the code after the submit button is clicked
    handleSubmit = event => {
        // event.preventDefault();
        const {
            userChoiceID,
            category,
            name,
            icon,
            frequency,
            description,
            username
        } = this.state;

        console.log(
            `User ID: ${username} \nGoal name: ${name} \nCategory: ${category} \nIcon: ${icon} \nFrequency: ${frequency} \nDescription: ${description}`
        );

        const newGoal = {
            userID: username,
            category: category,
            name: name,
            icon: icon,
            frequency: parseInt(frequency),
            description: description
        };

        this.state.userChoiceID.length > 0
            ? API.updateGoal(userChoiceID, newGoal).then(this.props.getGoals()).catch(err => console.log(err))
            : API.createGoal(newGoal).then(this.props.getGoals()).catch(err => console.log(err))
    };

    render() {
        const iconPack = [
            "far fa-angry",
            "fas fa-archive",
            "fas fa-ban",
            "fas fa-baseball-ball",
            "fas fa-bed",
            "fas fa-beer",
            "fas fa-bell",
            "fas fa-bible",
            "fas fa-bicycle",
            "fas fa-bone",
            "fas fa-book",
            "fas fa-brain",
            "fas fa-bread-slice",
            "fas fa-broom",
            "fas fa-brush",
            "fas fa-bus",
            "fas fa-calculator",
            "fas fa-calendar-alt",
            "fas fa-camera-retro",
            "fas fa-capsules",
            "fas fa-car",
            "fas fa-dumbbell",
            "fab fa-facebook",
            "fas fa-heart",
            "fas fa-weight",
            "fas fa-weight-hanging"
        ];
        return (
            <div id="createForm">
                {/* Button choice for type of goal */}
                <p>What type of goal?</p>
                <Button
                    id="catBtn"
                    onClick={() => this.handleChoice("Spirit")}
                    className="mb-2"
                >
                    Spirit
                </Button>
                <Button
                    id="catBtn"
                    onClick={() => this.handleChoice("Mind")}
                    className="mb-2"
                >
                    Mind
                </Button>
                <Button
                    id="catBtn"
                    onClick={() => this.handleChoice("Body")}
                    className="mb-2"
                >
                    Body
                </Button>
                <Form action="/dashboard">
                    {/* Input for goal name */}
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Goal name here..."
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </FormGroup>
                    {/* Input for icon */}
                    <FormGroup>
                        <Label for="icon">Icon:</Label>
                        <FontIconPicker
                            icons={iconPack}
                            theme="red"
                            renderUsing="class"
                            onChange={this.handleIconChange}
                            value={this.state.icon}
                            closeOnSelect={false}
                            isMulti={false}
                        />
                    </FormGroup>
                    {/* Input for frequency */}
                    <FormGroup>
                        <Label for="frequency">Frequency:</Label>
                        <Input
                            type="select"
                            name="frequency"
                            id="frequency"
                            value={this.state.frequency}
                            onChange={this.handleInputChange}
                        >
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </Input>
                        <FormText color="muted">(per week)</FormText>
                    </FormGroup>
                    {/* Conditional Description textarea shows only if there's a userChoiceID */}
                    {this.state.userChoiceID.length > 0 && (
                        <FormGroup>
                            <Label for="description">Details/ Description:</Label>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                value={this.state.description}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                    )}
                    <Link to="/dashboard">
                        <Button 
                            id="createBtn" 
                            onClick={this.handleSubmit}
                        >
                            Submit
                        </Button>
                    </Link>
                </Form>
            </div>
        );
    }
}

export default GoalForm;
