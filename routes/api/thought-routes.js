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
router.route("/:userId/:thoughtId").get(getThoughtById);

// /api/thoughts/<thoughtId>
router.route("/:thoughtId").put(updateThought).delete(removeThought);

// /api/thoughts/<thoughtId>/reaction
router.route("/:thoughtId/reactions").put(addReaction);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route("/:thougthId/:reactionId").delete(removeReaction);

module.exports = router;
