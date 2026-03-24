import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Trophy, Users, Zap, ArrowUpRight, Flag, Timer, Award, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/PMF_5912.JPG" 
            alt="Emil Heyerdahl on track" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
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
              Professional Racing Driver &bull; Norway
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              Emil <br /> <span className="text-white/20 outline-text">Heyerdahl</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 font-light leading-relaxed">
              Focused, future-oriented and successful. 15+ years in motorsport &mdash; from karting champion to ADAC GT4 Germany competitor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                to="/contact" 
                className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
              >
                Partner With Emil <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="/Career CV - E.Heyerdahl 26.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>

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
              <span>Norwegian Champion</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>ADAC GT4 Germany</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
              <span>Youngest Ever Nordic Champion</span>
              <span className="w-2 h-2 bg-black rounded-full"></span>
            </div>
          ))}
        </div>
      </section>

      {/* Who Is Emil */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-white/5 overflow-hidden">
            <img 
              src="/IMG_2683.jpg" 
              alt="Emil Heyerdahl portrait with helmet" 
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-white/10 -z-10 hidden md:block"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-6">Who Is Emil?</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic leading-none">
            Focused &<br /> <span className="text-white/40">Future-Oriented</span>
          </h3>
          <p className="text-white/60 text-lg mb-8 leading-relaxed font-light">
            Emil Heyerdahl (23) comes from a small place just outside Oslo, the capital of Norway. Motorsport has been part of Emil's life from the very beginning. His father, Erik, competed in rallycross at national level, which meant Emil grew up around the sport from an early age.
          </p>
          <p className="text-white/60 text-lg mb-10 leading-relaxed font-light">
            After already more than 15 years in motorsport, Emil's career has developed into what many consider one of the most focused, determined and future-oriented journeys in Norwegian motorsport.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest group">
            Full Story <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Career Highlights Grid */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "24H Series Champion", year: "2021", desc: "Winner of TCE category. Youngest ever champion. Podiums at Dubai, Barcelona, Paul Ricard, Hungary, Hockenheim & Sebring.", icon: <Trophy size={36} /> },
              { title: "Norwegian Champion", year: "2015/16", desc: "Multiple Series Champion. Youngest ever Nordic Champion. Represented Norway in World & Euro Championships.", icon: <Flag size={36} /> },
              { title: "Formula 4 Breakthrough", year: "2019", desc: "North European F4 champion. Youngest ever winner. 8/11 race wins & 11/11 podiums.", icon: <Timer size={36} /> },
              { title: "ADAC GT4 Germany", year: "2025", desc: "Consistently the fastest Porsche. 5 podiums. Building a strong performing team. DNLS GT3 appearance.", icon: <Award size={36} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass p-10 flex flex-col gap-6"
              >
                <div className="text-white/20">{item.icon}</div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">{item.year}</span>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-4 italic">{item.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div whileHover={{ scale: 1.03 }} className="aspect-[3/4] overflow-hidden row-span-2">
            <img src="/IMG_4446.JPG" alt="Emil in racing suit" className="w-full h-full object-cover transition-all duration-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="aspect-square overflow-hidden">
            <img src="/PMF_0007 1.JPG" alt="Podium celebration" className="w-full h-full object-cover transition-all duration-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="aspect-square overflow-hidden">
            <img src="/IMG_9176.jpg" alt="Racing on track" className="w-full h-full object-cover transition-all duration-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="aspect-[3/4] overflow-hidden row-span-2">
            <img src="/PMF_7269.JPG" alt="Emil in pit lane" className="w-full h-full object-cover transition-all duration-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="aspect-square overflow-hidden">
            <img src="/PMF_0089.JPG" alt="Post-race celebration" className="w-full h-full object-cover transition-all duration-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="aspect-square overflow-hidden">
            <img src="/PMF_5912.JPG" alt="On the grid" className="w-full h-full object-cover transition-all duration-500" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-6">My Values</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
              Values As An <span className="text-white/40">Athlete</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Teamplayer", desc: "As a team member, you understand your role within the team and work to achieve your duties to the best of your ability." },
              { title: "Fair Race", desc: "Respect on and off the racetrack to create well-being and security, as a basis for development both sportingly and as a human person." },
              { title: "Always Give It Your All", desc: "To become the best, the right amount of time and effort must be put in. Together as a team we will work to be the best in the world." },
              { title: "Human Rights", desc: "The right to life and liberty, freedom from slavery and torture, freedom of opinion and expression, the right to work and education." },
              { title: "Sustainability", desc: "It is a race outside of my control as a racing driver, but I am part of the race together for the environment." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="glass p-8 flex flex-col gap-4 text-center"
              >
                <h4 className="text-lg font-bold uppercase italic tracking-tight">{value.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{value.desc}</p>
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
              Partnering with Emil Heyerdahl goes beyond a logo on a car. It's an investment in a professional athlete with a proven track record and a commitment to excellence on and off the track.
            </p>
            
            <div className="space-y-8 mb-12">
              {[
                { icon: <Users size={20} />, title: "Global Exposure", desc: "Visibility at major international racing events across Europe, reaching millions of motorsport fans." },
                { icon: <Zap size={20} />, title: "Premium Content", desc: "Professional-grade visual storytelling for your brand's digital channels." },
                { icon: <Trophy size={20} />, title: "Proven Winner", desc: "Multiple championships and youngest-ever records across karting, Formula 4, and endurance racing." }
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
                <img src="/PMF_1094.JPG" alt="Emil in pit lane" className="w-full h-full object-cover transition-all duration-500" />
              </div>
              <div className="aspect-square bg-white/5 overflow-hidden">
                <img src="/PMF_2249.JPG" alt="Emil with DTM media" className="w-full h-full object-cover transition-all duration-500" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-white/5 overflow-hidden">
                <img src="/03139B4A-5E17-415F-B56D-3E91D5D7C612.jpg" alt="Emil casual" className="w-full h-full object-cover transition-all duration-500" />
              </div>
              <div className="aspect-[3/4] bg-white/5 overflow-hidden">
                <img src="/PMF_5086.JPG" alt="Emil behind the scenes" className="w-full h-full object-cover transition-all duration-500" />
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
            <a 
              href="/Career CV - E.Heyerdahl 26.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-12 py-5 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
