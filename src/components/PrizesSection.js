import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './PrizesSection.css';

const PrizesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const podiumPrizes = [
    {
      place: 2,
      title: "2nd Place",
      subtitle: "Innovation Excellence",
      prize: "₪3,000",
      icon: "🥈",
      description: "Outstanding creative solution with strong impact potential",
      color: "var(--accent-coral)",
      gradient: "linear-gradient(135deg, #C0C0C0, var(--accent-coral))",
      height: "380px"
    },
    {
      place: 1,
      title: "1st Place",
      subtitle: "Best Overall Impact",
      prize: "₪5,000",
      icon: "🥇",
      description: "The solution with the most comprehensive social impact and innovation",
      color: "var(--primary-indigo)",
      gradient: "linear-gradient(135deg, #FFD700, var(--primary-indigo))",
      height: "420px"
    },
    {
      place: 3,
      title: "3rd Place",
      subtitle: "Rising Impact",
      prize: "₪2,000",
      icon: "🥉",
      description: "Promising solution with great potential for social change",
      color: "var(--highlight-emerald)",
      gradient: "linear-gradient(135deg, #CD7F32, var(--highlight-emerald))",
      height: "340px"
    }
  ];



  return (
    <section className="prizes-section section" id="prizes">
      <div className="container">
        <motion.div 
          ref={ref}
          className="prizes-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Prizes & Recognition
          </motion.h2>
          
          <motion.p className="prizes-subtitle" variants={cardVariants}>
            Celebrating innovation, impact, and meaningful change
          </motion.p>
          
          <motion.div className="prizes-announcement" variants={cardVariants}>
            <div className="announcement-card">
              <div className="announcement-icon">💰</div>
              <div className="announcement-content">
                <h3>₪10,000 Total Prize Pool!</h3>
                <p>Compete for amazing prizes and recognition while making a positive impact on society!</p>
              </div>
            </div>
          </motion.div>
          
          <div className="podium-container">
            <div className="podium-grid">
              {podiumPrizes.map((prize, index) => (
                <motion.div 
                  key={index}
                  className={`podium-card place-${prize.place}`}
                  style={{ height: prize.height }}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="podium-number">{prize.place}</div>
                  
                  <div className="prize-icon-container">
                    <div 
                      className="prize-icon-bg"
                      style={{ background: prize.gradient }}
                    ></div>
                    <div className="prize-icon">{prize.icon}</div>
                  </div>
                  
                  <div className="prize-content">
                    <h3 className="prize-title">{prize.title}</h3>
                    <h4 className="prize-subtitle">{prize.subtitle}</h4>
                    <div className="prize-amount">{prize.prize}</div>
                    <p className="prize-description">{prize.description}</p>
                  </div>
                  
                  <div className="prize-glow" style={{ background: prize.gradient }}></div>
                </motion.div>
              ))}
            </div>
          </div>
          

          
          <motion.div className="additional-perks" variants={cardVariants}>
            <h3>Additional Perks for All Participants</h3>
            <div className="perks-grid">
              <div className="perk-item">
                <span className="perk-icon">🎓</span>
                <span className="perk-text">Mentorship Opportunities</span>
              </div>
              <div className="perk-item">
                <span className="perk-icon">🌐</span>
                <span className="perk-text">Networking Events</span>
              </div>
              <div className="perk-item">
                <span className="perk-icon">📜</span>
                <span className="perk-text">Certificates of Participation</span>
              </div>
              <div className="perk-item">
                <span className="perk-icon">🚀</span>
                <span className="perk-text">Startup Incubator Access</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
