import React from 'react';
import { motion } from 'framer-motion';

function Card({ step, index, onClick }) {
  return (
    <motion.div
      className="col-md-5"
      onClick={onClick}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      <motion.div
        className="p-4 border rounded-4 shadow-sm h-100 bg-white"
        whileHover={{ backgroundColor: '#f9fafc' }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="fw-bold mb-3">Step {index + 1}</h2>
        <h5 className="fw-semibold mb-2">{step.title}</h5>
        <p className="text-muted">{step.desc}</p>
      </motion.div>
    </motion.div>
  );
}

export default Card;
