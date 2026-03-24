import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-bold tracking-tighter flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-white text-black flex items-center justify-center font-black italic">EH</span>
            <span className="uppercase tracking-[0.2em] text-lg font-light">Emil Heyerdahl</span>
          </Link>
          <p className="text-white/40 max-w-md text-sm leading-relaxed mb-8">
            Professional racing driver and 2021 24H Series Champion. Combining elite motorsport performance with a powerful digital presence for global brand partnerships.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/60">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-sm text-white/40 hover:text-white transition-colors">About Emil</Link></li>
            <li><Link to="/career" className="text-sm text-white/40 hover:text-white transition-colors">Career & Results</Link></li>
            <li><Link to="/partners" className="text-sm text-white/40 hover:text-white transition-colors">Partnerships</Link></li>
            <li><Link to="/media" className="text-sm text-white/40 hover:text-white transition-colors">Media Kit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/60">Contact</h4>
          <ul className="space-y-4">
            <li><a href="mailto:management@emilheyerdahl.com" className="text-sm text-white/40 hover:text-white transition-colors">Management Enquiry</a></li>
            <li><a href="mailto:press@emilheyerdahl.com" className="text-sm text-white/40 hover:text-white transition-colors">Press & Media</a></li>
            <li><Link to="/contact" className="text-sm text-white/40 hover:text-white transition-colors">General Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-white/20">
          © 2026 Emil Heyerdahl. All Rights Reserved.
        </p>
        <p className="text-[10px] uppercase tracking-widest text-white/20">
          Designed for Elite Performance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
