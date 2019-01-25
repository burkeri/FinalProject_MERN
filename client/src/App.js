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

class App extends Component {
  state = {
    category: "",
    name: "",
    icon: "",
    frequency: 0
  }

  handleClick = choice => {
    console.log(choice);
    // update the state
    this.setState({ btnChoice: choice });
    // go to the next page
    
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
            <Route exact path="/user/addgoal" component={AddGoal} />
            <Route exact path="/" component={Landing} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
