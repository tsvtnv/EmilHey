import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, Download } from 'lucide-react';

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
            Professional racing driver from Norway. 2021 24H Series Champion, Norwegian Champion, youngest ever Nordic Champion. Currently competing in ADAC GT4 Germany.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com/emheyerdahl" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="mailto:info@emilheyerdahl.com" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></a>
            <a href="tel:+4793264725" className="text-white/40 hover:text-white transition-colors"><Phone size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/60">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-sm text-white/40 hover:text-white transition-colors">About Emil</Link></li>
            <li><Link to="/career" className="text-sm text-white/40 hover:text-white transition-colors">Career Timeline</Link></li>
            <li><Link to="/partners" className="text-sm text-white/40 hover:text-white transition-colors">Partnerships</Link></li>
            <li><Link to="/media" className="text-sm text-white/40 hover:text-white transition-colors">Media Hub</Link></li>
            <li><Link to="/contact" className="text-sm text-white/40 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/60">Contact</h4>
          <ul className="space-y-4">
            <li><a href="mailto:info@emilheyerdahl.com" className="text-sm text-white/40 hover:text-white transition-colors">info@emilheyerdahl.com</a></li>
            <li><a href="mailto:manager@emilheyerdahl.com" className="text-sm text-white/40 hover:text-white transition-colors">manager@emilheyerdahl.com</a></li>
            <li><a href="tel:+4793264725" className="text-sm text-white/40 hover:text-white transition-colors">(+47) 932 64 725</a></li>
            <li>
              <a 
                href="/Career CV - E.Heyerdahl 26.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <Download size={14} /> Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
        <a
          href="https://tsvweb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold tracking-wide text-white/70 hover:text-white transition-colors"
        >
          Built by TsvWeb.com
        </a>
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 Emil Heyerdahl. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            Professional Racing Driver — Norway
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
