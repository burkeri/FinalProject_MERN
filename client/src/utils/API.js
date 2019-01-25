// dependencies
import axios from "axios";

export default {
  // register user
  registerUser: function(newUser) {
    console.log("client: ");
    console.log(newUser);
    return axios.post("/user/register", newUser);
  }
};
