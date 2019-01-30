import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// components
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AddGoalCreate from "./pages/AddGoalCreate";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="allBackground">
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
              path="/dashboard" 
              component={Dashboard} 
            />
            <Route
              exact path="/addgoalcreate"
              component={AddGoalCreate}  
            />
            {/* Landing page and 404 */}
            <Route 
              exact path="/" 
              component={Landing} 
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
