import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ScheduleSection.css';

const ScheduleSection = () => {
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
      day: "One Day",
      title: "Innovation Day",
      date: "March 15, 2025",
      events: [
        { time: "??:?? AM", event: "Registration & Welcome", icon: "🎯" },
        { time: "??:?? AM", event: "Opening Ceremony", icon: "🎤" },
        { time: "??:?? AM", event: "Keynote: Tech for Good", icon: "💡" },
        { time: "??:?? PM", event: "Team Formation & Ideation", icon: "🤝" },
        { time: "??:?? PM", event: "Hack Time & Development", icon: "💻" },
        { time: "??:?? PM", event: "Mentorship & Workshops", icon: "👥" },
        { time: "??:?? PM", event: "Project Presentations", icon: "🎤" },
        { time: "??:?? PM", event: "Awards & Closing", icon: "🏆" }
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
            Event Schedule
          </motion.h2>
          
          <motion.div className="schedule-announcement" variants={itemVariants}>
            <div className="announcement-card">
              <div className="announcement-icon">📅</div>
              <div className="announcement-content">
                <h3>Detailed Schedule Coming Soon!</h3>
                <p>We're finalizing an exciting one-day program packed with innovation, collaboration, and impact. The complete schedule will be announced closer to the event date.</p>
              </div>
            </div>
          </motion.div>
          
          <div className="timeline timeline-preview">
            <motion.div 
              className="timeline-overlay-message"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="overlay-icon">📅✨</div>
              <h3 className="overlay-title">Detailed Schedule Coming Soon!</h3>
              <p className="overlay-description">
                We're finalizing an exciting one-day program packed with innovation, collaboration, and impact. The complete schedule will be announced closer to the event date.
              </p>
            </motion.div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
