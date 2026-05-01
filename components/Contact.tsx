"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowUpRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactItems = [
  { icon: Mail, label: "Email", value: "shama20302022@gmail.com", styles: "bg-purple-500/10 text-purple-500" },
  { icon: Phone, label: "Phone", value: "+92-316-1129505", styles: "bg-blue-500/10 text-blue-500" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan", styles: "bg-pink-500/10 text-pink-500" },
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-purple-500 font-bold tracking-[0.2em] text-sm mb-6 block uppercase">Connect</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                Let's <span className="gradient-text">Collaborate</span>.
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed">
                I'm currently looking for new opportunities and collaborations in web development and AI.
              </p>

              <div className="space-y-6">
                {contactItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-4 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${item.styles}`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-lg font-bold group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] glass border-white/5 shadow-2xl relative min-h-[500px] flex flex-col justify-center"
          >
            <div className="absolute top-10 right-10 opacity-10">
              <MessageSquare size={120} />
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                >
                  <div className="space-y-6">
                    <div className="relative group">
                      <input required type="text" placeholder=" " className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-purple-500 transition-colors peer" />
                      <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
                    </div>
                    <div className="relative group">
                      <input required type="email" placeholder=" " className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-purple-500 transition-colors peer" />
                      <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
                    </div>
                    <div className="relative group">
                      <textarea required rows={4} placeholder=" " className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-purple-500 transition-colors peer resize-none" />
                      <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Your Message</label>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-6 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-3 group">
                    Send Message
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-bold">Message Sent!</h3>
                  <p className="text-gray-400">Thank you, Shama will get back to you soon.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-purple-500 font-bold uppercase tracking-widest text-xs hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
