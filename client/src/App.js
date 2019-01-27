import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AddGoalCreate from "./pages/AddGoalCreate";

class App extends Component {
  // constructor() {
  //   super();

  //   // this.handleChoice = this.handleChoice.bind(this);
  //   // this.createGoal = this.createGoal.bind(this);

  //   this.state = {
  //     category: "",
  //     name: "",
  //     icon: "",
  //     frequency: 0
  //   };
  // }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/register" component={Register} />
            <Route exact path="/user/profile" component={Profile} />
            <Route exact path="/user/dashboard" component={Dashboard} />
            {/* <Route
              exact
              path="/user/addgoal"
              render={props => (
                <AddGoal
                  {...props}
                  handleChoice={this.handleChoice}
                />
              )}
            /> */}
            <Route
              exact path="/user/addgoalcreate"
              component={AddGoalCreate}  
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
