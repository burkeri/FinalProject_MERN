// // dependencies
import axios from "axios";

export default {
  // get all the goals of the user
  getGoals: username => {
    return axios.get("api/goal/" + username);
  },

  // save a goal to the database
  createGoal: goalData => {
    return axios.post("/api/goal", goalData);
  },
  // update a goal's progress w/ the matching ID
  // updateProgress: (id, prog) => {
  //     return axios.put("/api/goal/" + id + "/" + prog);
  // },
  // update a goal w/ the matching ID
  updateGoal: (id, goalData) => {
    return axios.put("api/goal/" + id, goalData);
  },
  // delete a goal with the matching ID
  deleteGoal: id => {
    return axios.delete("/api/goal/" + id);
  },

  currentUsername: () => {
    return axios.get("/dashboard").then(res => {
      return res.data.username;
    })
    .then(username => {
        return username;
    });    
  }
};
