import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
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
    { icon: '🏥', top: '15%', left: '15%', delay: -6, size: '2rem' },
    { icon: '🎓', bottom: '35%', right: '20%', delay: -1.8, size: '2.2rem' },
    { icon: '♻️', top: '50%', left: '12%', delay: -3.2, size: '1.9rem' },
    { icon: '🏠', bottom: '60%', right: '8%', delay: -2.7, size: '2.1rem' },
    { icon: '🌟', top: '65%', left: '18%', delay: -4.8, size: '1.8rem' },
    { icon: '🔬', bottom: '20%', left: '20%', delay: -0.8, size: '2rem' },
    { icon: '🎨', top: '35%', right: '25%', delay: -5.5, size: '1.9rem' },
    { icon: '🚀', top: '80%', right: '18%', delay: -1.2, size: '2.1rem' },
    { icon: '💻', bottom: '70%', right: '15%', delay: -4.2, size: '2rem' },
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
          }}
          animate={{
            y: [0, -30, -10, -25, 0],
            x: [0, 10, -5, 8, 0],
            rotate: [0, 8, -8, 5, -3, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
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
