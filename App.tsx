import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, PORTFOLIO_DATA } from './constants.ts';
import { ChevronDownIcon } from './components/Icons.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#d4d4d4] selection:bg-amber-500 selection:text-black">
      
      {/* Navigation / Top Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-black font-bold font-serif">
              J
            </div>
            <span className="font-serif font-bold text-lg tracking-widest text-zinc-100">
              JERICHO <span className="text-amber-600">VANCE</span>
            </span>
          </div>
          <a 
            href="#contact" 
            className="hidden sm:block px-6 py-2 border border-amber-600/50 text-amber-500 hover:bg-amber-600 hover:text-black transition-colors duration-300 uppercase text-xs tracking-widest font-bold rounded-sm"
          >
            Email Me
          </a>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className="pt-20 pb-20">
        
        {/* Project Header */}
        <header className="max-w-4xl mx-auto text-center px-4 py-16 sm:py-24">
          <div className="mb-4 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
            {PORTFOLIO_DATA.title}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-amber-500 font-serif tracking-widest uppercase mb-8">
            {PORTFOLIO_DATA.subtitle}
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base leading-relaxed mb-12 border-l-2 border-amber-600/30 pl-6 text-left italic">
            {PORTFOLIO_DATA.description}
          </p>
          
          <div className="flex justify-center animate-bounce text-zinc-500">
             <ChevronDownIcon className="w-6 h-6" />
          </div>
        </header>

        {/* Continuous Image Stack (Behance Style) */}
        <section className="w-full bg-[#0a0a0c] border-y border-zinc-900 shadow-2xl">
          <div className="max-w-[1400px] mx-auto bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            {PORTFOLIO_DATA.images.map((image, index) => (
              <div key={image.id} className="relative block">
                {/* Image Container */}
                <div className="relative overflow-hidden w-full">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="w-full h-auto block object-cover"
                    style={{ 
                      display: 'block', // Crucial for removing bottom gap
                      filter: 'contrast(1.1) saturate(0.9)'
                    }} 
                  />
                  
                  {/* Decorative Scanlines (Subtle) */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#020202] border-t border-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <p className="text-zinc-500 text-sm mb-8">Follow my journey through the stars.</p>

          <div className="flex justify-center gap-8 mb-12">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1"
                aria-label={link.name}
              >
                <div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-amber-500 group-hover:bg-amber-950/20 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300">
                  <link.icon className="w-6 h-6 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest group-hover:text-amber-500/80 transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          <div className="text-xs text-zinc-700 font-mono">
            <p>&copy; {new Date().getFullYear()} Jericho Vance. All rights reserved.</p>
            <p className="mt-2">Designed with the <span className="text-amber-700">Judas</span> aesthetic.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;