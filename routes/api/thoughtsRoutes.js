const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateApplication,
  deleteApplication,
  addTag,
  removeTag,
} = require('../../controllers/thoughtsController');

// /api/applications
router.route('/').get(getThoughts).post(createThought);

// /api/applications/:applicationId
router
  .route('/:applicationId')
  .get(getSingleThought)
  .put(updateApplication)
  .delete(deleteApplication);

// /api/applications/:applicationId/tags
router.route('/:applicationId/tags').post(addTag);

// /api/applications/:applicationId/tags/:tagId
router.route('/:applicationId/tags/:tagId').delete(removeTag);

module.exports = router;
