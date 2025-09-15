import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SponsorsSection.css';

const SponsorsSection = () => {
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

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Placeholder sponsors - you can replace with actual sponsor data
  const sponsors = [
    // { name: 'Sponsor 1', logo: '/path/to/logo1.png', link: 'https://sponsor1.com' },
    // { name: 'Sponsor 2', logo: '/path/to/logo2.png', link: 'https://sponsor2.com' },
  ];

  return (
    <section className="sponsors-section section" id="sponsors">
      <div className="container">
        <motion.div 
          ref={ref}
          className="sponsors-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our Valued Sponsors
          </motion.h2>
          <motion.p className="sponsors-subtitle" variants={itemVariants}>
            Thank you to the organizations making Givehack possible!
          </motion.p>

          {sponsors.length > 0 ? (
            <div className="sponsors-grid">
              {sponsors.map((sponsor, index) => (
                <motion.a
                  key={index}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-card"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="sponsor-logo-circle">
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                  </div>
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                </motion.a>
              ))}
            </div>
          ) : (
            <motion.div className="sponsors-coming-soon" variants={itemVariants}>
              <div className="coming-soon-icon">🤝</div>
              <h3>Sponsors Coming Soon!</h3>
              <p>We are actively seeking partners who share our vision for social change. Interested in supporting Givehack?</p>
              <a href="mailto:contact@givehack.com" className="cta-button">Become a Sponsor</a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
