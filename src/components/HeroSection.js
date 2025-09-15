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

  useEffect(() => {
    // Set hackathon date (one-day event: October 12, 2025 at 8:00 AM)
    const hackathonDate = new Date('2025-10-12T08:00:00').getTime();

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
        <div className="hero-illustration">
          <div className="floating-icon heart">💝</div>
          <div className="floating-icon lightbulb">💡</div>
          <div className="floating-icon hands">🤝</div>
          <div className="floating-icon leaf">🌱</div>
          <div className="floating-icon tech">⚡</div>
          <div className="floating-icon people">👥</div>
          <div className="floating-icon health">🏥</div>
          <div className="floating-icon education">🎓</div>
          <div className="floating-icon recycle">♻️</div>
          <div className="floating-icon home">🏠</div>
          <div className="floating-icon innovation">🚀</div>
        </div>
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Givehack
          </motion.h1>
          
          <motion.h2 className="hero-secondary-title" variants={itemVariants}>
            TIRA Hackathon 2025
          </motion.h2>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Technology. Compassion. Impact.
          </motion.p>
          
          <motion.p className="hero-description" variants={itemVariants}>
            Innovation for Social Change
          </motion.p>
          
          <motion.div className="countdown-timer" variants={itemVariants}>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </motion.div>
          
          <motion.div className="hero-cta" variants={itemVariants}>
            <a 
              href="https://forms.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary hero-btn"
            >
              Register Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
