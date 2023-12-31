const asyncHandler = require('express-async-handler');
const Job = require('../models/jobModels');


const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find();
  res.status(200).json(jobs);
});


const createJob = asyncHandler(async (req, res) => {
  const { title, description, company, location, payPerHour, hoursNeeded } = req.body;

  if (!title || !description || !company || !location || !payPerHour || !hoursNeeded) {
    res.status(400);
    throw new Error('Please fill in all the required fields');
  }

  const job = await Job.create({
    title,
    description,
    company,
    location,
    payPerHour,
    hoursNeeded,
    user: req.user.id,
  });

  res.status(200).json(job);
});


const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(400);
    throw new Error('Job not found');
  }

  // Check for user
  if (job.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedJob);
});


const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(400);
    throw new Error('Job not found');
  }

  // Check for user
  if (job.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  // Use deleteOne or findOneAndRemove to delete the job
  const deletedJob = await Job.deleteOne({ _id: req.params.id });

  if (deletedJob.deletedCount === 1) {
    res.status(200).json({ id: req.params.id });
  } else {
    res.status(500); // Change to 500 for "Internal Server Error"
    throw new Error('Error while deleting the job');
  }
});

module.exports = {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
};

