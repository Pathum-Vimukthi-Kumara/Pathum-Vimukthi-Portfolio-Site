import React from 'react';

const Skills = () => {
  return (
    <div className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-secondary/10 border border-purple-secondary/30 text-purple-accent text-xs sm:text-sm font-medium mb-4">
            Technical Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 gradient-text-enhanced">
            Skills & Technologies.
          </h2>
          <p className="text-purple-light/70 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            A deep dive into my engineering arsenal, from high-level software architecture to low-level system design and technical security.
          </p>
        </div>

        {/* Responsive Container: Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex flex-nowrap overflow-x-auto pb-10 gap-6 snap-x hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 max-w-7xl mx-auto -mx-4 px-4 sm:mx-0 sm:px-0">

          {/* 1. Software Development */}
          <div className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto glass-card p-8 rounded-3xl border border-purple-secondary/20 hover:border-purple-secondary/40 transition-all duration-500 hover:-translate-y-2 group snap-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-secondary/20 flex items-center justify-center text-purple-accent group-hover:bg-purple-secondary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Software Dev</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Responsive UI/UX',
                'Node/Express', 'Nest JS', 'Java/SpringBoot', 'RESTful APIs', 'Ballerina'
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-purple-secondary/10 text-purple-light/90 text-xs font-semibold hover:bg-purple-secondary/30 hover:text-white transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Security */}
          <div className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto glass-card p-8 rounded-3xl border border-purple-secondary/20 hover:border-purple-secondary/40 transition-all duration-500 hover:-translate-y-2 group snap-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-secondary/20 flex items-center justify-center text-purple-accent group-hover:bg-purple-secondary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Security</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Web App Security', 'Penetration Testing', 'Vulnerability Assessment',
                'Nmap', 'Burp Suite', 'Metasploit', 'OWASP Top 10', 'Exploit Dev'
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-purple-secondary/10 text-purple-light/90 text-xs font-semibold hover:bg-purple-secondary/30 hover:text-white transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 3. DevOps & Data */}
          <div className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto glass-card p-8 rounded-3xl border border-purple-secondary/20 hover:border-purple-secondary/40 transition-all duration-500 hover:-translate-y-2 group snap-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-secondary/20 flex items-center justify-center text-purple-accent group-hover:bg-purple-secondary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">DevOps & Data</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Linux / Bash', 'Docker', 'Jenkins', 'CI/CD Pipelines', 'AWS', 'Git / GitHub',
                'MySQL', 'MongoDB', 'MariaDB', 'PostgreSQL'
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-purple-secondary/10 text-purple-light/90 text-xs font-semibold hover:bg-purple-secondary/30 hover:text-white transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Core Engineering */}
          <div className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto glass-card p-8 rounded-3xl border border-purple-secondary/20 hover:border-purple-secondary/40 transition-all duration-500 hover:-translate-y-2 group snap-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-secondary/20 flex items-center justify-center text-purple-accent group-hover:bg-purple-secondary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Core Eng.</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'C', 'C++', 'System Architecture', 'Assembly', 'Embedded Systems'
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-purple-secondary/10 text-purple-light/90 text-xs font-semibold hover:bg-purple-secondary/30 hover:text-white transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Soft Skills */}
          <div className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto glass-card p-8 rounded-3xl border border-purple-secondary/20 hover:border-purple-secondary/40 transition-all duration-500 hover:-translate-y-2 group snap-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-secondary/20 flex items-center justify-center text-purple-accent group-hover:bg-purple-secondary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Leadership', 'Project Coordination', 'Critical Thinking', 'Communication',
                'Strategic Planning', 'Problem Solving', 'Team Management'
              ].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-purple-secondary/10 text-purple-light/90 text-xs font-semibold hover:bg-purple-secondary/30 hover:text-white transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
