import React from "react";
import MaterialIcons from "material-icons-react";
import { Link } from "react-router-dom";

import "../../css/index.css";

export default function SocialNav() {
  return (
    <div>
      <Link to="/createpost">
        <button className="addGoal" id="addPost">
          <MaterialIcons icon="create" size="large" color="white" />
        </button>
      </Link>
      <div className="footer">
        <Link to="/dashboard">
          <button className="navButton">
            <MaterialIcons icon="person" />
            <br />
            Dashboard
          </button>
        </Link>
        <button className="navButton">
          <MaterialIcons icon="apps" />
          <br />
          Profile
        </button>
      </div>
    </div>
  );
}
