import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";

// style
import "./App.css";

// components and pages
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import AddGoalCreate from "./pages/AddGoalCreate";
import SocialFeed from "./pages/SocialFeed";
import CreatePost from "./pages/CreatePost";
import Test from "./pages/Test.js";

class App extends Component {
  state = {
    userChoiceID: "",
    userChoiceGoal: {
      name: "",
      icon: "",
      frequency: "",
      description: ""
    },
    username: "user",
    goals: [],
    testObj: {}
  };

  componentDidMount() {
    this.getGoals(this.state.username);
    this.setUsername();
  }

  setUsername = () => {
    API.currentUsername().then(res => {
      this.setState({
        username: res
      });
    });
  };

  getGoals = username => {
    API.getGoals(username)
      .then(res => {
        this.setState(
          {
            goals: res.data
          },
          () => {
            console.log(`Goals state:`);
            console.log(this.state.goals);
          }
        );
      })
      .catch(err => console.log(err));
  };

  handleUserChoice = id => {
    const goalIndex = this.state.goals.map(goal => goal._id).indexOf(id);
    // console.log(`Chosen goal's index: ${goalIndex}`);
    this.setState({
      userChoiceID: id,
      userChoiceGoal: this.state.goals[goalIndex]
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/register" component={Register} />
            <Route exact path="/user/profile" component={Profile} />
            <Route path="/socialfeed" component={SocialFeed} />
            <Route path="/createpost" component={CreatePost} />
            <Route
              path="/addgoalcreate"
              render={() => (
                <AddGoalCreate
                  userChoiceID={this.state.userChoiceID}
                  username={this.state.username}
                  userChoiceGoal={this.state.userChoiceGoal}
                  getGoals={this.getGoals}
                />
              )}
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
              exact
              path="/details"
              render={() => (
                <Details
                  userChoiceID={this.state.userChoiceID}
                  username={this.state.username}
                  userChoiceGoal={this.state.userChoiceGoal}
                  getGoals={this.getGoals}
                />
              )}
            />
            {/* test component*/}
            <Route exact path="/test" render={() => <Test />} />
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
