import React from 'react';
import { PhotoShowcase } from './components/PhotoShowcase';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  return (
    <main className="relative w-full min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      {/* Subtle noise texture for film grain look - Fixed for entire page */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-[1] mix-blend-overlay" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      {/* Navigation Bar */}
      <Navigation />

      <div className="relative z-10 flex flex-col w-full">
        
        {/* SECTION 1: Home / Photo Showcase */}
        {/* The PhotoShowcase component includes the fixed background and the first screen content */}
        <PhotoShowcase />

        {/* SECTION 2: About Me */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 w-full relative py-24">
            <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-2xl md:text-4xl text-white mb-6 md:mb-10 tracking-[0.2em] uppercase drop-shadow-2xl">About Me</h2>
                <div className="w-16 h-[1px] bg-white/30 mb-8 md:mb-12 mx-auto" />
                
                <div className="font-sans text-white/80 leading-loose tracking-wide text-sm md:text-base lg:text-lg font-light space-y-6 md:space-y-8 text-justify md:text-center">
                    <p>
                        Hi! I’m <strong className="font-medium text-white">VIJENDRAN</strong>, a freelance photographer and a college student who believes that every moment has a story worth capturing.
                        What started as a simple curiosity with a camera has now grown into a passionate journey of turning everyday scenes into meaningful visuals.
                    </p>
                    <p>
                        I specialize in portrait, event, and product photography, and I love experimenting with light, perspective, and emotions to create images that feel alive.
                        Whether it’s a candid smile, a dramatic landscape, or the energy of an event, I aim to capture moments in their most authentic form.
                    </p>
                    <p>
                        Balancing college life and freelancing has taught me more than just time management — it taught me dedication, creativity, and the joy of working with people who trust my vision.
                        Every project gives me a chance to learn, grow, and push my style to the next level.
                    </p>
                    <p>
                        If you’re looking for someone who’s hardworking, passionate, and ready to bring your ideas to life through the lens, I’d love to work with you.
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION 3: Contact Me */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 w-full relative py-24">
            <div className="max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto text-center">
                <h2 className="font-serif text-2xl md:text-5xl text-white mb-8 md:mb-10 tracking-[0.2em] uppercase drop-shadow-2xl">Contact</h2>
                <div className="w-20 h-[1px] bg-white/30 mb-10 md:mb-16 mx-auto" />
                
                <div className="flex flex-col gap-8 font-sans font-light text-white/80 tracking-widest text-sm md:text-lg items-center">
                    <a href="mailto:rhithickprakash2007@gmail.com" className="hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-1 break-all">
                        rhithickprakash2007@gmail.com
                    </a>
                    
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 w-full">
                        <a 
                            href="https://www.instagram.com/tn28_humanity_king/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none text-center min-w-[140px] px-6 py-3 border border-white/20 text-white/60 font-sans text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white/5 hover:text-white hover:border-white/40 transition-all duration-300"
                        >
                            Instagram
                        </a>
                        <a 
                            href="https://wa.me/917603869240" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none text-center min-w-[140px] px-6 py-3 border border-white/20 text-white/60 font-sans text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white/5 hover:text-white hover:border-white/40 transition-all duration-300"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <p className="text-white/40 text-[10px] md:text-xs mt-8 uppercase tracking-[0.3em]">
                        Available for Worldwide Commission
                    </p>
                </div>
            </div>
        </section>

        {/* Footer Spacer */}
        <div className="w-full py-8 text-center text-white/20 text-[10px] uppercase tracking-[0.2em] font-sans">
          © {new Date().getFullYear()} VPK Photography
        </div>
      </div>
    </main>
  );
};

export default App;