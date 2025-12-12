import React, { useState, useEffect } from 'react';
    import { Menu, X, Scale } from 'lucide-react';
    
    interface NavbarProps {
      onNavigate: (section: string) => void;
    }
    
    const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const navLinks = [
        { name: 'Schedule', id: 'schedule' },
        { name: 'Speakers', id: 'speakers' },
        { name: 'Case Study', id: 'case-study' },
        { name: 'Playground', id: 'demo' },
        { name: 'Cape Town Bootcamp', id: 'cape-town' },
      ];
    
      return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-cyan-500/10' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={() => window.location.reload()}>
                <Scale className="h-8 w-8 text-cyan-400" />
                <span className="font-display font-bold text-xl tracking-wider text-white">DAY1<span className="text-cyan-400">AI</span></span>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => onNavigate(link.id)}
                      className="text-slate-300 hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-widest bg-transparent border-none cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-slate-300 hover:text-white focus:outline-none"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-cyan-500/10">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setIsOpen(false);
                    }}
                    className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      );
    };
    
    export default Navbar;