// // dependencies
import axios from "axios";

export default {

  // save a goal to the database
  createGoal: function(goalData) {
    return axios.post("/api/goal", goalData);
  },
  // get all the goals
  getGoals: function() {
    return axios.get("api/goal");
  }

};