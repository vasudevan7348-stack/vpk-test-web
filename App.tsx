import React from 'react';
import { PhotoShowcase } from './components/PhotoShowcase';

const App: React.FC = () => {
  return (
    <main className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden text-white selection:bg-white selection:text-black">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/30 via-black to-black z-0 pointer-events-none" />
      
      {/* Subtle noise texture for film grain look */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-overlay" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        <PhotoShowcase />
      </div>
    </main>
  );
};

export default App;