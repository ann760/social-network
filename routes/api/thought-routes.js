const router = require('express').Router();
const { addThought, removeThought,  addReaction, removeReaction } = require('../../controllers/thought-controller');

// /api/thought/<userId>
router.route('/:userId').post(addThought);

// /api/thought/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought)

  router.route('/:userId/:thougthId/:reactionId').delete(removeReaction);

module.exports = router;