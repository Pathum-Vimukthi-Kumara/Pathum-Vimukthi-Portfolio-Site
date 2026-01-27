// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/project', label: 'Projects' },
  { to: '/certificate', label: 'Achievements' },
  { to: '/volunteering', label: 'Volunteering' },
  { to: '/about', label: 'About' },
  { to: '/get-in-touch', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper to check active state for the current scroll position logic
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl bg-purple-dark/95 border-b border-purple-secondary/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <nav className="relative flex justify-between items-center">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none flex items-center space-x-2 sm:space-x-3 group"
            onClick={closeMobileMenu}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-secondary to-purple-primary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-secondary/30 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm sm:text-lg">P</span>
            </div>
            <div className="block sm:block ml-2">
              <h1 className="text-lg sm:text-2xl font-bold gradient-text-enhanced">Pathum.dev</h1>
              <p className="text-[10px] sm:text-xs text-purple-light/70 -mt-1">Developer & Cybersecurity Enthusiast</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                  className={`relative px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${isActive(link.to)
                    ? 'text-purple-secondary bg-purple-secondary/10'
                    : 'text-purple-light hover:text-white hover:bg-purple-secondary/30'
                    }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{link.label}</span>

                {/* Active indicator */}
                {isActive(link.to) && (
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-secondary/20 to-purple-primary/20 rounded-lg animate-pulse z-0"></div>
                )}

                {/* Hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-secondary/30 to-purple-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-0"></div>

                {/* Bottom border indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-purple-secondary transition-all duration-300 group-hover:w-3/4 ${isActive(link.to) ? 'w-3/4' : ''
                  }`}></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-purple-light hover:text-purple-secondary hover:bg-purple-secondary/10 transition-colors duration-300 touch-target relative z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu - Solid Color & High Contrast */}
        <div className={`md:hidden absolute left-0 right-0 top-[60px] sm:top-[72px] transition-all duration-300 ease-out ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
          } overflow-hidden bg-purple-dark border-b border-purple-secondary/40 z-[110] shadow-2xl`}>
          <div className="py-2 px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-5 py-4 text-base font-bold transition-all duration-200 border-l-4 ${isActive(link.to)
                    ? 'text-white bg-purple-secondary border-white shadow-lg'
                    : 'text-purple-light/80 border-transparent hover:text-white hover:bg-purple-secondary/20'
                  }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Subtle gradient border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-secondary/30 to-transparent"></div>
    </header>
  );
};

export default Header;
