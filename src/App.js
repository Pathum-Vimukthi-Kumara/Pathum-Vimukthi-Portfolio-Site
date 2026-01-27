import React, { useRef, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import About from './About';
import Certificate from './Certificate';
import Volunteering from './Volunteering';
import Project from './Project';
import GetInTouch from './GetInTouch';
import Skills from './Skills';
import AllProjects from './AllProjects';
import AllAchievements from './AllAchievements';

// Handles scroll to section based on path
function ScrollHandler({ sections }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '').toLowerCase();

    const sectionMap = {
      '': sections.homeRef,
      home: sections.homeRef,
      skills: sections.skillsRef,
      project: sections.projectRef,
      certificate: sections.certificateRef,
      volunteering: sections.volunteeringRef,
      about: sections.aboutRef,
      'get-in-touch': sections.getInTouchRef,
    };

    const ref = sectionMap[path];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [
    location,
    sections.homeRef,
    sections.skillsRef,
    sections.projectRef,
    sections.certificateRef,
    sections.volunteeringRef,
    sections.aboutRef,
    sections.getInTouchRef
  ]);

  return null;
}

function MainContent() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const certificateRef = useRef(null);
  const volunteeringRef = useRef(null);
  const aboutRef = useRef(null);
  const getInTouchRef = useRef(null);

  const sections = {
    homeRef,
    skillsRef,
    projectRef,
    certificateRef,
    volunteeringRef,
    aboutRef,
    getInTouchRef,
  };

  return (
    <div className="relative overflow-x-hidden bg-purple-gradient text-purple-light min-h-screen">
      {/* Aesthetic Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-purple-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <ScrollHandler sections={sections} />
        <Header />

        <div ref={homeRef}><Home /></div>
        <div ref={skillsRef} className="bg-black/5"><Skills /></div>
        <div ref={projectRef}><Project /></div>
        <div ref={certificateRef} className="bg-black/5"><Certificate /></div>
        <div ref={volunteeringRef}><Volunteering /></div>
        <div ref={aboutRef} className="bg-black/5"><About /></div>
        <div ref={getInTouchRef}><GetInTouch /></div>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/achievements" element={<AllAchievements />} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
