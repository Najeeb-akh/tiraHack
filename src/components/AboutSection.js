import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <motion.div 
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            What is a Social Impact Hackathon?
          </motion.h2>
          
          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-card">
                <h3>Building Technology for Good</h3>
                <p>
                  A social impact hackathon is where passionate innovators come together to create 
                  technology solutions that address real-world challenges. It's not just about coding—it's 
                  about combining creativity, empathy, and technical skills to build meaningful change.
                </p>
                
                <h3>Community-Driven Innovation</h3>
                <p>
                  During this intensive one-day event, you'll collaborate with diverse teams, learn from 
                  mentors, and develop solutions that can make a genuine difference in people's lives. 
                  Whether it's education, healthcare, environment, or social empowerment—your ideas 
                  have the power to create lasting impact.
                </p>
                
                <div className="impact-stats">
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Participants</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1</div>
                    <div className="stat-label">Day</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">Impact</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="about-visual" variants={imageVariants}>
              <div className="visual-container">
                <div className="hackathon-journey-circle">
                  <div className="journey-step step-1">
                    <div className="step-circle">
                      <span className="step-emoji">👥</span>
                    </div>
                    <div className="step-label">Team Up</div>
                  </div>
                  
                  <div className="journey-step step-2">
                    <div className="step-circle">
                      <span className="step-emoji">🎯</span>
                    </div>
                    <div className="step-label">Find Problems</div>
                  </div>
                  
                  <div className="journey-step step-3">
                    <div className="step-circle">
                      <span className="step-emoji">💡</span>
                    </div>
                    <div className="step-label">Create Solutions</div>
                  </div>
                  
                  <div className="journey-step step-4">
                    <div className="step-circle">
                      <span className="step-emoji">🌟</span>
                    </div>
                    <div className="step-label">Make Impact</div>
                  </div>
                  
                  {/* Center element */}
                  <div className="journey-center">
                    <div className="center-text">Innovation Journey</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
