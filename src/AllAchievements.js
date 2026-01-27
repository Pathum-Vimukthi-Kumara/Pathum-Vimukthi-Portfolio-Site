import React, { useState } from 'react';
import { competitions } from './Certificate';
import { Link } from 'react-router-dom';

const AllAchievements = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => { setSelectedItem(item); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-purple-gradient pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text-enhanced">All Achievements</h1>
            <p className="text-purple-light/70 text-sm mt-2">Competitions & Certifications</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-purple-secondary/20 flex flex-col h-full">
              <div className="relative h-40 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-purple-light/80 mb-4 flex-grow line-clamp-4">{item.shortDescription}</p>
                <div className="flex items-center justify-between pt-4 border-t border-purple-secondary/10 mt-auto">
                  <button onClick={() => openModal(item)} className="text-purple-accent hover:text-white text-sm lg:text-base font-semibold">
                    Show Details
                  </button>
                  <div className="text-xs text-purple-accent/70">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex justify-end">
            <Link to="/certificate" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-purple-secondary text-white font-semibold hover:opacity-90 transition">
              Back to Achievements
            </Link>
          </div>
        </div>
      </div>

      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-[120] p-2 sm:p-4" onClick={closeModal}>
          <div className="bg-purple-card rounded-3xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-purple-secondary animate-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-purple-secondary/30">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-light pr-4">{selectedItem.title}</h2>
              <button className="text-purple-secondary hover:text-white text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-purple-secondary/20 transition-colors duration-200 touch-target" onClick={closeModal}>×</button>
            </div>
            <div className="p-4 sm:p-6 md:flex md:gap-6">
              <img src={selectedItem.certificateImage} alt={`${selectedItem.title} Certificate`} className="w-full md:w-1/2 max-w-full h-auto object-contain rounded-xl border border-purple-secondary/40 bg-purple-background/50 mb-4 sm:mb-6 md:mb-0" style={{ maxHeight: '85vh' }} />
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

export default AllAchievements;
