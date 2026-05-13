import React from 'react';
import { motion } from 'motion/react';

const logos = [
  'Python', 'antigravity', 'C', 'C++', 'Flutter', 'Firebase', 
  'Node.js', 'Java', 'Netlify', 'Vercel', 'GitHub'
];

export default function LogoStrip() {
  return (
    <div className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-12">
          Tech Stack & Expertise
        </h3>
        
        <div className="relative">
          {/* Faders */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-bold text-gray-600 hover:text-white transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
