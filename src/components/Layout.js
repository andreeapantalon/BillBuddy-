import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout({ children }) {
  const year = new Date().getFullYear();

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#F8F9FB', color: '#1A1C23' }}>
      <Navbar />
      <main className="flex-grow-1">
        {children}
      </main>
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
    </div>
  );
}

export default Layout;
