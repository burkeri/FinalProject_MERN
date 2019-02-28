const Post = require("../models/Post");

module.exports = {
  create: (req, res) => {
    console.log("/api/post/createpost");
    console.log(req.body);
    // you can do whatever you want with this data
    // change profile pic, save to DB, or send it to another API
    res.end();
  }
};
