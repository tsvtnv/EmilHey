import React from 'react';
import { motion } from 'motion/react';
import { Trophy, MapPin, Download } from 'lucide-react';

const Career = () => {
  const timeline = [
    {
      year: "2008",
      title: "First Season in Karting",
      achievements: ["Beginning of Emil's motorsport journey at a young age"],
      image: "/DSCN3512.jpg"
    },
    {
      year: "2012",
      title: "The Climb Through Junior Ranks",
      achievements: [
        "19/21 Podiums",
        "Norwegian Champion",
        "Multiple Series Champion"
      ],
      image: "/DSCN3510.jpg"
    },
    {
      year: "2015/16",
      title: "International Career Started",
      achievements: [
        "Represented Norway in World & Euro Championships",
        "Norwegian Champion",
        "Multiple Series Champion",
        "Youngest ever Nordic Champion"
      ],
      image: "/E25AB9DE-2C30-4B27-A6D7-D2B259CEF3B6 2.jpg"
    },
    {
      year: "2018",
      title: "Porsche Carrera Cup Champion",
      achievements: [
        "Norwegian Motorsport Athlete Award",
        "Youngest ever race winner",
        "6 Podiums",
        '"Rookie of the year" at age 17'
      ],
      image: "/1281E470-C48D-4FC1-BB75-353A52241FF9.jpg"
    },
    {
      year: "2019",
      title: "Breakthrough Year in Racing",
      achievements: [
        "North European Formula 4 Champion",
        "Youngest ever winner",
        "8/11 Race wins & 11/11 Podiums"
      ],
      image: "/2AF7CDF6-CB7B-4496-B40B-EB75FDA51381.jpg"
    },
    {
      year: "2021",
      title: "Started the Endurance Path",
      achievements: [
        "24H Series Champion",
        "Winner of TCE category",
        "Youngest ever champion",
        "Podiums at 24H Dubai, 24H Barcelona, 12H Paul Ricard, 12H Hungary, 12H Hockenheim & 24H Sebring"
      ],
      image: "/IMG_8438 2.jpg"
    },
    {
      year: "2022/23",
      title: "Future-Oriented Steps",
      achievements: [
        "Aston Martin Academy Driver",
        "GT4 European Series",
        "Achieved the Nurburgring Permit",
        "4/7 Podiums",
        "Multiple Sim Racing Titles"
      ],
      image: "/IMG_5083 2.jpg"
    },
    {
      year: "2024",
      title: "Best Performing Car",
      achievements: [
        "GT4 European Series",
        "Consistently the fastest Porsche",
        "Races in LMP3",
        "Won a talent competition",
        "Coaching AM driver"
      ],
      image: "/IMG_6473.JPG"
    },
    {
      year: "2025",
      title: "GT4 Title Hunting",
      achievements: [
        "ADAC GT4 Germany",
        "Consistently the fastest Porsche",
        "5 Podiums",
        "Building a strong performing team",
        "Coaching AM driver",
        "DNLS GT3 appearance"
      ],
      image: "/PMF_0007 1.JPG"
    }
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
              Career <span className="text-white/20">Timeline</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl font-light">
              Focused, future-oriented and successful — from karting in 2008 to ADAC GT4 Germany in 2025.
            </p>
          </div>
          <a
            href="/Career CV - E.Heyerdahl 26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all flex items-center gap-3 shrink-0"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        <div className="space-y-0 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10"></div>

          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start pb-16 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`flex-1 w-full pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-5xl md:text-7xl font-black text-white/10 italic mb-2 block">{item.year}</span>
                <h3 className="text-2xl md:text-3xl font-bold uppercase italic tracking-tight mb-6">{item.title}</h3>
                <ul className={`space-y-2 ${idx % 2 === 0 ? 'md:ml-auto' : ''} max-w-lg`}>
                  {item.achievements.map((achievement, aidx) => (
                    <li key={aidx} className={`flex items-center gap-3 text-white/60 font-light ${idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                      <div className="w-1.5 h-1.5 bg-white/40 rotate-45 shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute left-0 md:relative md:left-auto flex w-12 h-12 glass rounded-full items-center justify-center z-10 shrink-0 mt-4">
                <Trophy size={20} className="text-white" />
              </div>

              <div className="flex-1 hidden md:block">
                <div className="aspect-[16/10] bg-white/5 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Images Grid */}
        <div className="mt-20 mb-20">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-10">On Track</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/PMF_5912.JPG",
              "/PMF_5923.JPG",
              "/IMG_9176.jpg",
              "/PMF_0089.JPG",
              "/PMF_7421.JPG",
              "/PMF_7423.JPG",
              "/PMF_3895.JPG",
              "/PMF_3884 2.JPG"
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="aspect-square bg-white/5 overflow-hidden"
              >
                <img src={img} alt={`Racing action ${idx + 1}`} className="w-full h-full object-cover transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="glass p-12 md:p-20 text-center">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-8">The Future</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-10">
            GT4 Title <span className="text-white/40">& Beyond</span>
          </h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Emil is currently hunting for the ADAC GT4 Germany title while building towards GT3 and the highest levels of endurance racing. With a proven track record of being the youngest champion at every level, the future is bright.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Career;
