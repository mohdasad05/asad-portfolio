// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';
import Quote from './components/Quote';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {/* <DarkModeToggle /> — removed from here */}
      <Navbar />
      <SectionWrapper delay={0.1}><Hero /></SectionWrapper>
      <SectionWrapper delay={0.15}><About /></SectionWrapper>
      <SectionWrapper delay={0.2}><Education /></SectionWrapper>
      <SectionWrapper delay={0.25}><Experience /></SectionWrapper>
      <SectionWrapper delay={0.3}><Skills /></SectionWrapper>
      <SectionWrapper delay={0.35}><Projects /></SectionWrapper>
      <SectionWrapper delay={0.4}><Certifications /></SectionWrapper>
      <SectionWrapper delay={0.45}><Achievements /></SectionWrapper>
      <SectionWrapper delay={0.5}><Contact /></SectionWrapper>
      <Quote />  
      <Footer />
    </div>
  );
}

export default App;
