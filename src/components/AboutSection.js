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
            ما هو طيرة هاك؟
          </motion.h2>
          
          <div className="futuristic-grid">
            {/* Animated Visual - Left */}
            <motion.div className="center-visual" variants={imageVariants}>
              <div className="visual-container">
                <div className="hackathon-journey-circle">
                  <div className="journey-step step-1">
                    <div className="step-circle">
                      <span className="step-emoji">👥</span>
                    </div>
                    <div className="step-label">تكوين فريق</div>
                  </div>
                  
                  <div className="journey-step step-2">
                    <div className="step-circle">
                      <span className="step-emoji">🎯</span>
                    </div>
                    <div className="step-label">إيجاد المشاكل</div>
                  </div>
                  
                  <div className="journey-step step-3">
                    <div className="step-circle">
                      <span className="step-emoji">💡</span>
                    </div>
                    <div className="step-label">إنشاء الحلول</div>
                  </div>
                  
                  <div className="journey-step step-4">
                    <div className="step-circle">
                      <span className="step-emoji">🌟</span>
                    </div>
                    <div className="step-label">إحداث التأثير</div>
                  </div>
                  
                  {/* Center element */}
                  <div className="journey-center">
                    <div className="center-text">رحلة الابتكار</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Combined Content - Right */}
            <motion.div className="combined-content" variants={itemVariants}>
              <div className="welcome-message glass-effect">
                <h3>🎉 رسالة ترحيبية</h3>
                <p>
                  يسعدنا انضمامكم إلى هذا اليوم المميز المليء بالإبداع، التعاون، والتجديد. خلال الساعات القادمة ستتاح لكم الفرصة للعمل مع فرق متنوعة، استكشاف أفكار جديدة، وتطوير حلول مبتكرة للتحدي المطروح. نتمنى أن تستفيدوا من الورشات، الدعم من الموجهين، وأجواء العمل الجماعي لتقديم أفضل ما لديكم. تذكّروا أن روح الهاكاثون تقوم على المشاركة، التعلّم، والاستمتاع بالتجربة. نتطلع لرؤية أفكاركم تتحوّل إلى مشاريع حقيقية، وبالتوفيق للجميع!
                </p>
              </div>
              
              <div className="about-card">
                <h3>بناء التكنولوجيا من أجل الخير</h3>
                <p>
                  هاكاثون التأثير الاجتماعي يجمع المبدعين لإنشاء حلول تقنية تعالج التحديات الحقيقية في العالم. 
                  خلال يوم واحد من التعاون والابتكار، ستطور مع فرق متنوعة حلولاً يمكنها إحداث فرق حقيقي في حياة الناس.
                </p>
                
                <div className="impact-stats">
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">مشارك</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1</div>
                    <div className="stat-label">يوم</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">تأثير</div>
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
