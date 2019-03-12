const router = require("express").Router();
const postController = require("../../controllers/postController");

// api/post get route to gather all posts
router
  .route("/")
  .get(postController.findAll)
  .post(postController.create);

// api/post/create post route
// router.post("/create", postController.create);

module.exports = router;
