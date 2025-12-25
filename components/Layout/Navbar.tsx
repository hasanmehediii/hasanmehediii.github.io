import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-black/80 backdrop-blur-md border-b border-cyber-primary/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <Terminal className="h-8 w-8 text-cyber-primary animate-pulse mr-2" />
            <span className="font-mono text-xl font-bold text-cyber-text tracking-tighter group-hover:text-cyber-primary transition-colors">
              &lt;Mehedi /&gt;
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-sm text-cyber-text hover:text-cyber-primary transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] px-3 py-2 rounded-md"
                >
                  <span className="text-cyber-primary mr-1">0{NAV_LINKS.indexOf(link) + 1}.</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyber-primary hover:text-white hover:bg-cyber-primary/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-black/95 backdrop-blur-xl border-b border-cyber-primary/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-cyber-text hover:text-cyber-primary hover:bg-cyber-primary/10 block px-3 py-2 rounded-md text-base font-mono"
              >
                <span className="text-cyber-primary mr-2">&gt;</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;