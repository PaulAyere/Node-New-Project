const express = require('express');
const router = express.Router();
const {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobControllers');

const { protect } = require('../middlewares/userAuth');

router.route('/').get(protect, getJobs).post(protect, createJob);
router.route('/:id').delete(protect, deleteJob).put(protect, updateJob);

module.exports = router;
