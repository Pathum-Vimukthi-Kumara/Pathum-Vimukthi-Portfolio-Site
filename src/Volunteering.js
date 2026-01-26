import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Required for styling

const Volunteering = () => {


    const images = [
    `${process.env.PUBLIC_URL}/assets/winning_hearts_oc_flyer.jpg`,
    `${process.env.PUBLIC_URL}/assets/WinningHeartsOC.jpg`,
    

    `${process.env.PUBLIC_URL}/assets/about.jpg`,
  ];

  return (
    <div className="min-h-screen bg-purple-gradient pt-20 py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent">
            Volunteering
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-purple-accent">Making a Difference</h2>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <Carousel
            showArrows
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={4000}
            stopOnHover
            swipeable
            dynamicHeight
            className="rounded-xl overflow-hidden shadow-xl border border-purple-secondary/30"
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Volunteering ${index + 1}`}
                  className="object-cover h-64 sm:h-80 w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-purple-light text-sm sm:text-base lg:text-lg leading-relaxed space-y-4 sm:space-y-6 text-center">
          <p>

            As Program Team Lead for Winning Hearts 1.0, coordinated community outreach delivering donations and educational activities to underprivileged students. Served as Public Relations Member for IEEE Eminence, building industry partnerships through strategic outreach. Contributed to ECSL projects, HaXtreme 3.0, and Mehewara program coordination.
          </p>
          

        </div>
      </div>
    </div>
  );
};

export default Volunteering;
