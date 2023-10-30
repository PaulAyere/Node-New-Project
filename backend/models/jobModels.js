const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Reference to the user who posted the job
    },
    title: {
      type: String,
      required: [true, 'Please add a job title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a job description'],
    },
    company: {
      type: String,
      required: [true, 'Please specify the company'],
    },
    location: {
      type: String,
      required: [true, 'Please specify the job location'],
    },
    payPerHour: {
      type: Number,
      required: [true, 'Please specify the pay per hour'],
    },
    hoursNeeded: {
      type: Number,
      required: [true, 'Please specify the number of hours needed'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Job', jobSchema);

