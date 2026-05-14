import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, ExternalLink, Award, MessageSquare } from 'lucide-react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-block px-4 py-2 border border-purple-500/30 rounded-full bg-purple-500/5">
            <h2 className="text-[15px] font-bold tracking-wider uppercase text-purple-400">
              B.Tech Artificial Intelligence and Data Science '29
            </h2>
          </div>
          
          <div className="text-gray-100 mb-8 leading-relaxed max-w-xl flex flex-col gap-2">
            <div className="h-1 w-20 bg-purple-500 my-2" />
            <p className="text-xl md:text-2xl font-medium text-purple-400">Building Real-World Projects with AI, Data & Code</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <button 
              onClick={() => onNavigate('projects')}
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('highlights')}
              className="px-8 py-4 rounded-full font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 group"
            >
              <Award size={18} className="text-purple-400 group-hover:scale-110 transition-transform" />
              View Certifications
            </button>
            <button 
              onClick={() => onNavigate('communication')}
              className="px-8 py-4 rounded-full font-bold bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 text-blue-400 transition-all flex items-center gap-2 group"
            >
              <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
              Explore Communication
            </button>
            <a 
              href="https://github.com/spavitra2007"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/pavitrasubramanian2007"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all group scale-100 hover:scale-105">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">3+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Hackathons</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group scale-100 hover:scale-105">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">2+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Deployed Projects</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all group scale-100 hover:scale-105">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">3+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Presentations</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group scale-100 hover:scale-105">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">3+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Seminars</div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[450px] aspect-[3/4] group">
            {/* Soft shadow glow behind */}
            <div className="absolute inset-0 bg-purple-600/30 blur-[60px] rounded-full scale-90 group-hover:scale-100 transition-transform duration-700" />
            
            {/* Framed Image Container */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              <img 
                src="https://drive.google.com/thumbnail?id=1v0UCHoW01Js7_Dv0XdDx_dznwXA5iBdB&sz=w800"
                alt="Pavitra Subramanian"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="origin"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
