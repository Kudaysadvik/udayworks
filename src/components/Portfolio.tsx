import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio: React.FC = () => {
  useEffect(() => {
    // Set dark mode permanently
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen custom-scrollbar">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;