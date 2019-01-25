import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import NoMatch from "./pages/NoMatch";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/user/login" component={Login} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Route exact path="/" component={Landing} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
