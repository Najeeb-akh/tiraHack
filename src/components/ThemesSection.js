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
      title: "دعم الجيل الذهبي",
      icon: "👴",
      description: "تطبيقات تربط الشباب بالجيل الذهبي لخدمات التوصيل والتطوع، مع التركيز على دعم كبار السن",
      examples: [
        "تطبيق يربط شباب مع رخصة قيادة والجيل الذهبي لهدف التوصيلات",
        "تطبيق يركز الاماكن التطوعية المتاحة للجيل الذهبي"
      ],
      color: "var(--primary-indigo)",
      gradient: "linear-gradient(135deg, #4B4FE5 0%, #7C3AED 100%)"
    },
    {
      title: "المشاركة المجتمعية",
      icon: "🤝",
      description: "حلول لتعزيز الانتماء والعطاء المجتمعي، مع التركيز على إطار شبابي تطوعي متطور",
      examples: [
        "نقص اطر شبابية تطوعية",
        "حل لتعزيز الانتماء والعطاء للمشاركة المجتمعية بالبلد"
      ],
      color: "var(--accent-coral)",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)"
    },
    {
      title: "البيئة والاستدامة",
      icon: "🌱",
      description: "مشاريع بيئية مستدامة تركز على الحفاظ على البيئة وتطوير حلول صديقة للطبيعة",
      examples: [
        "تطبيق لتتبع البصمة الكربونية الشخصية والمجتمعية",
        "منصة لإدارة النفايات وإعادة التدوير",
        "نظام مراقبة جودة الهواء والماء في المدن"
      ],
      color: "var(--highlight-emerald)",
      gradient: "linear-gradient(135deg, #28C76F 0%, #48BB78 100%)"
    },
    {
      title: "التربية والتعليم",
      icon: "📚",
      description: "حلول تعليمية مبتكرة تركز على تطوير المناهج والطرق التعليمية الحديثة",
      examples: [
        "منصة تعليمية تفاعلية باللغة العربية",
        "تطبيق ألعاب تعليمية للأطفال والمراهقين",
        "نظام تقييم وتطوير المهارات الشخصية"
      ],
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
            موضوعات الهاكاثون
          </motion.h2>
          
          <motion.p className="themes-subtitle" variants={cardVariants}>
            اختر موضوعاً يتناسب مع شغفك للتأثير الاجتماعي
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
                      <ul className="theme-examples">
                        {theme.examples.map((example, idx) => (
                          <li key={idx} className="theme-example">
                            <span className="example-bullet">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
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
                <h4>امزج ووافق</h4>
                <p>لا تتردد في دمج الموضوعات أو اقتراح نهجك المبتكر الخاص للتأثير الاجتماعي!</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemesSection;
