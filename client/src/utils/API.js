// // dependencies
import axios from "axios";

export default {
  // get all the goals
  getGoals: () => {
    return axios.get("api/goal");
  },
  // save a goal to the database
  createGoal: goalData => {
    return axios.post("/api/goal", goalData);
  },
  // update a goal w/ the matching ID
  updateGoal: id => {
    return axios.put("/api/goal/" + id);
  },
  // delete a goal with the matching ID
  deleteGoal: id => {
    return axios.delete("/api/goal/" + id);
  }
};
