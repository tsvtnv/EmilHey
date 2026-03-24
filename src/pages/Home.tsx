import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Trophy, Users, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=2000" 
            alt="Racing Background" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <span className="text-xs uppercase tracking-[0.5em] font-bold text-white/60 mb-4 block">
              Professional Racing Driver
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              Emil <br /> <span className="text-white/20 outline-text">Heyerdahl</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 font-light leading-relaxed">
              2021 24H Series Champion. Pushing the limits of speed and personal branding in global motorsport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                to="/contact" 
                className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
              >
                Partner With Emil <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/media" 
                className="glass px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                View Media Kit
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-white/40"></div>
        </motion.div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-white text-black py-8 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="flex animate-marquee gap-20 items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-sm font-black uppercase tracking-widest italic">
              <span>24H Series Champion 2021</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>105K+ Social Audience</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Professional Athlete</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-white/5 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Emil Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-white/10 -z-10 hidden md:block"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-6">The Driver</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic leading-none">
            Built for <br /> <span className="text-white/40">Performance</span>
          </h3>
          <p className="text-white/60 text-lg mb-8 leading-relaxed font-light">
            Emil Heyerdahl is not just a driver; he's a high-performance brand. Since winning the 24H Series Championship in 2021, Emil has focused on bridging the gap between elite motorsport and modern digital influence.
          </p>
          <p className="text-white/60 text-lg mb-10 leading-relaxed font-light">
            With a competitive mindset forged on the world's most demanding tracks, he offers partners a unique combination of on-track success and off-track reach.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group">
            Full Story <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Achievements Grid */}
      <section className="py-32 bg-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-6">Track Record</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                Elite <span className="text-white/40">Results</span>
              </h3>
            </div>
            <Link to="/career" className="text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all">
              View Full Career
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "24H Series Champion", year: "2021", desc: "Overall championship winner in the prestigious endurance series." },
              { title: "Multiple Podiums", year: "2020-2023", desc: "Consistent top-tier performance across GT and Endurance racing." },
              { title: "GT3 Excellence", year: "Current", desc: "Competing at the highest level of GT racing globally." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass p-10 flex flex-col gap-6"
              >
                <Trophy className="text-white/20" size={40} />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">{item.year}</span>
                  <h4 className="text-2xl font-bold uppercase tracking-tight mb-4 italic">{item.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2 -z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-6">Partnerships</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic leading-tight">
              Accelerate Your <br /> <span className="text-white/40">Brand Reach</span>
            </h3>
            <p className="text-white/60 text-lg mb-12 leading-relaxed font-light">
              Partnering with Emil Heyerdahl goes beyond a logo on a car. It's an investment in a professional athlete with a massive digital footprint and a commitment to brand excellence.
            </p>
            
            <div className="space-y-8 mb-12">
              {[
                { icon: <Users size={20} />, title: "105K+ Engaged Audience", desc: "Direct access to a high-value demographic of motorsport and lifestyle enthusiasts." },
                { icon: <Zap size={20} />, title: "Premium Content", desc: "Professional-grade visual storytelling for your brand's digital channels." },
                { icon: <Trophy size={20} />, title: "Trackside Hospitality", desc: "Exclusive VIP experiences for your clients and stakeholders at major events." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 glass flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="text-lg font-bold uppercase tracking-tight mb-1 italic">{feature.title}</h5>
                    <p className="text-sm text-white/40">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              to="/partners" 
              className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all inline-flex items-center gap-2"
            >
              Explore Partnership <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] bg-white/5 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1547919307-1ecb10702e6f?auto=format&fit=crop&q=80&w=600" alt="Racing 1" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square bg-white/5 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600" alt="Racing 2" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-white/5 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600" alt="Racing 3" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] bg-white/5 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600" alt="Racing 4" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-8">Get In Touch</h2>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 italic leading-[0.9]">
            Ready for the <br /> Next Level?
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-black text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-black/80 transition-all"
            >
              Contact Management
            </Link>
            <Link 
              to="/media" 
              className="border-2 border-black px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all"
            >
              Download Media Kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
