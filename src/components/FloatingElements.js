import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
  // Reduced number of elements and simplified animations for better performance
  const elements = [
    { icon: '💝', top: '10%', left: '5%', delay: 0, size: '2rem' },
    { icon: '💡', top: '20%', right: '8%', delay: -2, size: '2.5rem' },
    { icon: '🤝', bottom: '25%', left: '3%', delay: -4, size: '2rem' },
    { icon: '🌱', top: '60%', right: '5%', delay: -1, size: '1.8rem' },
    { icon: '⚡', bottom: '15%', right: '12%', delay: -3, size: '2rem' },
    { icon: '👥', top: '75%', left: '8%', delay: -5, size: '2.2rem' },
    { icon: '📚', top: '40%', left: '2%', delay: -1.5, size: '1.8rem' },
    { icon: '🌍', top: '85%', right: '3%', delay: -2.5, size: '2rem' },
    { icon: '🎯', top: '30%', right: '15%', delay: -4.5, size: '1.9rem' },
    { icon: '❤️', bottom: '45%', left: '6%', delay: -0.5, size: '2.1rem' },
  ];

  return (
    <div className="floating-elements-container">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element"
          style={{
            top: element.top,
            bottom: element.bottom,
            left: element.left,
            right: element.right,
            fontSize: element.size,
            willChange: 'transform',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 5, 0],
            rotate: [0, 3, -3, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
