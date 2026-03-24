import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Calendar, MapPin } from 'lucide-react';

const Career = () => {
  const highlights = [
    {
      year: "2024",
      title: "GT3 International Series",
      desc: "Competing in premier GT3 categories across Europe and Asia. Multiple top-5 finishes.",
      location: "Global"
    },
    {
      year: "2021",
      title: "24H Series Overall Champion",
      desc: "Secured the overall championship title after a dominant season in endurance racing.",
      location: "Europe"
    },
    {
      year: "2020",
      title: "GT4 European Series",
      desc: "Standout debut season with multiple podium finishes and pole positions.",
      location: "Europe"
    },
    {
      year: "2018-2019",
      title: "Formula 4 Championship",
      desc: "Transitioned from karting to single-seaters with immediate competitive pace.",
      location: "Northern Europe"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none mb-10">
            Career <span className="text-white/20">Timeline</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl font-light">
            A track record of excellence from karting to the pinnacle of GT endurance racing.
          </p>
        </motion.div>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>

          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 md:gap-20 items-start ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`flex-1 w-full ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-4xl md:text-6xl font-black text-white/10 italic mb-2 block">{item.year}</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase italic tracking-tight mb-4">{item.title}</h3>
                <div className={`flex items-center gap-2 text-white/40 text-sm mb-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <MapPin size={14} /> {item.location}
                </div>
                <p className="text-white/60 font-light leading-relaxed max-w-lg ml-auto mr-0 md:mr-auto md:ml-0">
                  {item.desc}
                </p>
              </div>

              <div className="hidden md:flex w-12 h-12 glass rounded-full items-center justify-center z-10 shrink-0 mt-4">
                <Trophy size={20} className="text-white" />
              </div>

              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>

        {/* Future Goals */}
        <div className="mt-40 glass p-12 md:p-20 text-center">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-8">The Future</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-10">
            Next Stop: <span className="text-white/40">Le Mans</span>
          </h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            The ultimate ambition is to compete and win at the 24 Hours of Le Mans. Emil is currently building the technical and commercial foundation to secure a seat in the world's most famous race.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Career;
