import React, { useEffect, useRef, useState } from 'react';
import { MapPin, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-glass/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about transforming raw data into meaningful insights that drive business decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Introduction */}
            <div className="glass-card animate-slideUp">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Who I Am</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a dedicated data enthusiast with a strong foundation in data science and analytics. 
                My journey began with a curiosity about how data can tell stories and influence strategic decisions. 
                I enjoy working with complex datasets and creating visualizations that make data accessible and actionable.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With expertise in Python, SQL, and Power BI, I specialize in end-to-end data analysis - 
                from data collection and cleaning to advanced analytics and compelling visualizations. 
                I'm also skilled in development, building data-driven applications and automation solutions 
                that streamline business processes. I'm always eager to learn new technologies and methodologies 
                in the ever-evolving field of data science.
              </p>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Education */}
              <div className="glass-card glass-hover">
                <div className="flex items-start gap-4">
                  <div className="glass-card !p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Education</h4>
                    <p className="text-muted-foreground">
                      Bachelor's in Computer Science Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Specialized in Data Science & Machine Learning
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card glass-hover">
                <div className="flex items-start gap-4">
                  <div className="glass-card !p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Location</h4>
                    <p className="text-muted-foreground">
                      Telangana State, India
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Available for remote opportunities worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className="glass-card glass-hover">
                <div className="flex items-start gap-4">
                  <div className="glass-card !p-3 rounded-full">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Career Goals</h4>
                    <p className="text-muted-foreground">
                      Pursuing opportunities in Business Analysis
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Focus on business intelligence and data-driven decision making
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;