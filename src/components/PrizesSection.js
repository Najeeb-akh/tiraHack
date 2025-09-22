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
      title: "المركز الثاني",
      subtitle: "تميز في الابتكار",
      prize: "3,000 ₪",
      icon: "🥈",
      description: "حل إبداعي متميز مع إمكانية تأثير قوية",
      color: "var(--primary-indigo)",
      gradient: "linear-gradient(135deg, var(--primary-indigo), rgba(75, 79, 229, 0.6))",
      height: "380px"
    },
    {
      place: 1,
      title: "المركز الأول",
      subtitle: "أفضل تأثير شامل",
      prize: "5,000 ₪",
      icon: "🥇",
      description: "الحل ذو التأثير الاجتماعي والابتكار الأكثر شمولية",
      color: "var(--primary-indigo)",
      gradient: "linear-gradient(135deg, var(--primary-indigo), rgba(75, 79, 229, 0.8))",
      height: "420px"
    },
    {
      place: 3,
      title: "المركز الثالث",
      subtitle: "تأثير صاعد",
      prize: "2,000 ₪",
      icon: "🥉",
      description: "حل واعد مع إمكانية عظيمة للتغيير الاجتماعي",
      color: "var(--primary-indigo)",
      gradient: "linear-gradient(135deg, var(--primary-indigo), rgba(75, 79, 229, 0.4))",
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
            الجوائز والتقدير
          </motion.h2>
          
          <motion.p className="prizes-subtitle" variants={cardVariants}>
            احتفالاً بالابتكار والتأثير والتغيير ذي المعنى
          </motion.p>
          
          <motion.div className="prizes-announcement" variants={cardVariants}>
            <div className="announcement-card">
              <div className="announcement-icon">💰</div>
              <div className="announcement-content">
                <h3>مجموع جوائز 10,000 ₪!</h3>
                <p>تنافس على جوائز مذهلة وتقدير بينما تصنع تأثيراً إيجابياً على المجتمع!</p>
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
            <h3>مزايا إضافية لجميع المشاركين</h3>
            <div className="perks-grid">
              <div className="perk-item">
                <div className="perk-icon">🌐</div>
                <div className="perk-content">
                  <h4>فعاليات التواصل</h4>
                  <p>بناء شبكة علاقات قوية مع المطورين والمصممين ورجال الأعمال</p>
                </div>
              </div>
              <div className="perk-item">
                <div className="perk-icon">🎓</div>
                <div className="perk-content">
                  <h4>فرص الإرشاد</h4>
                  <p>التوجيه من الخبراء في مجال التقنية وريادة الأعمال</p>
                </div>
              </div>
              <div className="perk-item">
                <div className="perk-icon">💡</div>
                <div className="perk-content">
                  <h4>ورش عمل متخصصة</h4>
                  <p>تعلم مهارات تقنية متقدمة وتقنيات حديثة من خبراء الصناعة</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
