import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";

// style
import "./App.css";

// components and pages

import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./pages/Landing";
import Details from "./pages/Details";
import SocialFeed from "./pages/SocialFeed";
import CreatePost from "./pages/CreatePost";

// re-design
import Dashboard from "./pages_re/Dashboard";
import AddGoal from "./pages_re/AddGoal";
import Social from "./pages_re/Social";

class App extends Component {
  state = {
    userChoiceID: "",
    userChoiceGoal: {
      name: "",
      icon: "",
      frequency: "",
      description: ""
    },
    username: "",
    goals: [],
    testObj: {}
  };

  componentDidMount() {
    this.setUsername();
  }

  setUsername = () => {
    API.currentUsername().then(res => {
      if (!res) res = "Mangoman42";
      this.setState(
        {
          username: res
        },
        () => this.getGoals(this.state.username)
      );
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
            console.log(`Goals:`);
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

          <Switch>

            <Route 
              exact path="/" 
              component={Landing} 
            />

            <Route 
              exact path="/user/register" 
              component={Register} 
            />

            <Route 
              exact path="/user/login" 
              component={Login} 
            />

            {/* Redesign */}
            
            <Route 
              exact path="/dashboard" 
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
              exact path="/addgoalcreate" 
              render={() => (
                <AddGoal
                  userChoiceID={this.state.userChoiceID}
                  username={this.state.username}
                  userChoiceGoal={this.state.userChoiceGoal}
                  getGoals={this.getGoals}
                />
              )}
            />

            <Route
              path="/social"
              component={Social}
            />

            {/* Redesign */}


   
            <Route path="/socialfeed" component={SocialFeed} />
            <Route
              path="/createpost"
              render={() => <CreatePost username={this.state.username} />}
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

            {/* Landing page and 404 */}
            
            <Route component={NoMatch} />
          </Switch>

      </Router>
    );
  }
}

export default App;

/*

ToDo:

GOAL DETAILS:
- redesign
- make sure goal edit is working

SOCIAl
- add social nav
- link social nav to add post, dashboard, profile
- make sure posts appear

PASSPORT
- logout
- protected routes

*/