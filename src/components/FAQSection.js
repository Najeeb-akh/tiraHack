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
      question: "من يمكنه المشاركة في الهاكاثون؟",
      answer: "هاكاثون طيرة مفتوح لجميع طلاب الجامعة، بغض النظر عن تخصصهم أو خلفيتهم التقنية. نحن نرحب بالمشاركين من جميع التخصصات - سواء كنت تدرس علوم الحاسوب أو إدارة الأعمال أو التصميم أو العلوم الاجتماعية أو أي مجال آخر. يمكن أن تكون الفرق متعددة التخصصات، ونحن نشجع وجهات النظر المتنوعة!"
    },
    {
      question: "هل أحتاج إلى فريق للتسجيل؟",
      answer: "لا، يمكنك التسجيل كفرد! سيكون لدينا جلسات تكوين فرق خلال اليوم الأول حيث يمكنك مقابلة مشاركين آخرين وتكوين فرق بناءً على الاهتمامات المشتركة والمهارات المتكاملة. يمكن أن تضم الفرق 3-5 مشاركين، ونحن نشجع خلط مجموعات مهارات وخلفيات مختلفة."
    },
    {
      question: "ماذا يجب أن أحضر إلى الهاكاثون؟",
      answer: "أحضر حاسوبك المحمول والشواحن وأي أدوات تطوير تفضلها وموقف إيجابي! سنوفر الوجبات والوجبات الخفيفة والواي فاي ومساحة العمل. إذا كان لديك أي أجهزة خاصة أو مستشعرات تريد استخدامها في مشروعك، لا تتردد في إحضارها. الأهم من ذلك، أحضر إبداعك وشغفك للتأثير الاجتماعي!"
    },
    {
      question: "ماذا لو لم تكن لدي مهارات تقنية؟",
      answer: "ممتاز! نحن نحتاج إلى أشخاص ذوي مهارات متنوعة. المشاركون غير التقنيين يجلبون وجهات نظر قيمة حول تجربة المستخدم واستراتيجية الأعمال والتفكير التصميمي والخبرة في المجال وتحديد المشاكل. العديد من الفرق الفائزة لديها أعضاء غير تقنيين يساهمون بشكل كبير في نجاح المشروع وتأثيره."
    },
    {
      question: "كيف يتم تقييم المشاريع؟",
      answer: "يتم تقييم المشاريع بناءً على إمكانية التأثير الاجتماعي والابتكار والتنفيذ التقني وجودة العرض والجدوى. تضم لجنتنا خبراء في الصناعة وقادة في مجال التأثير الاجتماعي وأعضاء هيئة تدريس. نحن نعطي أولوية للحلول التي تعالج مشاكل حقيقية ولديها إمكانية للتغيير ذي المعنى."
    },
    {
      question: "هل يمكنني العمل على مشروع موجود؟",
      answer: "نحن نشجع البدء من نقطة جديدة خلال الهاكاثون لضمان العدالة وزيادة التعلم إلى الحد الأقصى. ومع ذلك، يمكنك البناء على بحوث سابقة واستخدام واجهات برمجة تطبيقات / أطر عمل موجودة والاستفادة من المعرفة المسبقة. المهم هو أن التطوير والابتكار الرئيسي يجب أن يحدث خلال الحدث."
    },
    {
      question: "ماذا يحدث بعد الهاكاثون؟",
      answer: "يحصل الفائزون على جوائز وتقدير، لكن هذه مجرد بداية! بما أن هذا هو العام الأول لهاكاثون طيرة، فإن الأفكار المبتكرة التي ستولد هنا قد تصبح مشاريع حقيقية ناجحة وتضيء في السوق. هذا الهاكاثون قد يكون نقطة البداية لمشاريع ستغير المستقبل!"
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
            الأسئلة الشائعة
          </motion.h2>
          
          <motion.p className="faq-subtitle" variants={itemVariants}>
            لديك أسئلة؟ لدينا الإجابات! ما زلت تحتاج مساعدة؟ تواصل معنا في أي وقت.
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
                <h4>ما زلت لديك أسئلة؟</h4>
                <p>لا تتردد في التواصل مع فريق التنظيم</p>
                <a href="mailto:tirahackathon@gmail.com" className="contact-email">
                  tirahackathon@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Gravnix promotional banner */}
          <motion.div className="gravnix-branding" variants={itemVariants}>
            <motion.div
              className="gravnix-banner"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.open('https://gravnix.com', '_blank')}
            >
              <div className="banner-content">
                <div className="banner-left">
                  <span className="banner-tagline">Powered by</span>
                  <span className="banner-brand">Gravnix</span>
                </div>
                <div className="banner-right">
                  <span className="banner-cta">Visit gravnix.com</span>
                  <span className="banner-arrow">→</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
