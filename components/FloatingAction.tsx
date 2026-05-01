"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20
      }}
      className="fixed bottom-8 right-8 z-[100] no-print"
    >
      <button
        onClick={() => window.print()}
        className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-2xl shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all group"
      >
        <Download size={20} className="group-hover:bounce" />
        <span className="hidden md:block">Download CV</span>
      </button>
    </motion.div>
  );
}
