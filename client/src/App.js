import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";

// pages
import Landing from "./pages_re/Landing";
import Login from "./pages_re/Login";
import Register from "./pages_re/Register";
import Dashboard from "./pages_re/Dashboard";
import AddGoal from "./pages_re/AddGoal";
import EditGoal from "./pages_re/EditGoal";
import Social from "./pages_re/Social";
import AddPost from "./pages_re/AddPost";
import NoMatch from "./pages_re/NoMatch";

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
    posts: [],
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
        () => {
          this.getGoals(this.state.username);
          this.getPosts();
        }
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

  getPosts = () => {
    API.getPosts()
      .then(res => {
        this.setState(
          {
            posts: res.data
          },
          () => {
            console.log(`Posts:`);
            console.log(this.state.posts);
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
              exact path="/creategoal" 
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
              path="/socialfeed"
              render={() => (
                <Social 
                  posts={this.state.posts}
                />
              )}
            />

            <Route
              path="/createpost"
              render={() => (
                <AddPost
                  username={this.state.username}
                  goals={this.state.goals}
                  getPosts={this.getPosts} 
                />
              )}
            />

            <Route
              exact
              path="/details"
              render={() => (
                <EditGoal
                  userChoiceID={this.state.userChoiceID}
                  username={this.state.username}
                  userChoiceGoal={this.state.userChoiceGoal}
                  getGoals={this.getGoals}
                />
              )}
            />
            
            <Route component={NoMatch} />
          </Switch>

      </Router>
    );
  }
}

export default App;

/*

ToDo:

SOCIAl
- create posts re-design

GOAL DETAILS:
- make sure goal edit is working
- add notes

PASSPORT
- logout
- protected routes

bleh

*/