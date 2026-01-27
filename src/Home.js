import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);
  const cvUrl = `${process.env.PUBLIC_URL}/assets/pathumcv1.pdf`;

  const scrollToProjects = () => {
    const projectSection = document.getElementById('project-section');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[90vh] bg-purple-gradient pt-20 relative flex items-center overflow-visible sm:overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Profile Image - Very compact for mobile */}
          <div className="order-1 lg:order-2 lg:w-2/5 flex justify-center mb-1 lg:mb-0 animate-fadeInUp">
            <div className="relative animate-float w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72">
              <div className="absolute -inset-0.5 bg-purple-secondary/20 rounded-full blur-sm animate-pulse"></div>
              <div className="relative z-10 w-full h-full rounded-full border sm:border-4 border-purple-secondary/50 shadow-glow-lg overflow-hidden aspect-square">
                <img
                  src={process.env.PUBLIC_URL + '/assets/Program Team member - Pathum Vimukthi.jpg'}
                  alt="Pathum Vimukthi"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:w-3/5 text-center lg:text-left animate-fadeInUp px-4 sm:px-0">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-secondary/10 border border-purple-secondary/30 text-purple-accent text-xs sm:text-sm font-medium mb-6">
              Seeking internship opportunities
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 gradient-text-enhanced leading-tight tracking-tight">
              Code. Create. Innovate.
            </h1>
            <h2 className="text-base sm:text-xl lg:text-2xl text-purple-accent font-medium mb-6 leading-relaxed">
              Full-Stack Developer & Cybersecurity Enthusiast
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-purple-light/90 leading-relaxed mb-10 max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
              I build resilient digital experiences that combine innovative full-stack development with a security-first approach. Let's transform your complex challenges into elegant, secure realities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-8 w-full sm:w-auto">
              <button
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group px-6 py-3 text-sm sm:text-base"
                onClick={scrollToProjects}
              >
                View My Projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              <div className="flex w-full sm:w-auto gap-2 mt-0 sm:mt-0">
                <button
                  type="button"
                  className="btn-secondary w-1/2 sm:w-auto px-3 py-2 text-sm sm:!px-4 sm:!py-2"
                  onClick={() => setIsCvPreviewOpen(true)}
                >
                  My Resume
                </button>

                <button
                  className="btn-secondary w-1/2 sm:w-auto px-3 py-2 text-sm sm:!px-4 sm:!py-2"
                  onClick={() => navigate('/get-in-touch')}
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Strategic Focus Areas - Vertical Stack on Mobile */}
            <div className="mt-16 pt-10 border-t border-purple-secondary/20 w-full">
              <p className="text-xs sm:text-sm text-purple-accent/70 uppercase tracking-[0.2em] font-bold mb-8 flex items-center justify-center lg:justify-start gap-4">
                <span className="w-12 h-px bg-purple-secondary/30"></span>
                Strategic Focus Areas
                <span className="w-12 h-px bg-purple-secondary/30"></span>
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { label: 'Cybersecurity', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
                  { label: 'AI Integration', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
                  { label: 'DevOps', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
                  { label: 'Web Dev', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
                  { label: 'Mobile Dev', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> }
                ].map((area, idx) => (
                  <div key={idx} className="group cursor-default h-full">
                    <div className="flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl bg-purple-secondary/5 border border-purple-secondary/10 hover:border-purple-secondary/30 hover:bg-purple-secondary/10 transition-all duration-300 h-full min-h-[110px] sm:min-h-[130px]">
                      <div className="text-purple-accent group-hover:scale-110 transition-transform duration-300 shrink-0">
                        {area.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-purple-light uppercase tracking-tight sm:tracking-wider text-center leading-tight">
                        {area.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Preview Modal */}
      {isCvPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsCvPreviewOpen(false)}
          />
          <div className="relative z-10 w-[95vw] lg:w-[80vw] max-w-5xl h-[90vh] bg-purple-card border border-purple-secondary/40 rounded-2xl shadow-glow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-purple-secondary/30 bg-purple-dark/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="ml-2 text-purple-light font-semibold font-mono text-sm tracking-tighter sm:tracking-normal sm:text-base">Pathum_Vimukthi_CV.pdf</h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={cvUrl}
                  download="Pathum_Vimukthi_CV.pdf"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-purple-secondary text-white hover:bg-purple-primary transition-all shadow-md hover:shadow-glow"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download
                </a>
                <button
                  type="button"
                  className="p-2 text-purple-light hover:text-white transition-colors"
                  onClick={() => setIsCvPreviewOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            <div className="flex-grow bg-[#525659]">
              <iframe
                title="Resume Preview"
                src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none shadow-inner"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
