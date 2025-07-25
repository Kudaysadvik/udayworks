import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import profileImage from '../assets/profile-image.jpg';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Data Science Enthusiast',
    'Aspiring Data Analyst', 
    'Power BI Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/uday-sadvik', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/udaysadvik', label: 'GitHub' },
    { icon: ExternalLink, href: 'https://kaggle.com/udaysadvik', label: 'Kaggle' },
    { icon: Mail, href: 'mailto:udaysadvik@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fadeIn">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-2">
                Hi, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">Uday Sadvik</span>
              </h1>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h3 className="text-xl md:text-2xl font-medium text-primary">
                  {roles[currentRole]}
                </h3>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Turning data into insights that drive decisions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <button className="glass-card glass-hover glow-hover px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg transition-all duration-300">
                <Download className="inline w-5 h-5 mr-2" />
                Download Resume
              </button>
              <button className="glass-card glass-hover px-8 py-3 font-semibold rounded-lg transition-all duration-300">
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card !p-3 glass-hover glow-hover rounded-full transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slideUp">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-float"></div>
              <img
                src={profileImage}
                alt="Kothapalli Uday Sadvik"
                className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;