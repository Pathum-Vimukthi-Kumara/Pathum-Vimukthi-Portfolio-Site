import React, { useState } from 'react';
import projects from './projectsData';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (p) => {
    setSelectedProject(p);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-purple-gradient pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text-enhanced">All Projects</h1>
            <p className="text-purple-light/70 text-sm mt-2">A complete list of projects and case studies.</p>
          </div>
          {/* back link removed from header; placed at page bottom */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden border border-purple-secondary/20 flex flex-col h-full">
              <div className="relative h-48 flex-shrink-0 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark via-purple-dark/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="flex flex-wrap gap-2">
                    {project.tech && project.tech.slice(0,3).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-secondary/80 text-white backdrop-blur-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8 flex flex-col flex-grow text-left overflow-hidden">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-sm lg:text-base text-purple-light/80 mb-6 leading-relaxed flex-grow line-clamp-4">{project.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-purple-secondary/10 mt-auto">
                  <button onClick={() => openModal(project)} className="text-purple-accent hover:text-white text-sm lg:text-base font-semibold flex items-center gap-2 transition-colors">
                    Show Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-purple-light hover:bg-purple-secondary hover:text-white transition-all shadow-sm" title="View GitHub">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back link placed at the bottom-right of the viewport and routes to the project section on the main page */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="/project" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-purple-secondary text-white font-semibold hover:opacity-90 transition shadow-lg">
          Back to Home
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[99999] p-4" onClick={closeModal}>
          <div className="bg-purple-card rounded-3xl w-full max-w-5xl h-full max-h-[90vh] overflow-hidden shadow-glow-2xl border border-purple-secondary/30 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center px-6 py-4 border-b border-purple-secondary/20 bg-purple-dark/40 backdrop-blur-md">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <button className="text-purple-accent hover:text-white transition-colors p-2" onClick={closeModal}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto custom-scrollbar">
              <div className="p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/2 space-y-6">
                    <div className="relative rounded-2xl overflow-hidden border border-purple-secondary/30 bg-black/40 shadow-2xl">
                      <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto object-cover" />
                    </div>
                    <div className="flex gap-4">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center flex items-center justify-center gap-2">Live Demo</a>
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center flex items-center justify-center gap-2">GitHub</a>
                    </div>
                  </div>

                  <div className="lg:w-1/2 space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.tech && selectedProject.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-purple-secondary/20 text-purple-accent text-xs font-semibold border border-purple-secondary/30">{t}</span>
                        ))}
                      </div>
                      <p className="text-purple-light/90 text-sm sm:text-base leading-relaxed">{selectedProject.description}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white flex items-center gap-2"><span className="w-1.5 h-6 bg-purple-secondary rounded-full"></span>What I Delivered</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {selectedProject.features && selectedProject.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm text-purple-light/80"><div className="w-1.5 h-1.5 rounded-full bg-purple-secondary mt-2 flex-shrink-0 animate-pulse"></div>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AllProjects;
