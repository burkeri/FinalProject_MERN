const router = require("express").Router();
const goalController = require("../../controllers/goalController");

// Matches w/ /api/goal
router.route('/')
  .post(goalController.create);

module.exports = router;