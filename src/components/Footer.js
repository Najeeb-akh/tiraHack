import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/tira-university',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/tira_hackathon',
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/tira_hackathon',
      color: '#1DA1F2'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:tira.hackathon@university.edu',
      color: '#EA4335'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Themes', href: '#themes' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <motion.div 
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="logo-icon">🚀</span>
                <div className="logo-text">
                  <h3>TIRA Hackathon 2025</h3>
                  <p>Innovation for Social Change</p>
                </div>
              </motion.div>
              
              <p className="footer-description">
                Join us in creating technology solutions that make a positive impact on society. 
                Together, we can build a better future through innovation and collaboration.
              </p>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ 
                      scale: 1.1,
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="footer-links">
              <div className="links-section">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="links-section">
                <h4>Important Info</h4>
                <ul>
                  <li><a href="#faq">Registration Details</a></li>
                  <li><a href="#schedule">Event Timeline</a></li>
                  <li><a href="mailto:tira.hackathon@university.edu">Contact Support</a></li>
                  <li><a href="#about">Code of Conduct</a></li>
                </ul>
              </div>
              
              <div className="links-section">
                <h4>Event Details</h4>
                <div className="event-info">
                  <div className="info-item">
                    <span className="info-icon">📅</span>
                    <span>March 15, 2025</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span>TIRA University Campus</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⏰</span>
                    <span>One Day of Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            
            <div className="footer-bottom-content">
              <div className="footer-credits">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Made with <span className="heart">❤️</span> by TIRA Academics
                </motion.p>
                <motion.p
                  className="developer-credit"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Developed by <a href="https://gravnix.com" target="_blank" rel="noopener noreferrer" className="developer-link">gravnix.com</a>
                </motion.p>
                <p className="copyright">
                  © {currentYear} TIRA University. All rights reserved.
                </p>
              </div>
              
              <div className="footer-legal">
                <a href="/privacy">Privacy Policy</a>
                <span className="separator">•</span>
                <a href="/terms">Terms of Service</a>
                <span className="separator">•</span>
                <a href="/accessibility">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
