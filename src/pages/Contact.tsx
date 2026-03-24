import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none mb-10">
            Get In <span className="text-white/20">Touch</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl font-light">
            For partnership enquiries, media requests, or management contact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold uppercase italic tracking-tight">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 glass flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Management</h4>
                    <p className="text-lg font-bold italic">management@emilheyerdahl.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 glass flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Press & Media</h4>
                    <p className="text-lg font-bold italic">press@emilheyerdahl.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 glass flex items-center justify-center shrink-0">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Social</h4>
                    <p className="text-lg font-bold italic">@emheyerdahl</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 glass flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Base</h4>
                    <p className="text-lg font-bold italic">Oslo, Norway / Monaco</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8">
              <h4 className="text-sm font-bold uppercase italic mb-4">Partnership Note</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                Please include your company name, objectives, and estimated timeline in your initial enquiry to help our management team process your request efficiently.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="glass p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:border-white focus:outline-none transition-all text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:border-white focus:outline-none transition-all text-white placeholder:text-white/10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Subject</label>
                <select className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:border-white focus:outline-none transition-all text-white appearance-none">
                  <option className="bg-black">Partnership Enquiry</option>
                  <option className="bg-black">Media Request</option>
                  <option className="bg-black">Management Contact</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we work together?"
                  className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:border-white focus:outline-none transition-all text-white placeholder:text-white/10 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-white text-black py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-all flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
