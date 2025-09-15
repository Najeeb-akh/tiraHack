import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SponsorsSection from './components/SponsorsSection';
import ScheduleSection from './components/ScheduleSection';
import PrizesSection from './components/PrizesSection';
import ThemesSection from './components/ThemesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import './App.css';

function App() {
  return (
    <div className="App">
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <SponsorsSection />
      <ScheduleSection />
      <PrizesSection />
      <ThemesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
