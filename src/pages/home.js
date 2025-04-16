import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const [showOffer, setShowOffer] = useState(false);
  const [callbackMessage, setCallbackMessage] = useState('');

  const handleRequestCallback = async () => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: 'Ion',
        phone: '0123456789',
      });
      setCallbackMessage('✅ Callback request received! We’ll contact you shortly.');
    } catch (error) {
      setCallbackMessage('❌ Failed to send request.');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#F8F9FB', color: '#1A1C23' }}>
      {/* Hero */}
      <section className="text-center text-white py-5" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container position-relative">
          <img
            src="/img/savemoney.jpg"
            alt="Save Money"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: '450px', width: '100%', objectFit: 'cover', opacity: '0.4' }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="display-3 fw-bold mb-3">Smarter Money Management</h1>
            <p className="lead mb-4">Take control of your finances with confidence and ease.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="/signup" className="btn btn-lg rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
                Start Free Trial
              </a>
              <button onClick={() => navigate('/pricing')} className="btn btn-lg rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
                Pricing
              </button>
              <button onClick={() => setShowOffer(true)} className="btn btn-lg rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
                🎁 Special Offer
              </button>
              <button onClick={handleRequestCallback} className="btn btn-lg rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
                Request Callback
              </button>
            </div>
            {callbackMessage && <p className="mt-3">{callbackMessage}</p>}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-5" style={{ backgroundColor: '#F9FAFB' }}>
  <div className="container text-center">
    <h2 className="fw-bold mb-4" style={{ fontSize: '2.75rem', color: '#2C3E50' }}>
      Trusted by the World’s Leading Brands
    </h2>
    <p className="text-muted mb-5 fs-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
      BillBuddy+ powers financial clarity for fast-growing startups, creators, and global enterprises — delivering secure, intelligent, and effortless financial tools trusted by industry leaders worldwide.
    </p>

    <div className="row justify-content-center g-4">
      {[
        'airbnb.jpg',
        'shopify.jpg',
        'Dailymail.jpg',
        'notion.jpg',
      'tesco.jpg'
      ].map((logo, idx) => (
        <div key={idx} className="col-6 col-md-2">
          <div
            className="p-3 border rounded-4 shadow-sm "
            style={{
              // transition: 'all 0.3s ease-in-out',
              minHeight: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={`img/${logo}`}
              alt={`Brand ${idx + 1}`}
              style={{
                maxHeight: '50px',
                objectFit: 'contain',
                // filter: 'grayscale(100%)',
                // transition: '0.3s',
              }}
              // onMouseOver={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              // onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
            />
          </div>
        </div>
      ))}
    </div>

    <p className="text-muted mt-5 mb-0 fs-6">
      Join over <strong>500,000 users</strong> and <strong>100+ enterprise teams</strong> securing their financial future with BillBuddy+.
    </p>
  </div>
</section>




      {/* Features */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose BillBuddy+</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h5>💸 Save Smarter</h5>
                <p>Track your expenses and savings effortlessly with AI-powered insights.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h5>📊 Custom Dashboards</h5>
                <p>See where your money goes with clear, visual financial overviews.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h5>🔒 Enterprise-Grade Security</h5>
                <p>Military-grade encryption to protect your financial data and privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5" style={{ backgroundColor: '#F4F6F8' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/img/coin.jpg" alt="About BillBuddy+" className="img-fluid rounded-4 shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: '#2C3E50' }}>About BillBuddy+</h2>
              <p className="text-muted mb-4 fs-5">
                BillBuddy+ is a modern financial management platform designed to simplify your financial life. From seamless bill tracking to AI-driven insights, we empower businesses and individuals with tools to make confident financial decisions — securely, intelligently, and effortlessly.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✅ <strong>Trusted by over 500,000 users</strong> worldwide.</li>
                <li className="mb-2">✅ Bank-grade security and military-level encryption.</li>
                <li className="mb-2">✅ Real-time insights, expense forecasting, and smart dashboards.</li>
              </ul>
              <button onClick={() => navigate('/signup')} className="btn btn-lg rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-5" style={{ backgroundColor: '#F4F6F8' }}>
  <div className="container text-center">
    <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#2C3E50' }}>
      Transparent, Flexible Pricing 🚀
    </h2>
    <p className="mb-5 fs-5 text-muted">
      Choose a plan tailored to your goals. No hidden fees. Full flexibility. Upgrade, downgrade, or cancel anytime.
    </p>

    <div className="d-flex flex-wrap justify-content-center gap-4">
      <div className="p-4 border rounded-4 shadow-sm bg-white" style={{ minWidth: '250px', maxWidth: '280px' }}>
        <h5 className="fw-bold mb-3">Starter 🌱</h5>
        <p className="text-muted mb-4">Perfect for individuals managing personal finances.</p>
        <h3 className="fw-bold mb-3">$0 <small className="text-muted">/mo</small></h3>
        <ul className="list-unstyled text-start mb-4">
          <li>✅ Track up to 5 accounts</li>
          <li>✅ Basic reporting</li>
          <li>✅ Secure cloud storage</li>
        </ul>
        <a href="/signup" className="btn btn-lg w-100 rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
          Get Started
        </a>
      </div>

      <div className="p-4 border rounded-4 shadow-sm bg-white" style={{ minWidth: '250px', maxWidth: '280px' }}>
        <h5 className="fw-bold mb-3">Pro 🌟</h5>
        <p className="text-muted mb-4">Advanced tools for serious savers and side hustlers.</p>
        <h3 className="fw-bold mb-3">$9.99 <small className="text-muted">/mo</small></h3>
        <ul className="list-unstyled text-start mb-4">
          <li>✅ Unlimited accounts</li>
          <li>✅ Custom dashboards</li>
          <li>✅ Priority support</li>
        </ul>
        <a href="/signup" className="btn btn-lg w-100 rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
          Upgrade to Pro
        </a>
      </div>

      <div className="p-4 border rounded-4 shadow-sm bg-white" style={{ minWidth: '250px', maxWidth: '280px' }}>
        <h5 className="fw-bold mb-3">Enterprise 🏢</h5>
        <p className="text-muted mb-4">Premium solutions for teams and businesses.</p>
        <h3 className="fw-bold mb-3">Custom</h3>
        <ul className="list-unstyled text-start mb-4">
          <li>✅ Team management tools</li>
          <li>✅ Dedicated account manager</li>
          <li>✅ Enterprise-grade security</li>
        </ul>
        <a href="/contact" className="btn btn-lg w-100 rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">What Our Users Say</h2>
          <div className="row g-4">
            {['Emma W.', 'Liam D.', 'Sarah M.'].map((user, i) => (
              <div key={i} className="col-md-4">
                <div className="border p-4 rounded-4 shadow-sm h-100">
                  <p>“{user === 'Emma W.' ? 'BillBuddy+ changed the way I manage money. It\'s so simple!' : user === 'Liam D.' ? 'Highly recommend it for anyone serious about saving.' : 'The dashboard and callback service are brilliant.'}”</p>
                  <strong>– {user}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Highlights Section */}
<section className="py-5" style={{ backgroundColor: '#F9FAFB' }}>
  <div className="container text-center">
    <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#2C3E50' }}>
      Features You’ll Love ❤️
    </h2>
    <div className="row g-4">
      {[
        { icon: '💳', title: 'Bill Reminders', desc: 'Never miss a due date again with automated alerts.' },
        { icon: '📈', title: 'Expense Forecasting', desc: 'Predict future costs with AI-powered trends.' },
        { icon: '💼', title: 'Business Tools', desc: 'Manage multiple clients and company accounts with ease.' },
        { icon: '⚡', title: 'Instant Reports', desc: 'Export clean financial summaries anytime.' },
      ].map((item, idx) => (
        <div key={idx} className="col-md-3">
          <div className="p-4 border rounded-4 shadow-sm h-100">
            <h1>{item.icon}</h1>
            <h5 className="fw-bold mb-2">{item.title}</h5>
            <p className="text-muted">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Stats Section */}
<section className="py-5 text-white" style={{ backgroundColor: '#2C3E50' }}>
  <div className="container text-center">
    <h2 className="fw-bold mb-4">BillBuddy+ by the Numbers 📊</h2>
    <div className="row g-4">
      {[
        { value: '500K+', label: 'Active Users' },
        { value: '98%', label: 'Customer Satisfaction' },
        { value: '$200M+', label: 'Bills Tracked' },
        { value: '1,200+', label: 'Business Clients' },
      ].map((stat, idx) => (
        <div key={idx} className="col-6 col-md-3">
          <div className="p-4 border rounded-4 h-100" style={{ backgroundColor: '#34495E' }}>
            <h3 className="fw-bold">{stat.value}</h3>
            <p className="text-muted">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="py-5" style={{ backgroundColor: '#F4F6F8' }}>
  <div className="container">
    <h2 className="fw-bold mb-4 text-center" style={{ color: '#2C3E50' }}>Frequently Asked Questions 📚</h2>
    <div className="accordion" id="faqAccordion">
      {[
        { q: 'Is there a free version available?', a: 'Yes — our Starter plan is free forever for individuals.' },
        { q: 'Can I upgrade or downgrade anytime?', a: 'Absolutely, you can switch plans whenever you like without extra fees.' },
        { q: 'Is my financial data secure?', a: '100%. We use bank-grade security protocols and end-to-end encryption.' },
        { q: 'Do you offer business solutions?', a: 'Yes — our Enterprise plan is perfect for teams, with admin controls and priority support.' },
      ].map((faq, idx) => (
        <div className="accordion-item border-0 mb-3 rounded-4 shadow-sm" key={idx}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button fw-semibold ${idx !== 0 ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq${idx}`}
            >
              {faq.q}
            </button>
          </h2>
          <div
            id={`faq${idx}`}
            className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-muted">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Banner */}
      <section className="py-5 text-white text-center" style={{ backgroundColor: '#1A1C23' }}>
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to take control of your finances?</h2>
          <a href="/signup" className="btn btn-lg rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }}>
            Join BillBuddy+ Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-white text-center py-4" style={{ backgroundColor: '#1A1C23' }}>
        <div className="container">
          <p className="mb-2">&copy; {year} BillBuddy+. All rights reserved.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/terms" className="text-white text-decoration-none">Terms</a>
            <a href="/privacy" className="text-white text-decoration-none">Privacy</a>
            <a href="/contact" className="text-white text-decoration-none">Contact</a>
          </div>
        </div>
      </footer>

      {/* Offer Modal */}
      {showOffer && (
        <div className="modal show fade d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className="modal-dialog">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">🎁 Special Offer</h5>
                <button type="button" className="btn-close" onClick={() => setShowOffer(false)}></button>
              </div>
              <div className="modal-body">
                <p>🔥 Get 50% off your first 3 months when you sign up today!</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-lg rounded-pill fw-semibold" style={{ backgroundColor: '#3FBF9F', color: '#1A1C23', border: 'none' }} onClick={() => setShowOffer(false)}>
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
