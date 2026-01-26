// src/components/Certificate.js
import React, { useState, useRef, useEffect } from 'react';

const competitions = [
  {
    title: 'Coderally 6.0',
    description: 'Our team Cyclone X 2nd Runner-Up at Coderally 6.0, organized by the IEEE Computer Society of Informatics Institute of Technology ',
    shortDescription: 'Cyclone X 2nd Runner-Up at Coderally 6.0',
    date: 'September 2025',
    issuer: 'IEEE Computer Society of Informatics Institute of Technology',
    image: `${process.env.PUBLIC_URL}/assets/coderally.jpeg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/coderally.jpeg`,
  },

  {
    title: 'VoltCast 1.0',
    description: 'Outstanding achievement in showcasing excellent ideas recognized as exemplary within the field.',
    shortDescription: 'Second Runners-up at VoltCast 1.0 ',
    date: 'September 2024',
    issuer: 'Power and Energy Society (PES) & IIEIS',
    image: `${process.env.PUBLIC_URL}/assets/VoltCast 1.0 Competition.jpg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/volt.jpg`,
  },
  {
    title: 'CyberRush',
    description: 'Our team, TargaryenX, also successfully participated in the Cyber Rush Offensive Capture The Flag (CTF) Competition, another challenging event organized by the Department of Computer Science & Engineering, University of Moratuwa, as part of the esteemed CodeJam Event Series. The initial qualification round was a demanding cybersecurity quiz, rigorously testing both offensive and defensive cybersecurity knowledge. With our outstanding performance, we secured our place in the finals among over 100 highly skilled participants.In the final round, held at the University of Moratuwa, we faced an intensive offensive Capture The Flag challenge involving penetration testing, vulnerability exploitation, reverse engineering, cryptographic analysis, and web security assessments. Demonstrating quick problem-solving, strategic thinking, and strong cybersecurity expertise, our team effectively navigated complex scenarios under considerable pressure. Through strong teamwork and technical proficiency, team TargaryenX secured an outstanding 4th place finish, highlighting our practical skills and deep understanding of cybersecurity principles.',
    shortDescription: 'Secured 4th place out of over 100 teams.',
    date: 'May 2024',
    issuer: 'Department of Computer Science & Engineering, University of Moratuwa ',
    image: `${process.env.PUBLIC_URL}/assets/CyberRush.jpg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/CyberRush.jpg`,
  },

  {
    title: 'CodeX',
    description: 'I participated in the CodeX , a highly competitive event organized by the Department of Computer Science & Engineering, University of Moratuwa, as part of their renowned CodeJam Event Series. Representing our team TargaryenX, we initially competed against more than 200 talented university-level programmers in a rigorous algorithmic coding challenge. Our team exceptional performance allowed us to advance into the finals, which were held at the University of Moratuwa.',
    shortDescription: 'Secured 6th place out of over 200 teams.',
    date: 'May 2025',
    issuer: 'Department of Computer Science & Engineering, University of Moratuwa ',
    image: `${process.env.PUBLIC_URL}/assets/CodeX.jpg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/CodeX.jpg`,
  },

  {
    title: 'XTREME 18.0',
    description: 'Our team, BugBustersPYL, proudly participated in one of the largest global coding competitions, demonstrating our skills in problem-solving, algorithmic challenges, and teamwork.',
    shortDescription: '40th place in the Sri Lanka section 604th globally',
    date: 'September 2024',
    issuer: 'IEEE',
    image: `${process.env.PUBLIC_URL}/assets/IEEEXTREME.jpg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/IEEEXTREME.jpg`,
  },



];

const Certificate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const speedRef = useRef(0);
  const hoveringRef = useRef(false);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const startLoop = () => {
    if (rafRef.current) return;
    const tick = () => {
      const el = scrollRef.current;
      if (el && hoveringRef.current) el.scrollLeft += speedRef.current;
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
    const rel = x / rect.width;
    const maxSpeed = 12;
    speedRef.current = (rel - 0.5) * 2 * maxSpeed;
  };

  const onMouseEnterCarousel = () => { hoveringRef.current = true; startLoop(); };
  const onMouseLeaveCarousel = () => { hoveringRef.current = false; speedRef.current = 0; stopLoop(); };
  const onWheelCarousel = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-purple-gradient pt-12 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto py-4 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent">
            Achievements
          </h1>
          <h2 className="text-lg sm:text-xl text-purple-accent font-medium">Competitions & Certifications</h2>
        </div>

        <div className="relative group/nav">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              if (scrollRef.current) {
                const amount = scrollRef.current.clientWidth * 0.8;
                scrollRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 rounded-full bg-purple-card/80 border border-purple-secondary/30 text-purple-accent hover:text-white hover:bg-purple-secondary/20 transition-all opacity-0 group-hover/nav:opacity-100 hidden md:flex items-center justify-center backdrop-blur-md shadow-glow-lg"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            onClick={() => {
              if (scrollRef.current) {
                const amount = scrollRef.current.clientWidth * 0.8;
                scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
              }
            }}
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
            {competitions.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80vw] sm:w-[350px] lg:w-[400px] h-[380px] sm:h-[420px] lg:h-[460px] snap-center bg-purple-card/40 backdrop-blur-md rounded-2xl shadow-lg border border-purple-secondary/20 hover:border-purple-secondary/50 transition-all duration-500 hover:-translate-y-2 group flex flex-col overflow-hidden"
              >
                <div className="relative h-32 sm:h-40 lg:h-48 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 via-transparent to-transparent"></div>
                </div>

                <div className="p-4 lg:p-6 flex flex-col flex-grow text-left overflow-hidden">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-light/80 mb-4 flex-grow line-clamp-3">
                    {item.shortDescription}
                  </p>

                  <div className="space-y-1 mb-4 pt-3 border-t border-purple-secondary/10 mt-auto">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-left">
                      <svg className="w-3 h-3 text-purple-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
                      </svg>
                      <span className="text-purple-secondary font-semibold truncate">{item.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-left">
                      <svg className="w-3 h-3 text-purple-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-purple-accent/70">{item.date}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-2">
                    <button
                      aria-label={`Details for ${item.title}`}
                      className="w-full sm:w-auto bg-purple-secondary/20 border border-purple-secondary/40 text-purple-light text-xs font-bold py-2 px-4 rounded-lg hover:bg-purple-secondary hover:text-white transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(item);
                      }}
                    >
                      View Result Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-[120] p-2 sm:p-4" onClick={closeModal}>
          <div
            className="bg-purple-card rounded-3xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-purple-secondary animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-purple-secondary/30">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-light pr-4">{selectedItem.title}</h2>
              <button
                className="text-purple-secondary hover:text-white text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-purple-secondary/20 transition-colors duration-200 touch-target"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="p-4 sm:p-6 md:flex md:gap-6">
              <img
                src={selectedItem.certificateImage}
                alt={`${selectedItem.title} Certificate`}
                className="w-full md:w-1/2 max-w-full h-auto object-contain rounded-xl border border-purple-secondary/40 bg-purple-background/50 mb-4 sm:mb-6 md:mb-0"
                style={{ maxHeight: '85vh' }}
              />
              <div className="md:w-1/2 text-purple-light">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-secondary mb-3 sm:mb-4">Details</h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{selectedItem.description}</p>
                <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-purple-secondary/30">
                  <p className="text-sm sm:text-base"><strong className="text-purple-secondary">Issued By:</strong> {selectedItem.issuer}</p>
                  <p className="text-sm sm:text-base"><strong className="text-purple-secondary">Date:</strong> {selectedItem.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
