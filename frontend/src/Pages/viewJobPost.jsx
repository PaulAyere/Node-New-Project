import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewJobList() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/jobs')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setJobs(response.data);
        } else {
          setError(new Error('Invalid data received'));
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="mt-10">
      <h2 className="text-4xl text-center mb-4">Available Jobs</h2>
      <div className="flex flex-wrap -mx-4">
        {jobs.map((job) => (
          <div key={job._id} className="w-1/3 px-4 mb-4">
            <div className="bg-white rounded-lg border border-gray-300 shadow-md p-4">
              <h3 className="text-xl mb-2 font-bold">{job.title}</h3>
              <p>Description: {job.description}</p>
              <p>Company: {job.company}</p>
              <p>Location: {job.location}</p>
              <p>Pay Per Hour: ${job.payPerHour}</p>
              <p>Hours Needed: {job.hoursNeeded} hours per week</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewJobList;
