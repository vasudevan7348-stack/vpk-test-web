import React, { useState, useEffect } from 'react';

const PHOTO_URL = 'https://i.postimg.cc/ZRfpvfhv/2nd-thumbnail.jpg';

export const PhotoShowcase: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = PHOTO_URL;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, []);

  return (
    <>
      {/* Ambient Background Layer - Blurred version of the image */}
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

      {/* Main Content Container - Perfectly Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 gap-8">
        
        {/* Image Wrapper */}
        <div className="relative flex items-center justify-center">
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
              className="max-h-[70vh] max-w-[90vw] md:max-w-[80vw] object-contain shadow-[0_20px_50px_rgba(0,0,0,0.5)] drop-shadow-2xl"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        {/* Branding Text */}
        <div 
          className={`
            transition-all duration-[1000ms] delay-500 ease-out flex flex-col items-center gap-3
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <h1 className="text-white/90 font-serif font-medium tracking-[0.4em] text-sm md:text-base text-center uppercase antialiased">
            VPK Photography
          </h1>
          <div className="w-12 h-[1px] bg-white/20" />
        </div>
      </div>
    </>
  );
};