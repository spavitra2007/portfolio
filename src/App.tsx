/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import LogoStrip from './components/LogoStrip';
import ProjectsPage from './components/ProjectsPage';
import HighlightsPage from './components/HighlightsPage';
import ContactPage from './components/ContactPage';
import { AnimatePresence, motion } from 'motion/react';

export type Page = 'home' | 'projects' | 'highlights' | 'communication' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#050505] font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden">
      <Background />
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <div className="relative z-10 font-sans">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <div key="home">
              <Hero onNavigate={navigateTo} />
              <LogoStrip />
              
              {/* Connect CTA Section */}
              <section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-purple-500/[0.02]">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                      Have a project in mind or looking for a <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent italic">collaborator</span>?
                    </h2>
                    <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">
                      I'm always open to discussing new opportunities and technical challenges.
                    </p>
                    <div className="pt-8">
                      <button 
                        onClick={() => window.location.href = 'mailto:spavitra2007@gmail.com?subject=Collaboration Inquiry: Pavitra Subramanian'}
                        className="bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-purple-500/10"
                      >
                        Let's Talk
                      </button>
                    </div>
                  </motion.div>
                </div>
              </section>
              
              <footer className="py-24 px-6 text-center border-t border-white/5 bg-gradient-to-b from-transparent to-purple-500/[0.02]">
                <div className="text-gray-700 text-[10px] tracking-[0.4em] uppercase font-black">
                  © 2026 Pavitra Subramanian • Ported with Pride
                </div>
              </footer>
            </div>
          )}

          {currentPage === 'projects' && (
            <motion.div key="projects">
              <ProjectsPage onBack={() => navigateTo('home')} onNavigate={navigateTo} />
            </motion.div>
          )}



          {(currentPage === 'highlights' || currentPage === 'communication') && (
            <motion.div key="highlights">
              <HighlightsPage 
                onBack={() => navigateTo('home')} 
                initialSection={currentPage === 'communication' ? 'communication' : 'all'}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div key="contact">
              <ContactPage onBack={() => navigateTo('home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
