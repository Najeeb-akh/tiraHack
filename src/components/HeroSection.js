import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [confetti, setConfetti] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Set hackathon date (one-day event: October 11, 2025 at 8:00 AM)
    const hackathonDate = new Date('2025-10-11T08:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hackathonEmojis = ['🚀', '💻', '⚡', '🎯', '🏆', '💡', '🔥', '⭐', '🎉', '💎', '🌟', '🎊', '💫', '🎈', '🎁', '🏅', '🎖️', '🥇', '🎪', '🎨'];

  const generateConfetti = () => {
    const newConfetti = [];
    const centerX = window.innerWidth / 2;
    
    // Reduced number of particles for better performance
    for (let i = 0; i < 25; i++) {
      // Start from center top with some spread
      const startX = centerX + (Math.random() - 0.5) * 400; // Spread ±200px from center
      // Start from above the screen
      const startY = -50;
      // End at random position below the screen with more spread
      const endX = startX + (Math.random() - 0.5) * 300; // More horizontal drift
      const endY = window.innerHeight + 100;
      
      newConfetti.push({
        id: i,
        emoji: hackathonEmojis[Math.floor(Math.random() * hackathonEmojis.length)],
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 2 + 2 // 2-4 seconds (reduced duration)
      });
    }
    setConfetti(newConfetti);
    setShowConfetti(true);
    
    // Hide confetti after 6 seconds (reduced time)
    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Logo clicked!'); // Debug log
    generateConfetti();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="wave-dots-container">
          <img src="/wave-dots.svg" alt="Futuristic wave dots" className="wave-dots-svg" />
        </div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="hero-logo" 
            variants={itemVariants}
            onClick={handleLogoClick}
            onTouchStart={handleLogoClick}
            style={{ cursor: 'pointer' }}
          >
            <div className="gradient-circle"></div>
            <img 
              src="/logo black.svg" 
              alt="هاكاثون الطيرة" 
              className="main-logo" 
            />
          </motion.div>
          
          <motion.div className="countdown-timer" variants={itemVariants}>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.seconds}</div>
              <div className="countdown-label">ثوان</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.minutes}</div>
              <div className="countdown-label">دقائق</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.hours}</div>
              <div className="countdown-label">ساعات</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.days}</div>
              <div className="countdown-label">أيام</div>
            </div>
          </motion.div>
          
          <motion.div className="hero-cta" variants={itemVariants}>
            <a 
              href="https://forms.gle/DMAZ4LU6XizMqmacA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary hero-btn"
            >
سجل الآن
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="confetti-container">
          {confetti.map((item) => (
            <motion.div
              key={item.id}
              className="confetti-item"
              initial={{
                x: item.startX,
                y: item.startY,
                rotate: item.rotation,
                scale: item.scale,
                opacity: 1
              }}
              animate={{
                x: item.endX,
                y: item.endY,
                rotate: item.rotation + 360,
                opacity: 0
              }}
              transition={{
                duration: item.duration,
                ease: "easeOut"
              }}
            >
              {item.emoji}
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
