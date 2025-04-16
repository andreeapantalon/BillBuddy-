import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: '#4B6587' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/" style={{ color: '#F7F6F2' }}>
          BillBuddy<span style={{ color: '#F5B971' }}>+</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-warning rounded-pill px-4 fw-semibold"
                to="/get-started"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
