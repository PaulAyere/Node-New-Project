import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function CreateJobPost() {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    payPerHour: 0,
    hoursNeeded: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const [cookies] = useCookies(['access_token']); // Use your cookie name

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = cookies.access_token; // Retrieve the token from the cookie

    try {
      const response = await axios.post('http://localhost:8080/api/jobs', jobData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });

      alert('Job posted successfully');
      setJobData({
        title: '',
        description: '',
        company: '',
        location: '',
        payPerHour: 0,
        hoursNeeded: 0,
      });
    } catch (error) {
      console.log('Error posting job:', error);
      if (error.response) {
        console.log('Response Data:', error.response.data);
        console.log('Response Status:', error.response.status);
      }
      alert('Error posting job:', error);
    }
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl text-center mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={jobData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
            Company:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="payPerHour" className="block text-gray-700 text-sm font-bold mb-2">
            Pay Per Hour:
          </label>
          <input
            type="number"
            id="payPerHour"
            name="payPerHour"
            value={jobData.payPerHour}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hoursNeeded" className="block text-gray-700 text-sm font-bold mb-2">
            Hours Needed:
          </label>
          <input
            type="number"
            id="hoursNeeded"
            name="hoursNeeded"
            value={jobData.hoursNeeded}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default CreateJobPost;
