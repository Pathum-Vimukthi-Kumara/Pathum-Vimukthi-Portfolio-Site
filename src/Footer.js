import React from 'react';

import { FaGithub, FaStackOverflow, FaMedium } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="relative bg-purple-dark/90 border-t border-purple-secondary/20 backdrop-blur-xl py-12 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-secondary/50 to-transparent shadow-[0_0_20px_rgba(162,89,247,0.5)]"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col items-center">
        <div className="flex justify-center gap-8 mb-8 text-purple-light/70 text-2xl">
          <a
            href="https://github.com/Pathum-Vimukthi-Kumara"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-secondary hover:scale-125 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/31776782/pathum-vimukthi"
            aria-label="Stack Overflow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-secondary hover:scale-125 transition-all duration-300"
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://medium.com/@kpathum616"
            aria-label="Medium"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-secondary hover:scale-125 transition-all duration-300"
          >
            <FaMedium />
          </a>
        </div>

        <div className="text-center space-y-4">
          <p className="text-purple-accent font-bold tracking-widest text-sm uppercase">Pathum Vimukthi</p>
          <p className="text-purple-light/40 text-xs">© 2025 • Designed & Developed with Passion</p>

          <div className="flex items-center justify-center gap-4 pt-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] font-bold text-purple-light/60 uppercase tracking-tighter">Stack:</span>
            <span className="text-[10px] font-bold text-purple-secondary uppercase tracking-widest">React</span>
            <span className="text-[10px] font-bold text-purple-secondary uppercase tracking-widest">Tailwind</span>
            <span className="text-[10px] font-bold text-purple-secondary uppercase tracking-widest">Framer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
