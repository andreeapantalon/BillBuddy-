import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pricing() {
  const year = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: '#F8F9FB', color: '#1A1C23' }}>

      {/* Header */}
      <section className="text-center text-white py-5" style={{ backgroundColor: '#6C63FF' }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Plans</h1>
          <p className="lead">Choose a plan that suits you best</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <div className="card shadow rounded-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Starter</h5>
                  <p className="display-5 fw-bold">£3.99</p>
                  <p className="text-muted">per month</p>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Basic Features</li>
                    <li>✔ Budget Tracker</li>
                    <li>✔ Email Support</li>
                  </ul>
                  <a href="/signup" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow rounded-4 border-primary">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary">Popular</h5>
                  <p className="display-5 fw-bold">£7.99</p>
                  <p className="text-muted">per month</p>
                  <ul className="list-unstyled mb-4">
                    <li>✔ All Starter Features</li>
                    <li>✔ Bill Negotiation</li>
                    <li>✔ Priority Support</li>
                  </ul>
                  <a href="/signup" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow rounded-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Pro+</h5>
                  <p className="display-5 fw-bold">£12.99</p>
                  <p className="text-muted">per month</p>
                  <ul className="list-unstyled mb-4">
                    <li>✔ Everything in Popular</li>
                    <li>✔ Personal Finance Coach</li>
                    <li>✔ 24/7 Priority Support</li>
                  </ul>
                  <a href="/signup" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-4" style={{ backgroundColor: '#121530' }}>
        <div className="container">
          <p>&copy; {year} BillBuddy+. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Pricing;
