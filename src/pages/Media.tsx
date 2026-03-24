import React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, Image as ImageIcon, FileText } from 'lucide-react';

const Media = () => {
  const images = [
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10"
        >
          <div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none mb-10">
              Media <span className="text-white/20">Hub</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl font-light">
              Press-ready assets, high-resolution imagery, and official media kit for partners and journalists.
            </p>
          </div>
          <button className="bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all flex items-center gap-3 shrink-0">
            <Download size={18} /> Download Media Kit
          </button>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="aspect-square bg-white/5 overflow-hidden group relative cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Media ${idx}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ExternalLink size={24} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-8 space-y-10">
            <h2 className="text-3xl font-bold uppercase italic tracking-tight">Official Media Bio</h2>
            <div className="glass p-10 text-white/60 font-light leading-relaxed space-y-6">
              <p>
                Emil Heyerdahl (born 2002) is a professional racing driver from Norway, best known for winning the 2021 24H Series Championship. Competing in international GT and endurance racing, Heyerdahl has established himself as one of the most promising young talents in the sport.
              </p>
              <p>
                Beyond his on-track achievements, Heyerdahl is a leading digital influence in motorsport, with a social media following exceeding 105,000. He serves as a brand ambassador for several premium global partners, bridging the gap between elite performance and modern digital reach.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-bold uppercase italic tracking-tight">Resources</h2>
            <div className="space-y-4">
              {[
                { name: "High-Res Headshots", type: "ZIP / 45MB", icon: <ImageIcon size={18} /> },
                { name: "Action Racing Shots", type: "ZIP / 120MB", icon: <ImageIcon size={18} /> },
                { name: "Official Press Release", type: "PDF / 2MB", icon: <FileText size={18} /> },
                { name: "Sponsorship Deck", type: "PDF / 15MB", icon: <FileText size={18} /> }
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="text-white/40 group-hover:text-white transition-colors">{item.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold uppercase italic">{item.name}</h4>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest">{item.type}</span>
                    </div>
                  </div>
                  <Download size={16} className="text-white/20 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
