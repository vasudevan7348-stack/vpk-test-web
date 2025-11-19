import React from 'react';

export const Navigation: React.FC = () => {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 md:py-8 pointer-events-none">
      <ul className="flex items-center space-x-6 md:space-x-16 pointer-events-auto bg-black/40 backdrop-blur-md px-6 py-3 md:px-10 md:py-4 rounded-full border border-white/10 shadow-lg transition-all duration-300">
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollToSection(link.id)}
              className="font-sans text-[10px] md:text-sm tracking-[0.2em] uppercase text-white/60 border-b border-transparent pb-0.5 md:pb-1 hover:text-white hover:border-white/50 transition-all duration-300 whitespace-nowrap"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};