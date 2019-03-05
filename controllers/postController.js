const Post = require("../models/Post");

module.exports = {
  create: (req, res) => {
    // console.log(req.body);
    const newPost = new Post({
      userID: req.body.userID,
      picture: req.body.picture,
      text: req.body.text
    });
    // console.log(newPost);
    // enter data into the database
    newPost.save((err, dbPost) => {
      if (err) return res.status(500).send(err);
      console.log(`Post created.`);
      return res.json(dbPost);
    });
    res.end();
  }
};
