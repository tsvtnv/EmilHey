import React from 'react';
import { motion } from 'motion/react';
import { Users, Zap, Globe, BarChart3, ChevronRight, Download } from 'lucide-react';
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
            Elevate your brand through elite motorsport performance and a proven track record of championships.
          </p>
        </motion.div>

        {/* Hero Image Banner */}
        <div className="relative mb-32 overflow-hidden aspect-[21/9]">
          <img 
            src="/PMF_5923.JPG" 
            alt="Emil Heyerdahl racing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex items-center p-12 md:p-20">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">
                15+ Years of<br />Motorsport Excellence
              </h2>
              <p className="text-white/60 font-light">
                From Norwegian Champion to 24H Series Champion — Emil brings a winning mentality and brand visibility to every partnership.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold uppercase italic tracking-tight">Why Partner With Us?</h2>
            <div className="space-y-10">
              {[
                { 
                  icon: <Globe size={24} />, 
                  title: "Global Visibility", 
                  desc: "Exposure at major international racing events including ADAC GT4 Germany (DTM platform), GT4 European Series, and endurance events across Europe." 
                },
                { 
                  icon: <Users size={24} />, 
                  title: "Proven Champion", 
                  desc: "Multiple youngest-ever records. Norwegian Champion, Nordic Champion, F4 Champion, 24H Series Champion — a winning brand to align with." 
                },
                { 
                  icon: <Zap size={24} />, 
                  title: "Premium Content Creation", 
                  desc: "High-end visual assets featuring your brand in the high-octane world of professional racing with DTM-level media coverage." 
                },
                { 
                  icon: <BarChart3 size={24} />, 
                  title: "Measurable ROI", 
                  desc: "Strategic activations designed to drive brand awareness, lead generation, and stakeholder engagement at top-tier motorsport events." 
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
            
            <div className="aspect-video bg-white/5 overflow-hidden">
              <img 
                src="/PMF_0089.JPG" 
                alt="Emil Heyerdahl post-race with trophy" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            <a
              href="/Career CV - E.Heyerdahl 26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 flex items-center gap-4 hover:bg-white/10 transition-all group"
            >
              <Download size={20} className="text-white/40 group-hover:text-white transition-colors" />
              <div>
                <h4 className="text-sm font-bold uppercase italic">Download Career CV</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Full career details & achievements</p>
              </div>
            </a>
          </div>
        </div>

        {/* Sponsor Images Showcase */}
        <div className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-10">On Track Branding</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-[3/4] overflow-hidden col-span-2 row-span-2">
              <img src="/IMG_4446.JPG" alt="Full racing suit branding" className="w-full h-full object-cover transition-all duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/PMF_5912.JPG" alt="Car branding on track" className="w-full h-full object-cover transition-all duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/IMG_9176.jpg" alt="Car branding aerial" className="w-full h-full object-cover transition-all duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/PMF_0007 1.JPG" alt="Podium branding" className="w-full h-full object-cover transition-all duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/PMF_2249.JPG" alt="Media presence" className="w-full h-full object-cover transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
