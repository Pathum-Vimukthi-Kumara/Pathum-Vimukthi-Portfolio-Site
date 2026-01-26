const About = () => {
  const pillars = [
    {
      title: 'Full-Stack Engineering',
      description: 'Building robust, end-to-end applications that bridge the gap between complex logic and intuitive interfaces.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Cybersecurity Mindset',
      description: 'Applying a security-first approach to every line of code, ensuring data integrity and user protection.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Scalable Innovation',
      description: 'Leveraging modern stacks like Nest.js and AWS to build systems that grow alongside the users they serve.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-20 py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-secondary/10 border border-purple-secondary/30 text-purple-accent text-xs sm:text-sm font-medium mb-4">
            My Story
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 gradient-text-enhanced">
            Beyond the Code.
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 text-purple-light/90 text-sm sm:text-base lg:text-lg leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p>
              Hey there! I'm <span className="text-purple-secondary font-bold text-xl sm:text-2xl">Pathum Vimukthi</span>. My journey into the digital realm wasn't just about learning syntax; it was about discovering the power to solve real-world problems through engineering.
            </p>
            <p>
              I specialize in <span className="text-white border-b border-purple-secondary/50 font-medium">Full-Stack Development</span> and <span className="text-white border-b border-purple-secondary/50 font-medium">Cybersecurity</span>. I believe that a great application isn't just one that works it's one that's secure by design, exceptionally fast, and built to scale.
            </p>
            <p>
              When I'm not architecting back-end services or refining front-end experiences, I'm deep-diving into penetration testing and exploring new ways to harden systems against modern threats. To me, every bug is a puzzle and every vulnerability is an opportunity to learn.
            </p>
            <div className="pt-6">
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-white">4+</h4>
                  <p className="text-xs text-purple-accent uppercase tracking-widest">Major Projects</p>
                </div>
                <div className="w-px h-10 bg-purple-secondary/30"></div>
                <div>
                  <h4 className="text-3xl font-bold text-white">3+</h4>
                  <p className="text-xs text-purple-accent uppercase tracking-widest">Years Coding</p>
                </div>
                <div className="w-px h-10 bg-purple-secondary/30"></div>
                <div>
                  <h4 className="text-3xl font-bold text-white">🚀</h4>
                  <p className="text-xs text-purple-accent uppercase tracking-widest">Infinite Passion</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            {pillars.map((pillar, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-purple-secondary/20 hover:border-purple-secondary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-secondary/10 text-purple-secondary group-hover:bg-purple-secondary group-hover:text-white transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-sm text-purple-light/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl text-center border border-purple-secondary/30 relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">Want to build something secure and amazing?</h2>
          <p className="text-purple-light/80 mb-8 max-w-2xl mx-auto relative z-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="#get-in-touch"
            className="btn-primary inline-flex items-center gap-2 relative z-10"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('get-in-touch-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Start a Conversation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
