import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kothapalliudaysadvik2002', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Kudaysadvik', label: 'GitHub' },
    { icon: ExternalLink, href: 'https://kaggle.com/udaysadvik', label: 'Kaggle' },
    { icon: Mail, href: 'mailto:udaysadvik@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 glass-card !p-3 glass-hover glow-hover rounded-full transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-primary" />
      </button>

      {/* Main Footer */}
      <div className="glass border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="glass-card !p-2">
                  <span className="text-xl font-bold gradient-text">US</span>
                </div>
                <span className="text-lg font-semibold">Uday Sadvik</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Data Science Enthusiast passionate about turning data into actionable insights 
                that drive meaningful business decisions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
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
              <p className="text-muted-foreground mt-4">
                Let's connect and explore opportunities together!
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-glass-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © {currentYear} Kothapalli Uday Sadvik. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;