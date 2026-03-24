import React from 'react';
import { motion } from 'motion/react';
import { Users, Zap, Globe, BarChart3, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none mb-10">
            Partner <span className="text-white/20">With Emil</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl font-light">
            Elevate your brand through elite motorsport performance and high-impact digital storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold uppercase italic tracking-tight">Why Partner With Us?</h2>
            <div className="space-y-10">
              {[
                { 
                  icon: <Globe size={24} />, 
                  title: "Global Visibility", 
                  desc: "Exposure at major international racing events across Europe, Asia, and the Middle East, reaching millions of viewers." 
                },
                { 
                  icon: <Users size={24} />, 
                  title: "105K+ Digital Reach", 
                  desc: "Direct access to a loyal and engaged audience of motorsport fans, luxury lifestyle enthusiasts, and aspiring athletes." 
                },
                { 
                  icon: <Zap size={24} />, 
                  title: "Premium Content Creation", 
                  desc: "High-end visual assets featuring your brand in the high-octane world of professional racing." 
                },
                { 
                  icon: <BarChart3 size={24} />, 
                  title: "Measurable ROI", 
                  desc: "Strategic activations designed to drive brand awareness, lead generation, and stakeholder engagement." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-14 h-14 glass flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase italic tracking-tight mb-2">{item.title}</h4>
                    <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass p-10 space-y-8">
              <h3 className="text-2xl font-bold uppercase italic tracking-tight">Partnership Opportunities</h3>
              <div className="space-y-4">
                {[
                  "Primary Car Branding",
                  "Suit & Helmet Placement",
                  "Social Media Campaigns",
                  "Corporate Track Days",
                  "Keynote Speaking & Appearances",
                  "Product Integration & Reviews"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                    <span className="text-white/80 font-light">{item}</span>
                    <ChevronRight size={16} className="text-white/20" />
                  </div>
                ))}
              </div>
              <Link 
                to="/contact" 
                className="w-full bg-white text-black py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                Enquire Now
              </Link>
            </div>
            
            <div className="bg-white text-black p-10">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6">Audience Insights</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="text-4xl font-black italic">105K+</span>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Followers</p>
                </div>
                <div>
                  <span className="text-4xl font-black italic">85%</span>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Male (18-34)</p>
                </div>
                <div>
                  <span className="text-4xl font-black italic">2.4M</span>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Monthly Reach</p>
                </div>
                <div>
                  <span className="text-4xl font-black italic">4.2%</span>
                  <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Engagement Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
