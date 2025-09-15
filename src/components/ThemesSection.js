import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ThemesSection.css';

const ThemesSection = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const themes = [
    {
      title: "Education",
      icon: "📚",
      description: "Innovative learning solutions, educational accessibility, and skill development platforms",
      examples: ["E-learning platforms", "Educational games", "Accessibility tools", "Skill assessment"],
      color: "var(--primary-indigo)",
      gradient: "linear-gradient(135deg, #4B4FE5 0%, #7C3AED 100%)"
    },
    {
      title: "Health & Wellness",
      icon: "🏥",
      description: "Healthcare innovation, mental health support, and wellness technology solutions",
      examples: ["Telemedicine apps", "Mental health tools", "Fitness tracking", "Health monitoring"],
      color: "var(--accent-coral)",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)"
    },
    {
      title: "Environment",
      icon: "🌱",
      description: "Sustainability solutions, climate action, and environmental conservation projects",
      examples: ["Carbon tracking", "Waste reduction", "Renewable energy", "Conservation apps"],
      color: "var(--highlight-emerald)",
      gradient: "linear-gradient(135deg, #28C76F 0%, #48BB78 100%)"
    },
    {
      title: "Social Empowerment",
      icon: "🤝",
      description: "Community building, social justice, inclusion, and empowerment initiatives",
      examples: ["Community platforms", "Volunteer matching", "Social impact tracking", "Advocacy tools"],
      color: "var(--primary-indigo)",
      gradient: "linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)"
    }
  ];

  return (
    <section className="themes-section section" id="themes">
      <div className="container">
        <motion.div 
          ref={ref}
          className="themes-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Hackathon Themes
          </motion.h2>
          
          <motion.p className="themes-subtitle" variants={cardVariants}>
            Choose a theme that resonates with your passion for social impact
          </motion.p>
          
          <div className="themes-grid">
            {themes.map((theme, index) => (
              <motion.div 
                key={index}
                className="theme-card"
                variants={cardVariants}
              >
                <div className="theme-card-inner">
                  {/* Front of card */}
                  <div className="theme-card-front">
                    <div className="theme-icon-container">
                      <div 
                        className="theme-icon-bg"
                        style={{ background: theme.gradient }}
                      ></div>
                      <div className="theme-icon">{theme.icon}</div>
                    </div>
                    <h3 className="theme-title">{theme.title}</h3>
                    <p className="theme-description">{theme.description}</p>
                    <div className="flip-indicator">
                      <span>Hover to explore</span>
                      <div className="flip-arrow">↻</div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="theme-card-back">
                    <div 
                      className="theme-back-header"
                      style={{ background: theme.gradient }}
                    >
                      <div className="theme-back-icon">{theme.icon}</div>
                      <h3 className="theme-back-title">{theme.title}</h3>
                    </div>
                    <div className="theme-back-content">
                      <h4>Project Ideas:</h4>
                      <ul className="theme-examples">
                        {theme.examples.map((example, idx) => (
                          <li key={idx} className="theme-example">
                            <span className="example-bullet">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                      <div className="theme-back-footer">
                        <span>Get creative and make an impact!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div className="themes-note" variants={cardVariants}>
            <div className="note-content">
              <div className="note-icon">💡</div>
              <div className="note-text">
                <h4>Mix & Match</h4>
                <p>Feel free to combine themes or propose your own innovative approach to social impact!</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemesSection;
