import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

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
              "Racing is not just about speed; it's about precision, mental fortitude, and the relentless pursuit of perfection."
            </p>
            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
              <p>
                Born with a natural affinity for speed, Emil Heyerdahl has spent his life mastering the art of the racing line. His journey through the ranks of international motorsport has been defined by a singular focus: winning at the highest level.
              </p>
              <p>
                The turning point in his career came in 2021, when he secured the 24H Series Championship. This victory didn't just prove his pace; it demonstrated his ability to perform under extreme pressure over long durations—a hallmark of a true endurance specialist.
              </p>
              <p>
                Off the track, Emil is a modern athlete who understands the power of storytelling. He has cultivated a digital audience of over 105,000 followers, providing them with an unfiltered look into the life of a professional racing driver. This transparency has made him a sought-after partner for premium brands looking to align themselves with excellence and ambition.
              </p>
              <p>
                Today, Emil continues to compete in elite GT series worldwide, while expanding his influence as a brand ambassador and media personality. His philosophy is simple: whether on the track or in a boardroom, performance is the only metric that matters.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
              {[
                { label: "Nationality", value: "Norwegian" },
                { label: "Born", value: "2002" },
                { label: "Base", value: "Oslo / Monaco" },
                { label: "Series", value: "GT3 / Endurance" }
              ].map((item, idx) => (
                <div key={idx}>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">{item.label}</span>
                  <span className="text-lg font-bold uppercase italic">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="aspect-[3/4] bg-white/5 overflow-hidden">
              <img 
                src="/face photo.jpg" 
                alt="Emil Portrait" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="glass p-8 space-y-6">
              <h4 className="text-xl font-bold uppercase italic tracking-tight">Racing Philosophy</h4>
              <ul className="space-y-4">
                {[
                  "Data-driven performance optimization",
                  "Elite physical and mental conditioning",
                  "Strategic brand alignment",
                  "Relentless pursuit of championship titles"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 bg-white rotate-45"></div>
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
