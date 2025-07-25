import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Brain, Hand, BarChart3 } from 'lucide-react';

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

  const projects = [
    {
      icon: Brain,
      title: 'House Price Prediction',
      description: 'Machine learning model to predict house prices using regression algorithms. Implemented feature engineering and model optimization techniques.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/udaysadvik/house-price-prediction',
      live: null,
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Hand,
      title: 'Virtual Mouse using Hand Gestures',
      description: 'Computer vision application that allows mouse control through hand gestures using OpenCV and MediaPipe for real-time detection.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      github: 'https://github.com/udaysadvik/virtual-mouse',
      live: null,
      gradient: 'from-secondary to-accent'
    },
    {
      icon: BarChart3,
      title: 'Power BI Sales Dashboard',
      description: 'Interactive business intelligence dashboard for sales analytics with KPIs, trends analysis, and automated reporting features.',
      technologies: ['Power BI', 'DAX', 'SQL', 'Excel'],
      github: null,
      live: 'https://app.powerbi.com/view?r=eyJrIjoiZXhhbXBsZSIsInQiOiJzYW1wbGUifQ%3D%3D',
      gradient: 'from-accent to-primary'
    }
  ];

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group glass-card glass-hover h-full transition-all duration-500 ${
                  isVisible ? 'animate-slideUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  {/* Project Icon */}
                  <div className="mb-6">
                    <div className={`glass-card !p-4 rounded-full w-16 h-16 mx-auto bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 text-center">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 glass rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 justify-center mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card !p-3 glass-hover glow-hover rounded-full transition-all duration-300"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card !p-3 glass-hover glow-hover rounded-full transition-all duration-300"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-secondary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/udaysadvik"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-hover glow-hover px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;