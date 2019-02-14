import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";

// style
import "./App.css";

// components
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import AddGoalCreate from "./pages/AddGoalCreate";

class App extends Component {
    state = {
        userChoiceID: "",
        username: "Mangoman42",
        goals: []
    };

    componentDidMount() {
        this.getGoals();
        console.log(this.state);
        console.log(this.props);  
    }

    getGoals = () => {
        API.getGoals()
            .then(res => {
                this.setState(
                    {
                        goals: res.data
                    },
                    () => {
                        console.log(this.state.goals);
                        console.log(`Goals state updated.`);
                    }
                );
            })
            .catch(err => console.log(err));
    };

    handleUserChoice = id => {
        this.setState({ userChoiceID: id }, () => {
            console.log(`State changed to: ${this.state.userChoiceID}`);
        });
    };

    render() {

        return (
            <Router>
                <div>
                    <Switch>
                        <Route 
                            exact path="/user/login" 
                            component={Login} 
                        />
                        <Route
                            exact path="/user/register"
                            component={Register}
                        />
                        <Route 
                            exact path="/user/profile"
                            component={Profile} 
                        />
                        <Route
                            exact path="/addgoalcreate"
                            component={AddGoalCreate}
                        />
                        <Route
                            path="/dashboard"
                            render={() => (
                                <Dashboard
                                    onClick={this.handleUserChoice}
                                    username={this.state.username}
                                    goals={this.state.goals}
                                    getGoals={this.getGoals}
                                    handleUserChoice={this.handleUserChoice}
                                />
                            )}
                        />
                        <Route 
                            exact path="/details" 
                            render={() => (
                                <Details
                                    userChoiceID={this.state.userChoiceID}
                                />
                            )}
                        />
                        {/* Landing page and 404 */}
                        <Route exact path="/" component={Landing} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
