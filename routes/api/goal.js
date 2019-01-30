const router = require("express").Router();
const goalController = require("../../controllers/goalController");

// Matches w/ /api/goal
router.route('/')
  .get(goalController.findAll)
  .post(goalController.create);

// Matches with "/api/goal/:id"
router.route("/:id")
  .get(goalController.findById)
  .delete(goalController.remove);

router.route("/:id/:prog")
  .put(goalController.update);
module.exports = router;