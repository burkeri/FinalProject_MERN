import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
