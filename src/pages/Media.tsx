import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ExternalLink, X, FileText } from 'lucide-react';

const Media = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const portraitImages = [
    { src: "/IMG_4446.JPG", label: "Official Racing Portrait" },
    { src: "/IMG_2683.jpg", label: "Portrait with Helmet" },
    { src: "/03139B4A-5E17-415F-B56D-3E91D5D7C612.jpg", label: "Lifestyle Portrait" },
    { src: "/DSCN3510.jpg", label: "Casual Portrait" },
    { src: "/DSCN3512.jpg", label: "Early Days" },
  ];

  const racingImages = [
    { src: "/PMF_5912.JPG", label: "On the Grid" },
    { src: "/PMF_5923.JPG", label: "Race Action" },
    { src: "/PMF_0089.JPG", label: "Post-Race Celebration" },
    { src: "/PMF_0007 1.JPG", label: "Podium - Hockenheimring 2025" },
    { src: "/PMF_0009 1.JPG", label: "Podium Close-up" },
    { src: "/PMF_0012.JPG", label: "Victory Moment" },
    { src: "/PMF_3895.JPG", label: "Track Action" },
    { src: "/PMF_3884 2.JPG", label: "Racing Close-up" },
    { src: "/PMF_7421.JPG", label: "On Track" },
    { src: "/PMF_7423.JPG", label: "Race Pace" },
    { src: "/IMG_9176.jpg", label: "Aerial Track Shot" },
  ];

  const paddockImages = [
    { src: "/PMF_1094.JPG", label: "Pit Lane" },
    { src: "/PMF_1279.JPG", label: "Paddock Walk" },
    { src: "/PMF_2249.JPG", label: "DTM Social Media" },
    { src: "/PMF_2519.jpg", label: "Behind the Scenes" },
    { src: "/PMF_2702.JPG", label: "Team Moments" },
    { src: "/PMF_5086.JPG", label: "Trackside" },
    { src: "/PMF_5096.JPG", label: "Pre-Race Preparation" },
    { src: "/PMF_5104.JPG", label: "Focus" },
    { src: "/PMF_5203.JPG", label: "Between Sessions" },
    { src: "/PMF_5211.JPG", label: "Paddock Life" },
    { src: "/PMF_5229.JPG", label: "Race Day" },
    { src: "/PMF_6164.JPG", label: "Team Work" },
    { src: "/PMF_7269.JPG", label: "Walking the Pit Lane" },
    { src: "/PMF_0568 2.JPG", label: "Pre-Race" },
    { src: "/PMF_3919 2.jpg", label: "Behind the Scenes" },
  ];

  const otherImages = [
    { src: "/E25AB9DE-2C30-4B27-A6D7-D2B259CEF3B6 2.jpg", label: "Career Moment" },
    { src: "/1281E470-C48D-4FC1-BB75-353A52241FF9.jpg", label: "Racing Heritage" },
    { src: "/2AF7CDF6-CB7B-4496-B40B-EB75FDA51381.jpg", label: "Early Racing" },
    { src: "/IMG_8438 2.jpg", label: "Endurance Racing" },
    { src: "/IMG_5083 2.jpg", label: "GT4 European" },
    { src: "/IMG_6473.JPG", label: "2024 Season" },
  ];

  const allImages = [...portraitImages, ...racingImages, ...paddockImages, ...otherImages];

  const GallerySection = ({ title, images }: { title: string; images: { src: string; label: string }[] }) => (
    <div className="mb-20">
      <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-white/40 mb-10">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            onClick={() => setLightbox(img.src)}
            className="aspect-square bg-white/5 overflow-hidden group relative cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
              <ExternalLink size={20} className="text-white" />
              <span className="text-[10px] uppercase tracking-widest text-white/80">{img.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-20">
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white/60 hover:text-white" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <img src={lightbox} alt="Full size" className="max-w-full max-h-[90vh] object-contain" />
          </motion.div>
        )}
      </AnimatePresence>

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
              Press-ready assets, high-resolution imagery, and official career CV. {allImages.length} images available.
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

        {/* Gallery Sections */}
        <GallerySection title="Portraits & Headshots" images={portraitImages} />
        <GallerySection title="Racing & On Track" images={racingImages} />
        <GallerySection title="Paddock & Behind the Scenes" images={paddockImages} />
        <GallerySection title="Career Archive" images={otherImages} />

        {/* Media Bio + Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-8 space-y-10">
            <h2 className="text-3xl font-bold uppercase italic tracking-tight">Official Media Bio</h2>
            <div className="glass p-10 text-white/60 font-light leading-relaxed space-y-6">
              <p>
                Emil Heyerdahl (23) is a professional racing driver from Norway. Motorsport has been part of Emil's life from the very beginning — his father Erik competed in rallycross at national level. After more than 15 years in motorsport, Emil's career has developed into one of the most focused, determined and future-oriented journeys in Norwegian motorsport.
              </p>
              <p>
                Key milestones include becoming Norwegian Champion and youngest ever Nordic Champion in karting, winning the North European Formula 4 championship with 8/11 race wins (youngest ever winner), and securing the 2021 24H Series Championship as the youngest ever champion with podiums at Dubai, Barcelona, Paul Ricard, Hungary, Hockenheim and Sebring.
              </p>
              <p>
                Today, Emil competes in ADAC GT4 Germany driving a Porsche, consistently proving to be the fastest in his class with 5 podiums in 2025. He has also made appearances in DNLS GT3 and coaches AM drivers.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-bold uppercase italic tracking-tight">Resources</h2>
            <div className="space-y-4">
              <a
                href="/Career CV - E.Heyerdahl 26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-white/40 group-hover:text-white transition-colors"><FileText size={18} /></div>
                  <div>
                    <h4 className="text-sm font-bold uppercase italic">Career CV</h4>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">PDF</span>
                  </div>
                </div>
                <Download size={16} className="text-white/20 group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="glass p-8 space-y-4">
              <h4 className="text-sm font-bold uppercase italic">Contact For Media</h4>
              <div className="space-y-2">
                <p className="text-sm text-white/60">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">General</span>
                  info@emilheyerdahl.com
                </p>
                <p className="text-sm text-white/60">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Management</span>
                  manager@emilheyerdahl.com
                </p>
                <p className="text-sm text-white/60">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest block mb-1">Phone</span>
                  (+47) 932 64 725
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
