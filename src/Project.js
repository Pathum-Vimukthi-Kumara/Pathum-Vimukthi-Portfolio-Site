// src/components/Projects.js
import React, { useState } from 'react';

const projects = [

  
  

   {

    title: 'Complaint Management System ',
    image: `${process.env.PUBLIC_URL}/assets/image.png`,
    description: 'We developed and deployed a full-stack web application to digitize and streamline the complaint and maintenance request process within the Faculty of Engineering.',
    features: [
      'Role-based dashboards for users and admins',
      'Complaint submission with automatic timestamping and status history',
      'Admin-controlled custom status updates and activity tracking',
      'Invitation-based login with public registration for low-level roles'
    ],
    tech: ['React','Nest js','MySql'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/CoRe_Test.git',
    demo: 'https://co-re-test-front.vercel.app/',
  },
      {
    title: 'Volunteer Management Platform',
    image: `${process.env.PUBLIC_URL}/assets/1.png`,
    description: 'Developed a comprehensive volunteer management system that connects organizations with volunteers through an integrated digital platform. ',
    features: [
      'Event management and volunteer discovery system',
      'RESTful APIs with WebSocket real-time chat',
      'Donation campaign hosting and role-based access control',
      'Optimized MySQL schema and full project lifecycle management'
    ],
    tech: ['Ballerina','React js','MySql'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/iwb25-009-targaryenx',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/iwb25-009-targaryenx',
  },
   {
    title: 'Budget Tracker',
    image: `${process.env.PUBLIC_URL}/assets/BudgetTracker.png`,
    description: 'Developed GUI interface for monitoring active connections, logging requests, and viewing connection Developed a comprehensive budget management application for both desktop and web platforms.',
    features: [
      'Robust CRUD operations for transactions',
      'Integrated calendar for tracking expenses',
      'Dynamic graphs and visualizations for financial data',
      'Cross-platform support for desktop and web'
    ],
    tech: ['React','Express js ',' MySql','C#'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Budget_Tracker',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Budget_Tracker',
  },

     {
    title: 'Phishing Detection',
    image: `${process.env.PUBLIC_URL}/assets/phishing_extension.jpg`,
    description: 'PhishGuard is a Chrome extension that detects phishing by scanning pages and links.',
    features: [
      'On-device URL and text classification using a local Flask API',
      'Real-time phishing detection and user warnings',
      'Blocks malicious sites while preserving user privacy',
      'Chrome extension integration for seamless protection'
    ],
    tech: ['Python','Flask','scikit-learn','Chrome Extension APIs',' JavaScript'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Phishing-Detection-Extension.git',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Phishing-Detection-Extension.git',
  },

    {
    title: 'Network Monitoring Dashboard',
    image: `${process.env.PUBLIC_URL}/assets/NetworkDashboard.jpg`,
    description: 'A real-time network flood attack monitoring and visualization system.',
    features: [
      'Real-time monitoring of network performance and topology',
      'Live charts and visualizations for key metrics',
      'Alerting and filtering to quickly detect attacks',
      'Tools for diagnosis and performance analysis'
    ],
    tech: ['Python','Streamlit','scapy','pandas','pymongo','plotly'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Network-Dashboard.git',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Network-Dashboard.git',
  },



 
 

];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-purple-gradient pt-20 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text-enhanced">
            Projects
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-purple-accent">Featured Work</h2>
        </div>
        
        <div
          className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar sm:gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto sm:pb-0 sm:mx-0 sm:px-0"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] snap-center glass-card rounded-xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fadeInUp group sm:min-w-0 sm:w-full h-[420px] sm:h-auto min-h-[300px] sm:min-h-0 flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-28 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-purple-accent mb-3 group-hover:text-purple-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-purple-light mb-3 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-purple-secondary/20 text-purple-secondary px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-purple-secondary/30 hover:bg-purple-secondary/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row gap-3 mt-auto justify-start items-end">
                  <button
                    type="button"
                    onClick={() => openModal(project)}
                    className="btn-primary mobile-small-btn self-start px-3 py-1 text-sm w-auto sm:flex-1 text-center touch-target rounded-md"
                  >
                    View
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mobile-small-btn self-start px-3 py-1 text-sm w-auto sm:flex-1 text-center touch-target rounded-md"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-2 sm:p-4" onClick={closeModal}>
            <div className="bg-purple-card rounded-3xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-purple-secondary animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-purple-secondary/30">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-light pr-4">{selectedProject.title}</h2>
                <button className="text-purple-secondary hover:text-white text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-purple-secondary/20 transition-colors duration-200 touch-target" onClick={closeModal}>×</button>
              </div>
              <div className="p-4 sm:p-6 md:flex md:gap-6">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full md:w-1/2 object-contain rounded-xl border border-purple-secondary/40 bg-purple-background/50 mb-4 sm:mb-6 md:mb-0" style={{ maxHeight: '70vh' }} />
                <div className="md:w-1/2 text-purple-light flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-secondary mb-3 sm:mb-4">Description</h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{selectedProject.description}</p>
                  <div className="mb-4">
                    <h4 className="text-purple-accent font-medium mb-2">Key Features</h4>
                    <ul className="list-disc ml-4 mb-4 text-sm text-purple-light">
                      {selectedProject.features && selectedProject.features.map((f, i) => (
                        <li key={i} className="mb-1">{f}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="bg-purple-secondary/20 text-purple-secondary px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-purple-secondary/30">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto flex gap-3">
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center py-2 px-4 rounded-md">Open Demo</a>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center py-2 px-4 rounded-md">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
