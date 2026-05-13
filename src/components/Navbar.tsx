import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const navItems: { name: string; page: Page }[] = [
  { name: 'About', page: 'home' },
  { name: 'Projects', page: 'projects' },
  { name: 'Highlights', page: 'highlights' },
  { name: 'Contact', page: 'contact' },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-full">
        <div 
          className="text-xl font-bold tracking-tighter text-white cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          Pavitra
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.page ? 'text-purple-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => window.location.href = 'mailto:spavitra2007@gmail.com?subject=Work Inquiry: Pavitra Subramanian'}
          className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
        >
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}
