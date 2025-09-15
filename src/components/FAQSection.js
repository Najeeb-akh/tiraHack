import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FAQSection.css';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "The TIRA Hackathon is open to all university students, regardless of their major or technical background. We welcome participants from all disciplines - whether you're studying computer science, business, design, social sciences, or any other field. Teams can be interdisciplinary, and we encourage diverse perspectives!"
    },
    {
      question: "Do I need to have a team to register?",
      answer: "No, you can register as an individual! We'll have team formation sessions during the first day where you can meet other participants and form teams based on shared interests and complementary skills. Teams can have 2-5 members, and we encourage mixing different skill sets and backgrounds."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, any development tools you prefer, and a positive attitude! We'll provide meals, snacks, Wi-Fi, and workspace. If you have any special hardware or sensors you'd like to use for your project, feel free to bring them. Most importantly, bring your creativity and passion for social impact!"
    },
    {
      question: "What if I don't have technical skills?",
      answer: "Perfect! We need people with diverse skills. Non-technical participants bring valuable perspectives on user experience, business strategy, design thinking, domain expertise, and problem identification. Many winning teams have non-technical members who contribute significantly to the project's success and impact."
    },
    {
      question: "Are there any costs to participate?",
      answer: "No, participation is completely free! We provide all meals, snacks, workspace, and materials needed during the hackathon. We also provide certificates, swag, and access to mentors and workshops at no cost to participants."
    },
    {
      question: "How are projects judged?",
      answer: "Projects are evaluated based on social impact potential, innovation, technical implementation, presentation quality, and feasibility. Our panel includes industry experts, social impact leaders, and faculty members. We prioritize solutions that address real problems and have potential for meaningful change."
    },
    {
      question: "Can I work on an existing project?",
      answer: "We encourage starting fresh during the hackathon to ensure fairness and maximize learning. However, you can build upon previous research, use existing APIs/frameworks, and leverage prior knowledge. The key is that the main development and innovation should happen during the event."
    },
    {
      question: "What happens after the hackathon?",
      answer: "Winners receive prizes and recognition, but that's just the beginning! We provide ongoing mentorship opportunities, connections to startup incubators, and potential funding pathways for promising projects. Many past participants have turned their hackathon projects into real ventures or research initiatives."
    }
  ];

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <motion.div 
          ref={ref}
          className="faq-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p className="faq-subtitle" variants={itemVariants}>
            Got questions? We've got answers! Still need help? Contact us anytime.
          </motion.p>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`faq-item ${openFAQ === index ? 'open' : ''}`}
                variants={itemVariants}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-arrow">
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ↓
                    </motion.div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="faq-answer-content">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <motion.div className="faq-contact" variants={itemVariants}>
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <div className="contact-text">
                <h4>Still have questions?</h4>
                <p>Feel free to reach out to our organizing team</p>
                <a href="mailto:tira.hackathon@university.edu" className="contact-email">
                  tira.hackathon@university.edu
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
