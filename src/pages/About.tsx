import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none mb-10">
            About <span className="text-white/20">Emil</span>
          </h1>
          <div className="w-20 h-1 bg-white"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-10">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80 italic">
              "Focused, future-oriented and successful history... one of the most determined journeys in Norwegian motorsport."
            </p>
            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
              <p>
                Emil Heyerdahl (23) comes from a small place just outside Oslo, the capital of Norway. Motorsport has been part of Emil's life from the very beginning. His father, Erik, competed in rallycross at national level, which meant Emil grew up around the sport from an early age.
              </p>
              <p>
                However, the path into motorsport has never been easy. Coming from an average Norwegian family financially, Emil and his father have had to work extremely hard over the years to create opportunities and keep progressing in the sport.
              </p>
              <p>
                Nevertheless, after already more than 15 years in motorsport, Emil's career has developed into what many consider one of the most focused, determined and future-oriented journeys in Norwegian motorsport.
              </p>
              <p>
                Starting his karting career in 2008, Emil quickly climbed through the junior ranks, achieving 19 out of 21 podiums and becoming Norwegian Champion. By 2015, he began representing Norway in World and European Championships, becoming the youngest ever Nordic Champion.
              </p>
              <p>
                His breakthrough in car racing came in 2019, winning the North European Formula 4 championship as the youngest ever winner, with 8 out of 11 race wins and an incredible 11 out of 11 podium finishes. That same year he received the Norwegian Motorsport Athlete Award.
              </p>
              <p>
                In 2021, Emil pivoted to endurance racing and became the 24H Series Champion as the youngest ever champion, winning podiums at 24H Dubai, 24H Barcelona, 12H Paul Ricard, 12H Hungary, 12H Hockenheim and 24H Sebring.
              </p>
              <p>
                Today, Emil competes in ADAC GT4 Germany, consistently proving himself as the fastest Porsche on the grid with 5 podiums in 2025, while also making appearances in DNLS GT3 and coaching AM drivers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
              {[
                { label: "Nationality", value: "Norwegian" },
                { label: "Age", value: "23" },
                { label: "Base", value: "Oslo, Norway" },
                { label: "Series", value: "ADAC GT4" }
              ].map((item, idx) => (
                <div key={idx}>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">{item.label}</span>
                  <span className="text-lg font-bold uppercase italic">{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href="/Career CV - E.Heyerdahl 26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all"
            >
              <Download size={16} /> Download Full CV (PDF)
            </a>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[3/4] bg-white/5 overflow-hidden">
              <img 
                src="/IMG_4446.JPG" 
                alt="Emil in racing suit - official portrait" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 overflow-hidden">
                <img 
                  src="/03139B4A-5E17-415F-B56D-3E91D5D7C612.jpg" 
                  alt="Emil off-track" 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="aspect-square bg-white/5 overflow-hidden">
                <img 
                  src="/DSCN3510.jpg" 
                  alt="Emil casual portrait" 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>
            <div className="glass p-8 space-y-6">
              <h4 className="text-xl font-bold uppercase italic tracking-tight">Values As An Athlete</h4>
              <ul className="space-y-4">
                {[
                  "Teamplayer — understand your role and give your best",
                  "Fair Race — respect on and off the track",
                  "Always give it your all — the right effort to be the best",
                  "Human Rights — freedom, dignity and equality",
                  "Sustainability — racing together for the environment"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 bg-white rotate-45 shrink-0"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
