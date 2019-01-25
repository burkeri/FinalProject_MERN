import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AddGoal from "./pages/AddGoal";
import AddGoalCreate from "./pages/AddGoalCreate";

class App extends Component {
  constructor() {
    super()
    this.state = {
      category: "",
      name: "",
      icon: "",
      frequency: 0
    }
    this.handleChoice = this.handleChoice.bind(this)
  }

  handleChoice(choice) {
    console.log(`This is the choice: ${choice}`);
    // update the state
    this.setState({ category: choice }); 
  }

  createGoal(name, icon, frequency) {
    // update the state

    // if all states are truthy, create the entry in the DB

    // log 'goal created
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/register" component={Register} />
            <Route exact path="/user/profile" component={Profile} />
            <Route exact path="/user/dashboard" component={Dashboard} />
            <Route exact path="/user/addgoal" render={(props) => <AddGoal {...props} handleChoice={this.handleChoice} category={this.state.category} />} />
            <Route exact path="/user/addgoalcreate" render={(props) => <AddGoalCreate {...props} createGoal={this.createGoal} />} />
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
