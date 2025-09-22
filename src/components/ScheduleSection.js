import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ScheduleSection.css';

const ScheduleSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const generateCalendarEvent = () => {
    // Event details
    const event = {
      title: 'TiraHack 2025 - هاكاثون الطيرة',
      description: 'انضموا إلينا في هاكاثون طيرة 2025، حيث يلتقي المبدعون والمبرمجون والمصممون وروّاد الأعمال لتطوير حلول مبتكرة تخدم المجتمع.',
      location: 'Tira',
      startDate: '20251011T080000', // October 11, 2025 at 8:00 AM
      endDate: '20251011T193000',   // October 11, 2025 at 7:30 PM
      uid: 'tirahack-2025@tirahack.com'
    };

    // Create .ics file content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TiraHack//TiraHack 2025//EN
BEGIN:VEVENT
UID:${event.uid}
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${event.startDate}
DTEND:${event.endDate}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    return icsContent;
  };

  const handleAddToCalendar = () => {
    const icsContent = generateCalendarEvent();
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'TiraHack-2025.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scheduleData = [
    {
      day: "يوم واحد",
      title: "",
      date: "11 أكتوبر 2025",
      events: [
        { time: "08:30-09:00", event: "استقبال وفطور + تسجيل وتوزيع بطاقات أسماء", icon: "☕" },
        { time: "09:00-09:20", event: "افتتاحية الحدث بالقاعة", icon: "🎤" },
        { time: "09:20", event: "بدء العمل", icon: "🚀" },
        { time: "11:00-11:45", event: "ورشة 1 (سيتم الإعلان عنها لاحقاً)", icon: "📚" },
        { time: "13:00-13:45", event: "استراحة غداء", icon: "🍽️" },
        { time: "15:00-15:45", event: "ورشة 2 (سيتم الإعلان عنها لاحقاً)", icon: "📚" },
        { time: "17:00-18:30", event: "استمرار العمل", icon: "💻" },
        { time: "18:30", event: "لجنة تحكيم أولية", icon: "⚖️" },
        { time: "19:30", event: "إعلان الفائزين + اختتام", icon: "🏆" }
      ],
      color: "var(--primary-indigo)"
    }
  ];

  return (
    <section className="schedule-section section" id="schedule">
      <div className="container">
        <motion.div 
          ref={ref}
          className="schedule-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            📅 جدول الهاكاثون
          </motion.h2>
          
          <div className="timeline">
            {scheduleData.map((day, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-content">
                  <div className="day-card">
                    <div className="day-header">
                      <h3 className="day-title">{day.title}</h3>
                      <p className="day-subtitle">{day.day}</p>
                      <p className="day-date">{day.date}</p>
                    </div>
                    
                    <div className="events-list">
                      {day.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="event-item">
                          <div className="event-icon">{event.icon}</div>
                          <div className="event-details">
                            <div className="event-time">{event.time}</div>
                            <div className="event-name">{event.event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div className="schedule-actions" variants={itemVariants}>
            <div className="cta-content">
              <h3 className="cta-title">لا تنسى الموعد!</h3>
              <p className="cta-description">أضف الهاكاثون إلى تقويمك لتتذكر الموعد المهم</p>
            </div>
            <button 
              className="calendar-btn"
              onClick={handleAddToCalendar}
            >
              📅 أضف إلى التقويم
            </button>
            <p className="schedule-note">📱 جميع التحديثات المباشرة ستتم مشاركتها في مجموعة الواتساب</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
