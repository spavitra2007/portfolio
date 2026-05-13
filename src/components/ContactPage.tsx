import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin, ArrowLeft, ArrowUpRight } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export default function ContactPage({ onBack }: ContactPageProps) {
  const contactLinks = [
    {
      name: 'Phone',
      value: '9025548932',
      href: 'tel:9025548932',
      icon: Phone,
      color: 'purple',
      label: 'Direct Line'
    },
    {
      name: 'Email',
      value: 'spavitra2007@gmail.com',
      href: 'mailto:spavitra2007@gmail.com?subject=Contact via Portfolio',
      icon: Mail,
      color: 'blue',
      label: 'Gmail'
    },
    {
      name: 'LinkedIn',
      value: 'pavitrasubramanian2007',
      href: 'https://linkedin.com/in/pavitrasubramanian2007',
      icon: Linkedin,
      color: 'blue',
      label: 'Professional network'
    },
    {
      name: 'GitHub',
      value: 'spavitra2007',
      href: 'https://github.com/spavitra2007',
      icon: Github,
      color: 'white',
      label: 'Open Source'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.button
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold tracking-widest uppercase">Back to Portfolio</span>
      </motion.button>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Let's <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent italic">Connect</span>.
          </h1>
          
          <div className="mt-16 space-y-4">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 mb-6">Availability</div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white font-bold">Open for Internships & Projects</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Phone' && link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Phone' && link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group relative flex items-center gap-6 bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.06] hover:border-purple-500/50 transition-all shadow-xl overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 duration-500 ${
                  link.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                  link.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-white/10 text-white'
                }`}>
                  <Icon size={24} />
                </div>
                
                <div className="flex-1 relative z-10">
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-1">{link.label}</div>
                  <div className="text-xl font-black text-white group-hover:text-purple-200 transition-colors">{link.value}</div>
                </div>

                <div className="relative z-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 mr-2">
                  <ArrowUpRight className="text-purple-400" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="text-gray-700 text-[10px] tracking-[0.4em] uppercase font-black">
          © 2026 Pavitra Subramanian
        </div>
        <div className="flex gap-8">
           <a href="https://github.com/spavitra2007" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Github</a>
           <a href="https://linkedin.com/in/pavitrasubramanian2007" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Linkedin</a>
        </div>
      </motion.div>
    </div>
  );
}
