import React, { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-glass/20 to-transparent" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing my expertise through real-world data science and analytics projects
            </p>
          </div>

          {/* View All Projects - Prominent Display */}
          <div className="flex justify-center">
            <div className={`glass-card glass-hover glow-hover p-12 max-w-md w-full text-center transition-all duration-500 ${
              isVisible ? 'animate-slideUp' : 'opacity-0'
            }`}>
              <div className="mb-6">
                <div className="glass-card !p-6 rounded-full w-20 h-20 mx-auto bg-gradient-primary flex items-center justify-center">
                  <Github className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Explore My Work</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Discover all my data science projects, machine learning models, and analytics dashboards on GitHub
              </p>
              <a
                href="https://github.com/Kudaysadvik"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-hover glow-hover px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-3 text-lg hover:scale-105"
              >
                <Github className="w-6 h-6" />
                View All Projects
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;