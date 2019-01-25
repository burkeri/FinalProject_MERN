// dependencies
import axios from "axios";

export default {
  // register user
  registerUser: function(newUser) {
    axios.post("/user/register", newUser);
    console.log("client: ");
    console.log(newUser);
  }
};
