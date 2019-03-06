// // dependencies
import axios from "axios";

export default {
  // get all the goals of the user
  getGoals: username => {
    return axios.get("api/goal/" + username);
  },
  // get all the posts
  getPosts: () => {
    return axios.get("api/post");
  },
  // save a goal to the database
  createGoal: goalData => {
    return axios.post("/api/goal", goalData);
  },
  // update a goal w/ the matching ID
  updateGoal: (id, goalData) => {
    return axios.put("api/goal/" + id, goalData);
  },
  // delete a goal with the matching ID
  deleteGoal: id => {
    return axios.delete("/api/goal/" + id);
  },
  // make a social feed post
  createPost: postData => {
    console.log(`Hit the API!`);
    return axios.post("/files", postData);
  },
  currentUsername: () => {
    return axios
      .get("/dashboard")
      .then(res => {
        return res.data.username;
      })
      .then(username => {
        return username;
      });
  }
};
