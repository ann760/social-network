const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/
router.route("/").get(getAllThoughts);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route("/:userId/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router
  .route("/:userId/reaction/:thoughtId")
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>  
router.route("/:userId/:thougthId/:reactionId").delete(removeReaction);

module.exports = router;
