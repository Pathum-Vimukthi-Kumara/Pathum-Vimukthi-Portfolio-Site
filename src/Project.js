// src/components/Projects.js
import React, { useState, useRef, useEffect } from 'react';

const projects = [




  {

    title: 'Complaint Management System ',
    image: `${process.env.PUBLIC_URL}/assets/image.png`,
    description: 'We developed and deployed a full-stack web application to digitize and streamline the complaint and maintenance request process within the Faculty of Engineering.',
    features: [
      'Role-based dashboards for users and admins',
      'Complaint submission with automatic timestamping and status history',
      'Admin-controlled custom status updates and activity tracking',
      'Invitation-based login with public registration for low-level roles',
      'JWT-based authentication (access & refresh tokens) for secure sessions',
      'Passwords stored securely using hashing (bcrypt) and salted encryption'
    ],
    tech: ['React', 'Nest js', 'MySql'],
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
      'Optimized MySQL schema and full project lifecycle management',
      'JWT-based authentication for API security and session management',
      'Secure password handling with hashing and encryption (bcrypt)'
    ],
    tech: ['Ballerina', 'React js', 'MySql'],
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
    tech: ['React', 'Express js ', ' MySql', 'C#'],
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
    tech: ['Python', 'Flask', 'scikit-learn', 'Chrome Extension APIs', ' JavaScript'],
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
    tech: ['Python', 'Streamlit', 'scapy', 'pandas', 'pymongo', 'plotly'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Network-Dashboard.git',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Network-Dashboard.git',
  },






];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const speedRef = useRef(0);
  const hoveringRef = useRef(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const startLoop = () => {
    if (rafRef.current) return;
    const tick = () => {
      const el = scrollRef.current;
      if (el && hoveringRef.current) {
        el.scrollLeft += speedRef.current;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopLoop = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const onMouseMoveCarousel = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const rel = x / rect.width; // 0..1
    const maxSpeed = 14; // pixels per frame
    speedRef.current = (rel - 0.5) * 2 * maxSpeed;
  };

  const onMouseEnterCarousel = () => {
    hoveringRef.current = true;
    startLoop();
  };

  const onMouseLeaveCarousel = () => {
    hoveringRef.current = false;
    speedRef.current = 0;
    stopLoop();
  };

  const onWheelCarousel = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    // Translate vertical wheel into horizontal scroll when hovering over carousel
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <div id="project-section" className="min-h-screen bg-purple-gradient pt-20 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeInUp">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-secondary/10 border border-purple-secondary/30 text-purple-accent text-xs sm:text-sm font-medium mb-4">
            Recent Work
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 gradient-text-enhanced">
            Featured Projects
          </h1>
          <p className="text-purple-light/70 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            A selection of my recent work in full-stack development and cybersecurity, focusing on security, performance, and user experience.
          </p>
        </div>

        <div className="relative group/nav">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 rounded-full bg-purple-card/80 border border-purple-secondary/30 text-purple-accent hover:text-white hover:bg-purple-secondary/20 transition-all opacity-0 group-hover/nav:opacity-100 hidden md:flex items-center justify-center backdrop-blur-md shadow-glow-lg"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 rounded-full bg-purple-card/80 border border-purple-secondary/30 text-purple-accent hover:text-white hover:bg-purple-secondary/20 transition-all opacity-0 group-hover/nav:opacity-100 hidden md:flex items-center justify-center backdrop-blur-md shadow-glow-lg"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div
            ref={scrollRef}
            onMouseMove={onMouseMoveCarousel}
            onMouseEnter={onMouseEnterCarousel}
            onMouseLeave={onMouseLeaveCarousel}
            onWheel={onWheelCarousel}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 snap-x snap-proximity hide-scrollbar sm:px-0 sm:mx-0 flex-nowrap"
            style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[450px] lg:w-[550px] h-[520px] sm:h-[550px] lg:h-[620px] snap-center glass-card rounded-2xl overflow-hidden hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 animate-fadeInUp group flex flex-col border border-purple-secondary/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 sm:h-56 lg:h-64 flex-shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark via-purple-dark/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-secondary/80 text-white backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 lg:p-8 flex flex-col flex-grow text-left overflow-hidden">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-purple-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm lg:text-base text-purple-light/80 mb-6 leading-relaxed flex-grow line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-purple-secondary/10 mt-auto">
                    <button
                      onClick={() => openModal(project)}
                      className="text-purple-accent hover:text-white text-sm lg:text-base font-semibold flex items-center gap-2 transition-colors"
                    >
                      View Case Study
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full text-purple-light hover:bg-purple-secondary hover:text-white transition-all shadow-sm"
                      title="View GitHub"
                    >
                      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal - Enhanced Case Study */}
        {modalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[120] p-4 animate-fadeIn" onClick={closeModal}>
            <div className="bg-purple-card rounded-3xl w-full max-w-5xl h-full max-h-[90vh] overflow-hidden shadow-glow-2xl border border-purple-secondary/30 flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center px-6 py-4 border-b border-purple-secondary/20 bg-purple-dark/40 backdrop-blur-md">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <button
                  className="text-purple-accent hover:text-white transition-colors p-2"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="flex-grow overflow-y-auto custom-scrollbar">
                <div className="p-6 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left: Visuals */}
                    <div className="lg:w-1/2 space-y-6">
                      <div className="relative rounded-2xl overflow-hidden border border-purple-secondary/30 bg-black/40 shadow-2xl skew-y-3 lg:skew-y-0 transition-transform hover:skew-y-0 duration-500">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="flex gap-4">
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center flex items-center justify-center gap-2">
                          Live Demo
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-center flex items-center justify-center gap-2">
                          GitHub
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        </a>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:w-1/2 space-y-8">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-4 line-height-tight">{selectedProject.title}</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-purple-secondary/20 text-purple-accent text-xs font-semibold border border-purple-secondary/30">
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="text-purple-light/90 text-sm sm:text-base leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                          <span className="w-1.5 h-6 bg-purple-secondary rounded-full"></span>
                          What I Delivered
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {selectedProject.features && selectedProject.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-4 text-sm text-purple-light/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-secondary mt-2 flex-shrink-0 animate-pulse"></div>
                              {f}
                            </li>
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
    </div>
  );
};

export default Projects;
