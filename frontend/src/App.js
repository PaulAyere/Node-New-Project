import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import CreateJobPost from './Pages/createJobPost'; 
import ViewJobPost from './Pages/viewJobPost'; 
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/create" element={<CreateJobPost />} />
          <Route path="/list" element={<ViewJobPost />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<h1>Welcome to My Job App</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
