import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, BarChart3, Settings } from 'lucide-react';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      color: 'text-primary',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'JavaScript', 'HTML/CSS']
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      color: 'text-secondary',
      skills: ['Power BI', 'Tableau', 'Excel', 'Matplotlib']
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'text-accent',
      skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Settings,
      title: 'Tools & Platforms',
      color: 'text-primary',
      skills: ['Git', 'Jupyter', 'VS Code', 'Google Colab', 'Jira']
    }
  ];


  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for data analysis, visualization, and machine learning
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`glass-card glass-hover text-center transition-all duration-500 ${
                  isVisible ? 'animate-slideUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-card !p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 glass rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;