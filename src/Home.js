import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const skillCategories = {
  'Cyber Security': ['Web Application Security', 'Penetration Testing'],
  'Front-end Development': ['React', 'Bootstrap', 'JavaScript'],
  'Back-end Development': ['Node/Express', 'Java/SpringBoot'],
  'Databases': ['MySQL', 'MongoDB', 'MariaDB'],
  'DevOps & Cloud Computing': ['Linux', 'CI/CD', 'Docker', 'Jenkins', 'AWS'],
  'Tools & Technologies': ['Metasploit', 'Nmap', 'Burp Suite', 'Git', 'Jira'],
  'Low-Level Development': ['C', 'C++', 'Assembly'],
  'Soft Skills': ['Project Management', 'Communication', 'Critical Thinking', 'Leadership'],
};

const Home = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Cyber Security');
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);
  const cvUrl = `${process.env.PUBLIC_URL}/assets/pathumcv1.pdf`;

  return (
    <div className="min-h-screen bg-purple-gradient pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          
          {/* Profile Image - Top on Mobile, Right on Desktop */}
          <div className="order-1 lg:order-2 lg:w-2/5 flex justify-center mb-8 lg:mb-0 animate-fadeInUp">
            <div className="relative animate-float">
              <img 
                src={process.env.PUBLIC_URL + '/assets/Program Team member - Pathum Vimukthi.jpg'} 
                alt="Pathum Vimukthi" 
                className="profile-image w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-2 sm:border-4 border-purple-secondary shadow-glow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-secondary/20 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:w-3/5 text-center lg:text-left animate-fadeInUp px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text-enhanced leading-tight">
              Code. Create. Innovate.
            </h1>
            <h2 className="text-base sm:text-lg lg:text-2xl text-purple-accent font-medium mb-6 sm:mb-8 leading-relaxed">
              Full-Stack Developer & Cybersecurity Enthusiast
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-purple-light leading-relaxed mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
              I blend cutting-edge technology with timeless design principles to create immersive digital experiences. Specializing in scalable web applications, interactive interfaces, and innovative solutions that push the boundaries of what's possible on the web.
            </p>

            {/* Category Buttons */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-purple-accent font-medium mb-4 text-sm sm:text-base">Skill Categories</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-purple-secondary text-white border-purple-primary'
                        : 'bg-white text-purple-primary border-purple-secondary hover:bg-purple-secondary/10'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                </button>
              ))}
              </div>
            </div>

            {/* Tools/Skills for Selected Category */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-purple-accent font-medium mb-4 text-sm sm:text-base">
                {activeCategory} Skills
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {skillCategories[activeCategory].map((tool) => (
                  <span
                    key={tool}
                    className="bg-purple-card border border-purple-secondary/40 text-purple-light px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-purple-secondary/20 transition-all duration-300 hover:scale-105"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-2 justify-center lg:justify-start mt-6 sm:mt-8">
              <button
                type="button"
                className="btn-primary mobile-small-btn w-1/2 sm:w-auto px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-base touch-target rounded-md bg-purple-secondary text-white hover:bg-purple-primary transition duration-300 shadow-md"
                onClick={() => setIsCvPreviewOpen(true)}
              >
                Preview
              </button>

              <button
                className="btn-secondary mobile-small-btn w-1/2 sm:w-auto px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-base touch-target rounded-md"
                onClick={() => navigate('/get-in-touch')}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        
      </div>

      {/* CV Preview Modal */}
      {isCvPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsCvPreviewOpen(false)}
          />
          <div className="relative z-10 w-[90vw] max-w-5xl h-[80vh] bg-purple-card border border-purple-secondary/40 rounded-xl shadow-glow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-purple-secondary/30 bg-purple-dark/60">
              <h3 className="text-purple-light font-medium">Pathum Vimukthi — Resume</h3>
              <div className="flex items-center gap-2">
                <a
                  href={cvUrl}
                  download="Pathum_Vimukthi_CV.pdf"
                  className="px-3 py-2 text-sm rounded-md bg-purple-secondary text-white hover:bg-purple-primary transition-colors"
                >
                  Download
                </a>
                <button
                  type="button"
                  className="px-3 py-2 text-sm rounded-md bg-white text-purple-primary border border-purple-secondary hover:bg-purple-secondary/10 transition-colors"
                  onClick={() => setIsCvPreviewOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="w-full h-full">
              <iframe
                title="Resume Preview"
                src={cvUrl}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
