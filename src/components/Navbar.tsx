import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Mail, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Career', path: '/career' },
    { name: 'Partners', path: '/partners' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-black/80 backdrop-blur-lg py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-white text-black flex items-center justify-center font-black italic">EH</span>
          <span className="hidden sm:block uppercase tracking-[0.2em] text-sm font-light">Emil Heyerdahl</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-widest hover:text-white transition-colors",
                location.pathname === link.path ? "text-white font-bold" : "text-white/60"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all"
          >
            Partner
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[64px] bg-black z-40 flex flex-col p-8 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold uppercase tracking-tighter border-b border-white/10 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-auto flex gap-6">
              <a href="https://instagram.com/emheyerdahl" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@emilheyerdahl.com" className="text-white/60 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
