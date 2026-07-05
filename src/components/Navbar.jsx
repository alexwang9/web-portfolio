import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'about' },
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#contact', label: 'contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200'
          : 'bg-transparent'
      }`}
    >
      <div className="wrap-wide px-6 sm:px-8 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-xl text-stone-900 tracking-tight"
          >
            Alexander Wang
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="font-mono text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/Alexander_Wang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-stone-900 border border-stone-300 rounded px-4 py-1.5 hover:border-stone-900 transition-colors duration-200"
            >
              resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-700 hover:text-stone-900 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 py-2 bg-stone-50 border border-stone-200 rounded-lg">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2.5 font-mono text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/Alexander_Wang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 font-mono text-sm text-stone-900 hover:bg-stone-100 transition-colors duration-200"
            >
              resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
