import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // optionally clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label><br/>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '0.5rem' }} 
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br/>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '0.5rem' }} 
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Message:</label><br/>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required 
            rows="5"
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
