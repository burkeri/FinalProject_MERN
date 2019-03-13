import React from "react";
import MaterialIcons from "material-icons-react";
import { Link } from "react-router-dom";

import "../../css/index.css";

export default function GoalNav() {
  return (
    <div>
      <Link to="/creategoal">
        <button className="addGoal">
          <MaterialIcons icon="add" size="large" color="white" />
        </button>
      </Link>
      <div className="footer">
        <Link to="/socialfeed">
          <button className="navButton">
            <MaterialIcons icon="share" />
            <br />
            Social
          </button>
        </Link>
        <button className="navButton">
          <MaterialIcons icon="pie_chart" />
          <br />
          Data
        </button>
      </div>
    </div>
  );
}
