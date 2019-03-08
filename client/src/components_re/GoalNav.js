import React from "react";
import MaterialIcons from "material-icons-react";

const addButton = {
  backgroundColor: "blue",
  height: "65px",
  width: "65px",
  borderRadius: "50%",
  border: "none",
  color: "white",
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "30px",
  zIndex: "10",
  textAlign: "center",
  outline: "none",
  paddingTop: "6px",
  ":focus": {
    outline: "none"
  }
};

const footer = {
  backgroundColor: "#dddddd",
  height: "70px",
  width: "100%",
  position: "fixed",
  bottom: "0",
  borderRadius: "20px 20px 0 0",
  zIndex: "5"
};

const navButton = {
  width: "50%",
  height: "100%",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "13px",
  ":focus": {
    outline: "none"
  }
}


export default function GoalNav() {
  return (
    <div>
      <button style={addButton}><MaterialIcons icon="add" size="large" color="white"/></button>
      <div style={footer}>
        <button style={navButton}>
          <MaterialIcons icon="share"/>
          <br/>
          Social
        </button>
        <button style={navButton}>
          <MaterialIcons icon="pie_chart"/>
          <br/>
          Data
        </button>
      </div>
    </div>
  );
}