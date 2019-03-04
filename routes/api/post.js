const router = require("express").Router();
const postController = require("../../controllers/postController");

// api/post/createpost route
router.post("/create", postController.create);

module.exports = router;
