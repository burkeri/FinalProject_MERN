import React from "react";
import MaterialIcons from "material-icons-react";

import "../../css/index.css";

export default function GoalNav() {
  return (
    <div>
      <button className="addGoal">
        <MaterialIcons icon="add" size="large" color="white" />
      </button>
      <div className="footer">
        <button className="navButton">
          <MaterialIcons icon="share" />
          <br />
          Social
        </button>
        <button className="navButton">
          <MaterialIcons icon="pie_chart" />
          <br />
          Data
        </button>
      </div>
    </div>
  );
}
