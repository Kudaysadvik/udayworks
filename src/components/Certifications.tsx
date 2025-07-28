import React, { useState, useRef, useEffect } from 'react';
import { Award, FileText, Upload, X, Edit2, Check } from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  organization: string;
  pdfUrl: string;
}

const Certifications: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  
  const [isVisible, setIsVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type === 'application/pdf') {
        const pdfUrl = URL.createObjectURL(file);
        const fileName = file.name.replace('.pdf', '');
        
        const newCertificate: Certificate = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: fileName,
          organization: 'Organization Name',
          pdfUrl: pdfUrl
        };

        setCertificates(prev => [...prev, newCertificate]);
      }
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCertificateClick = (pdfUrl: string) => {
    if (pdfUrl !== '#') {
      window.open(pdfUrl, '_blank');
    }
  };

  const handleEditOrganization = (id: string, currentValue: string) => {
    setEditingId(id);
    setEditValue(currentValue);
  };

  const handleSaveEdit = (id: string) => {
    setCertificates(prev => 
      prev.map(cert => 
        cert.id === id ? { ...cert, organization: editValue } : cert
      )
    );
    setEditingId(null);
    setEditValue('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          
          {/* Header with 3D Golden Badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 to-transparent rounded-full opacity-40"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-yellow-100 drop-shadow-lg" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200 rounded-full opacity-80 blur-sm"></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Verified credentials showcasing expertise and continuous learning
            </p>

            {/* Upload Button */}
            <div className="flex justify-center">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="glass-card glass-hover flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 glow-hover"
              >
                <Upload className="w-5 h-5" />
                Upload Certificates
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div className="relative">
            {/* Scroll Buttons */}
            {certificates.length > 3 && (
              <>
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-glass backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Certificates Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 px-12 custom-scrollbar"
            >
              {certificates.map((certificate, index) => (
                <div
                  key={certificate.id}
                  className={`flex-shrink-0 w-80 glass-card glass-hover cursor-pointer transition-all duration-500 hover:scale-105 glow-hover ${
                    isVisible ? 'animate-slideUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleCertificateClick(certificate.pdfUrl)}
                >
                  {/* PDF Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {certificate.name}
                    </h3>
                    
                    {/* Editable Organization */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {editingId === certificate.id ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="bg-white/10 border border-white/20 rounded px-2 py-1 text-sm text-center min-w-0 flex-1"
                            onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit(certificate.id)}
                            autoFocus
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSaveEdit(certificate.id);
                            }}
                            className="text-green-400 hover:text-green-300 transition-colors"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCancelEdit();
                            }}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <span className="text-muted-foreground">
                            {certificate.organization}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditOrganization(certificate.id, certificate.organization);
                            }}
                            className="text-muted-foreground hover:text-foreground transition-colors ml-1"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* View Certificate Button */}
                    <div className="flex items-center justify-center gap-2 text-primary font-medium">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">View Certificate</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {certificates.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-glass rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-lg">
                No certificates uploaded yet. Click "Upload Certificates" to get started.
              </p>
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default Certifications;