const Post = require("../models/Post");

module.exports = {
  findAll: (req, res) => {
    Post.find()
      .then(dbPosts => {
        res.json(dbPosts);
      })
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    // console.log(req.body);
    const newPost = new Post({
      userID: req.body.userID,
      goalID: req.body.goalID,
      picture: req.body.picture,
      text: req.body.text
    });
    console.log(newPost);
    // enter data into the database
    newPost.save((err, dbPost) => {
      if (err) return res.status(500).send(err);
      console.log(`Post created.`);
      return res.json(dbPost);
    });
    res.end();
  }
};
