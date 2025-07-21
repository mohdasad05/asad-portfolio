// src/components/SectionWrapper.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, delay = 0.1, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
