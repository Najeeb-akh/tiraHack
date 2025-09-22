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

  // eslint-disable-next-line no-unused-vars
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

  // Sponsors data with package tiers
  const sponsors = [
    // Gold package (5000)
    { 
      name: 'اكاديمية القاسمي الطيرة', 
      logo: '/qassimiacademyimage.jpeg', 
      tier: 'gold',
      package: 'Gold Package'
    },
    { 
      name: 'هات', 
      logo: '/haatlogo.png', 
      tier: 'gold',
      package: 'Gold Package'
    },
    { 
      name: 'مطبعة الطيرة 👑', 
      logo: '/tiraprintlogo.png', 
      tier: 'gold',
      package: 'Gold Package'
    },
    // Silver package (3500)
    { 
      name: 'شام كافيه', 
      logo: '/shamlogo.png', 
      tier: 'silver',
      package: 'Silver Package'
    },
    { 
      name: 'Boost', 
      logo: '/boost_logo.jpeg', 
      tier: 'silver',
      package: 'Silver Package'
    },
    { 
      name: 'Be pharm', 
      logo: '/be_logo.png', 
      tier: 'silver',
      package: 'Silver Package'
    },
    { 
      name: 'كمبيوتر الاقصى', 
      logo: '/logo.png', 
      tier: 'silver',
      package: 'Silver Package'
    },
    { 
      name: 'Apex', 
      logo: '/apex-logo.png', 
      tier: 'silver',
      package: 'Silver Package'
    },
    // Bronze package (2000)
    { 
      name: 'حلويات اخوان سمارة', 
      logo: '/samara_logo.pdf', 
      tier: 'bronze',
      package: 'Bronze Package'
    },
    { 
      name: 'مجوهرات الريان', 
      logo: '/rayan_jwelery.jpg', 
      tier: 'bronze',
      package: 'Bronze Package'
    },
    { 
      name: 'المركز الجماهيري الطيرة', 
      logo: '/mtnas tiralogo.jpeg', 
      tier: 'bronze',
      package: 'Bronze Package'
    },
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
            رعاتنا الكرام
          </motion.h2>
          <motion.p className="sponsors-subtitle" variants={itemVariants}>
            شكراً للمنظمات التي تجعل Givehack ممكناً!
          </motion.p>

          {sponsors.length > 0 ? (
            <div className="sponsors-grid">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  className={`sponsor-card sponsor-${sponsor.tier}`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className={`sponsor-logo-circle sponsor-circle-${sponsor.tier} ${sponsor.name === 'مطبعة الطيرة 👑' ? 'loyalty-special' : ''}`}>
                    <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
                  </div>
                  <h3 className="sponsor-name">{sponsor.name.replace(' 👑', '')}</h3>
                  <p className="sponsor-package">{sponsor.package}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div className="sponsors-coming-soon" variants={itemVariants}>
              <div className="coming-soon-icon">🤝</div>
              <h3>الرعاة قريباً!</h3>
              <p>نحن نبحث بنشاط عن شركاء يشاركوننا رؤيتنا للتغيير الاجتماعي. مهتم بدعم Givehack؟</p>
              <a href="mailto:contact@givehack.com" className="cta-button">كن راعياً</a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
