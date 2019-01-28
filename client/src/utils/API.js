// dependencies
import axios from "axios";

export default {
  // register user
  registerUser: function(newUser) {
    axios.post("/user/register", newUser);
    console.log("client: ");
    console.log(newUser);
  },
  // save a goal to the database
  createGoal: function(goalData) {
    return axios.post("/api/goal", goalData);
  },
  // get all the goals
  getGoals: function() {
    return axios.get("api/goal");
  }

};
