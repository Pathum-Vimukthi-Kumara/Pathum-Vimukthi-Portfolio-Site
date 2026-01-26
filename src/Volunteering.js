import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Volunteering = () => {
  const images = [
    `${process.env.PUBLIC_URL}/assets/winning_hearts_oc_flyer.jpg`,
    `${process.env.PUBLIC_URL}/assets/WinningHeartsOC.jpg`,
    `${process.env.PUBLIC_URL}/assets/about.jpg`,
  ];

  const roles = [
    "Program Team Lead - Winning Hearts 1.0",
    "Public Relations Member - IEEE Eminence",
    "Contributor - ECSL Project",
    "HaXtreme 3.0 & Mehewara Volunteer",
  ];

  return (
    <div className="min-h-screen pt-20 py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-secondary/10 border border-purple-secondary/30 text-purple-accent text-xs sm:text-sm font-medium mb-4">
            Giving Back
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 gradient-text-enhanced">
            Volunteering & Impact
          </h1>
          <p className="text-purple-light/70 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Beyond engineering, I am committed to community growth and empowering the next generation of technologists through active volunteering and leadership.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          {/* Left: Carousel with Frame */}
          <div className="lg:w-1/2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative p-2 rounded-[2rem] bg-purple-secondary/20 border border-purple-secondary/30 shadow-glow-lg">
              <div className="rounded-[1.5rem] overflow-hidden border-4 border-purple-dark/50">
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  stopOnHover={true}
                  swipeable={true}
                  showStatus={false}
                  className="volunteering-carousel"
                >
                  {images.map((image, index) => (
                    <div key={index} className="h-64 sm:h-80 lg:h-[400px]">
                      <img
                        src={image}
                        alt={`Volunteering ${index + 1}`}
                        className="object-cover h-full w-full"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-secondary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right: Content & Roles */}
          <div className="lg:w-1/2 space-y-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Volunteering Experience</h3>
              <div className="space-y-4 text-purple-light/90 text-sm sm:text-base leading-relaxed">
                <p>
                  As the <span className="text-purple-secondary font-bold">Program Team Lead for Winning Hearts 1.0</span>, I spearheaded community outreach initiatives, coordinating the delivery of essential donations and educational support to underprivileged students.
                </p>
                <p>
                  My role as a <span className="text-purple-secondary font-bold">Public Relations Member for IEEE Eminence</span> allowed me to build bridges between academia and industry, fostering strategic partnerships that create value for the student community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-purple-secondary/10 hover:border-purple-secondary/30 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-purple-secondary group-hover:scale-150 transition-transform"></div>
                  <span className="text-xs sm:text-sm font-medium text-purple-light/80">{role}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-secondary/10 to-transparent border border-purple-secondary/20">
              <p className="text-sm text-purple-accent italic leading-relaxed">
                "Volunteering has taught me that true innovation is most powerful when it is used to uplift communities and solve human challenges beyond the screen."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
