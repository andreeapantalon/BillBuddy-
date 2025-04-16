import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Pricing from './pages/pricing';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import ConnectBank from './pages/ConnectBank';
import Goals from './pages/Goals';
import Dashboard from './pages/dashboard';  // lowercase 'd'
import Layout from './components/Layout';


function App() {
  return (
    <Router>
   <Routes>
  <Route path="/" element={<Layout><Home /></Layout>} />
  <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
  <Route path="/contact" element={<Layout><Contact /></Layout>} />
  <Route path="/get-started" element={<Layout><GetStarted /></Layout>} />
  <Route path="/connect-bank" element={<Layout><ConnectBank /></Layout>} />
  <Route path="/goals" element={<Layout><Goals /></Layout>} />
  <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
</Routes>

    </Router>
  );
}

export default App;
