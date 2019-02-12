const router = require("express").Router();
const goalController = require("../../controllers/goalController");

// Matches w/ /api/goal
router.route("/").post(goalController.create);

// Matches with "/api/goal/:username"
router.route("/:username").get(goalController.findAll);

// Matches with "/api/goal/:id"
router
    .route("/:id")
    .get(goalController.findById)
    .put(goalController.update)
    .delete(goalController.remove);

// Matches with "/api/goal/:id/:prog"
router.route("/:id/:prog").put(goalController.updateProgress);
module.exports = router;
