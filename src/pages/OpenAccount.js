// src/pages/OpenAccount.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New account data:', formData);
    // TODO: send this data to your API
    alert('✅ Account successfully created!');
    navigate('/');  // redirect to home or dashboard
  };

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <h2 className="fw-bold mb-4 text-center">Open an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" name="email" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" name="phone" required onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-lg w-100 rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default OpenAccount;
