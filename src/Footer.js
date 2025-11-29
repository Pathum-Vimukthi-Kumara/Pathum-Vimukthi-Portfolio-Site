import React from 'react';

import { FaGithub, FaStackOverflow, FaMedium } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-purple-dark/80 border-t border-purple-secondary/30 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <p className="text-purple-light">© 2025 | Pathum Vimukthi.</p>

        <div className="flex justify-center gap-6 mt-4 text-purple-light text-2xl">
          <a
            href="https://github.com/Pathum-Vimukthi-Kumara"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/31776782/pathum-vimukthi"
            aria-label="Stack Overflow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://medium.com/@kpathum616"
            aria-label="Medium"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaMedium />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
