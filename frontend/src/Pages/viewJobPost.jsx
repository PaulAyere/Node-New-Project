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
      <h2 className="text-2xl text-center mb-4">Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id} className="bg-white shadow-md rounded p-4 mb-4">
          <h3 className="text-xl mb-2">{job.title}</h3>
          <p>Description: {job.description}</p>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>payPerHour: ${job.payPerHour}</p>
          <p>hoursNeeded: {job.hoursNeeded}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewJobList;
