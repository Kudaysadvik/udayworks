import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Building2, Award, ExternalLink, Download } from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  organization: string;
  dateEarned: string;
  description?: string;
  certificateUrl?: string;
  downloadUrl?: string;
  category: string;
}

const Certifications: React.FC = () => {
  // Sample certificates - easy to modify/add new ones
  const certificates: Certificate[] = [
    {
      id: '1',
      name: 'Data Analytics and Visualization Job Simulation',
      organization: 'Accenture (via Forage)',
      dateEarned: 'February 2025',
      description: 'Completed practical tasks in project understanding, data cleaning & modeling, data visualization & storytelling, and client presentation.',
      category: 'Data Analytics',
      certificateUrl: 'https://forage.com/verify/certificate',
      downloadUrl: '/lovable-uploads/8f56d807-9dfe-4abb-9afd-8e5d0648ea52.png'
    },
    {
      id: '2',
      name: 'Google Data Analytics Professional Certificate',
      organization: 'Google Career Certificates',
      dateEarned: 'December 2023',
      description: 'Comprehensive program covering data analysis fundamentals, data visualization, and statistical analysis using tools like SQL, R, and Tableau.',
      category: 'Data Analytics',
      certificateUrl: 'https://coursera.org/verify/professional-cert/example',
      downloadUrl: '/certificates/google-data-analytics.pdf'
    },
    {
      id: '3',
      name: 'Microsoft Power BI Data Analyst Associate',
      organization: 'Microsoft',
      dateEarned: 'October 2023',
      description: 'Demonstrates skills in preparing data, modeling data, visualizing and analyzing data, and deploying and maintaining assets using Microsoft Power BI.',
      category: 'Business Intelligence',
      certificateUrl: 'https://learn.microsoft.com/en-us/users/example/credentials/example',
    },
    {
      id: '4',
      name: 'AWS Machine Learning Specialty',
      organization: 'Amazon Web Services',
      dateEarned: 'August 2023',
      description: 'Validates expertise in building, training, tuning, and deploying machine learning models using AWS services.',
      category: 'Machine Learning',
      certificateUrl: 'https://aws.amazon.com/verification',
    },
    {
      id: '5',
      name: 'Python for Data Science and Machine Learning',
      organization: 'Coursera - University of Michigan',
      dateEarned: 'June 2023',
      description: 'Comprehensive course covering Python programming for data analysis, visualization, and machine learning implementation.',
      category: 'Programming',
      downloadUrl: '/certificates/python-ml.pdf'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Data Analytics': 'bg-primary/10 text-primary border-primary/20',
      'Business Intelligence': 'bg-secondary/10 text-secondary border-secondary/20',
      'Machine Learning': 'bg-accent/10 text-accent border-accent/20',
      'Programming': 'bg-muted/10 text-muted-foreground border-muted/20'
    };
    return colors[category as keyof typeof colors] || 'bg-muted/10 text-muted-foreground border-muted/20';
  };

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my professional development and expertise across various domains in 
            data science, analytics, and technology. Each certification represents dedicated learning 
            and validated skills in cutting-edge technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
          {certificates.map((cert, index) => (
            <Card key={cert.id} className="glass-card group hover:glow-hover transition-all duration-300 border-0 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <Badge 
                      variant="outline" 
                      className={`mb-3 ${getCategoryColor(cert.category)}`}
                    >
                      <Award className="w-3 h-3 mr-1" />
                      {cert.category}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </CardTitle>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    <span>{cert.organization}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.dateEarned}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {cert.description && (
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {cert.certificateUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                      onClick={() => window.open(cert.certificateUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  )}
                  {cert.downloadUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = cert.downloadUrl!;
                        link.download = `${cert.name.replace(/\s+/g, '_')}.pdf`;
                        link.click();
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeIn">
          <div className="glass-card p-8 rounded-2xl border-0 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm committed to staying current with industry trends and continuously expanding 
              my skill set. More certifications are on the way as I explore emerging technologies 
              and deepen my expertise.
            </p>
            <Button 
              className="glass hover:glow-primary transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
            >
              <Award className="w-4 h-4 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;