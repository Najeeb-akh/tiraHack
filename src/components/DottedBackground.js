import React from 'react';
import './DottedBackground.css';

const DottedBackground = () => {
  // Generate dots in a grid pattern
  const generateDots = () => {
    const dots = [];
    const rows = 25;
    const cols = 40;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const id = `dot-${row}-${col}`;
        const delay = (row * col) * 0.01; // Staggered animation delay
        
        dots.push(
          <div
            key={id}
            className="dot"
            style={{
              '--row': row,
              '--col': col,
              '--delay': `${delay}s`,
            }}
          />
        );
      }
    }
    
    return dots;
  };

  return (
    <div className="dotted-background">
      <div className="dots-container">
        {generateDots()}
      </div>
    </div>
  );
};

export default DottedBackground;
