import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';
import profileImage from '/lovable-uploads/daa1941f-4c6e-43a3-adb9-3ca24336b9fc.png';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(profileImage);
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

  useEffect(() => {
    const processImage = async () => {
      try {
        // Fetch the image as blob
        const response = await fetch(profileImage);
        const blob = await response.blob();
        
        // Load image element
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create object URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
        
        // Cleanup previous URL
        return () => URL.revokeObjectURL(processedUrl);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Fallback to original image
        setProcessedImageUrl(profileImage);
      }
    };

    processImage();
  }, []);

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/uday-sadvik', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/udaysadvik', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/udaysadvik', label: 'Instagram' }
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
                src={processedImageUrl}
                alt="Kothapalli Uday Sadvik"
                className="relative w-52 h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;