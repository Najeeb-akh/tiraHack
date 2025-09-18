import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './AnimatedDottedBackground.css';

const AnimatedDottedBackground = () => {
  // Generate dots with animation variants
  const dots = useMemo(() => {
    const dotArray = [];
    const rows = 20;
    const cols = 35;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const id = `dot-${row}-${col}`;
        
        // Calculate wave-like positioning
        const waveOffset = Math.sin(col * 0.3) * 30 + Math.cos(row * 0.2) * 20;
        const delay = (row + col) * 0.02;
        
        // Size variation based on position
        const size = 6 + (row / rows) * 4;
        
        // Opacity variation for depth
        const baseOpacity = 0.3 + (col / cols) * 0.7;
        
        // Color variation
        const hue = 220 + (col / cols) * 60; // Blue to purple gradient
        const saturation = 70 + (row / rows) * 30;
        
        dotArray.push({
          id,
          row,
          col,
          x: col * 25,
          y: row * 25 + waveOffset,
          size,
          baseOpacity,
          delay,
          color: `hsla(${hue}, ${saturation}%, 65%, ${baseOpacity})`,
        });
      }
    }
    
    return dotArray;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.001,
      },
    },
  };

  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: (custom) => ({
      scale: [0, 1.2, 1],
      opacity: [0, custom.baseOpacity * 1.5, custom.baseOpacity],
      y: [
        custom.y,
        custom.y - 10,
        custom.y + 5,
        custom.y,
      ],
      x: [
        custom.x,
        custom.x + Math.sin(custom.row * 0.1) * 10,
        custom.x - Math.cos(custom.col * 0.1) * 5,
        custom.x,
      ],
      transition: {
        duration: 3,
        delay: custom.delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    }),
  };

  const floatingVariants = {
    floating: (custom) => ({
      y: [
        custom.y,
        custom.y - 15 * Math.sin(custom.col * 0.1),
        custom.y + 10 * Math.cos(custom.row * 0.1),
        custom.y,
      ],
      x: [
        custom.x,
        custom.x + 8 * Math.cos(custom.row * 0.05),
        custom.x - 5 * Math.sin(custom.col * 0.05),
        custom.x,
      ],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 4 + custom.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className="animated-dotted-background">
      <motion.div
        className="animated-dots-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="animated-dot"
            custom={dot}
            variants={dotVariants}
            animate="floating"
            style={{
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
              boxShadow: `0 0 ${dot.size * 2}px ${dot.color}`,
            }}
          />
        ))}
      </motion.div>
      
      {/* Overlay gradients for depth */}
      <div className="background-overlay" />
    </div>
  );
};

export default AnimatedDottedBackground;
