import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cardBaseStyle = {
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out'
};

const cardHoverStyle = {
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)'
};

function GetStarted() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const steps = [
    { title: 'Create Your Account', desc: 'Sign up for free or log in to your existing BillBuddy+ account.', path: '/open-account' },
    { title: 'Connect Your Bank Accounts', desc: 'Securely link your financial accounts to start tracking.', path: '/connect-bank' },
    { title: 'Set Financial Goals', desc: 'Tell us what you want to achieve — we’ll help you get there.', path: '/goals' },
    { title: 'Explore Your Dashboard', desc: 'Check your bill reminders, insights, and forecasts.', path: '/dashboard' },
  ];

  return (
    <div style={{ backgroundColor: '#F8F9FB', color: '#1A1C23' }}>
      <div className="container py-5 text-center">
        <h1 className="fw-bold mb-4">Welcome to BillBuddy+ 🎉</h1>
        <p className="lead mb-5">Let’s get you up and running in no time.</p>

        <div className="row g-4 justify-content-center">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="col-md-5"
              onClick={() => navigate(step.path)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="p-4 border rounded-4 shadow-sm h-100 bg-white"
                style={{
                  ...cardBaseStyle,
                  ...(hoveredIndex === idx ? cardHoverStyle : {})
                }}
              >
                <h2 className="fw-bold mb-3">Step {idx + 1}</h2>
                <h5 className="fw-semibold mb-2">{step.title}</h5>
                <p className="text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <button
            onClick={() => navigate('/signup')}
            className="btn btn-lg rounded-pill fw-semibold"
            style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}
          >
            Get Started Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
