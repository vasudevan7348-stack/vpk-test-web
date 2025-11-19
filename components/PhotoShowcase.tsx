import React, { useState, useEffect } from 'react';

const PHOTO_URL = 'https://i.postimg.cc/j5MW8vvZ/Screenshot-2025-11-19-213930.png';

export const PhotoShowcase: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = PHOTO_URL;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, []);

  // Email configuration
  const email = "rhithickprakash2007@gmail.com";
  const subject = encodeURIComponent("Booking Inquiry - VPK Photography");
  const body = encodeURIComponent("Hi VPK Photography,\n\nI am interested in booking a session. Please let me know your availability.\n\nBest regards,");

  return (
    <>
      {/* Ambient Background Layer - Fixed so it stays visible during scroll */}
      <div 
        className={`fixed inset-0 z-0 transition-opacity duration-[2000ms] ease-out pointer-events-none overflow-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/90 z-10" />
        <img 
            src={PHOTO_URL} 
            className="w-full h-full object-cover blur-[60px] scale-110 opacity-40"
            alt=""
        />
      </div>

      {/* Home Section Content */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-24 md:py-20 lg:px-16 gap-10 md:gap-12 lg:gap-24 w-full max-w-[1600px] mx-auto">
        
        {/* Image Wrapper - Left Side on Desktop */}
        <div className="relative flex items-center justify-center lg:justify-end shrink-0 w-full lg:w-1/2 order-1 lg:order-1">
          {/* Loading State */}
          {!isLoaded && !hasError && (
            <div className="absolute z-30 flex items-center justify-center">
              <div className="w-10 h-10 border-t-2 border-white/30 border-r-2 border-r-white/30 rounded-full animate-spin duration-1000" />
            </div>
          )}

          {/* Error State */}
          {hasError && (
              <div className="text-white/40 font-sans text-sm tracking-widest uppercase border border-white/10 px-6 py-4">
                  Image Unavailable
              </div>
          )}

          {/* The Photograph */}
          <div 
            className={`
              relative transition-all duration-[1500ms] cubic-bezier(0.2, 0.8, 0.2, 1)
              ${isLoaded ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-95 blur-sm'}
            `}
          >
            <img
              src={PHOTO_URL}
              alt="VPK Photography"
              className="max-h-[40vh] sm:max-h-[50vh] md:max-h-[55vh] lg:max-h-[75vh] max-w-[90vw] md:max-w-[80vw] lg:max-w-full object-contain shadow-[0_20px_50px_rgba(0,0,0,0.5)] drop-shadow-2xl ring-1 ring-white/5"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {/* Text Content - Right Side on Desktop */}
        <div 
          className={`
            transition-all duration-[1000ms] delay-500 ease-out flex flex-col items-center lg:items-start gap-6 md:gap-8 max-w-lg lg:max-w-xl text-center lg:text-left lg:w-1/2 order-2 lg:order-2
            ${isLoaded ? 'opacity-100 translate-y-0 lg:translate-x-0' : 'opacity-0 translate-y-4 lg:translate-y-0 lg:translate-x-8'}
          `}
        >
          {/* Title */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h1 className="text-white/90 font-serif font-medium tracking-[0.3em] md:tracking-[0.4em] text-lg md:text-xl lg:text-2xl uppercase antialiased drop-shadow-lg whitespace-nowrap">
              VPK Photography
            </h1>
            {/* Separator Line: Gradient on mobile, Solid Left on Desktop */}
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent lg:bg-none lg:bg-white/30" />
          </div>

          {/* Quote & Description */}
          <div className="flex flex-col gap-4 md:gap-6 px-2 lg:px-0 items-center lg:items-start">
             <p className="text-white/90 font-serif text-sm md:text-lg lg:text-xl tracking-wider leading-relaxed">
              "Photography is the pause button of life."
             </p>
             <p className="text-white/60 font-sans font-light text-xs md:text-sm lg:text-base leading-loose tracking-wide hidden sm:block">
              At VPK Photography, we believe in capturing the soul of the moment. Specializing in cinematic compositions that tell a story without words, we transform the ordinary into the extraordinary through the interplay of light and shadow.
             </p>
             {/* Simplified text for very small mobile screens */}
             <p className="text-white/50 font-sans font-light text-[10px] leading-relaxed tracking-wide block sm:hidden">
              Capturing the soul of the moment. Transforming the ordinary into the extraordinary through light and shadow.
             </p>
          </div>

          <a 
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            className="mt-2 lg:mt-6 px-10 py-4 border border-white/20 text-white/70 font-sans text-xs tracking-[0.3em] uppercase hover:bg-white/10 hover:text-white hover:border-white/50 transition-all duration-500 active:scale-95"
            role="button"
            aria-label="Book a photography session via email"
          >
            Book Me Now
          </a>
        </div>
      </section>
    </>
  );
};
