import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, X, Info, FileText, Presentation } from 'lucide-react';
import { Page } from '../App';
import { getDriveDirectLink } from '../utils';

interface Project {
  id: number;
  title: string;
  image: string;
  galleryImages?: string[];
  demoUrl?: string;
  githubUrl?: string;
  pdfUrl?: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NourishNet',
    image: 'https://drive.google.com/thumbnail?id=1jCROMue0UfSbQ8rjMZs_TKJcczU1uY5X&sz=w800',
    demoUrl: 'https://lnkd.in/g7pWwZ-w',
    githubUrl: 'https://lnkd.in/grs_pXv5',
    shortDesc: 'AI-powered smart fridge platform to rescue surplus food.',
    longDesc: 'AI-powered smart fridge platform to rescue surplus food and feed communities instead of landfills. Features smart collection, route planning, cold storage flow, and live impact metrics. ₹500 = 25 nutritious meals.',
    tags: ['AI', 'Sustainability', 'IoT']
  },
  {
    id: 2,
    title: 'Acoustic Pipeline Leak Detection System',
    image: 'https://drive.google.com/thumbnail?id=1TvQMRtSfxW-RYHj8Qv2OjTQ_TqMeTF9G&sz=w800',
    demoUrl: 'https://lnkd.in/dEk7XNMi',
    githubUrl: 'https://lnkd.in/dm3Kg5-j',
    shortDesc: 'Uses dual-sensor acoustic analysis to detect and precisely locate leaks.',
    longDesc: 'Uses dual-sensor acoustic analysis and cross-correlation to detect and precisely locate leaks in pipelines in real time. Built for infrastructure safety and predictive maintenance.',
    tags: ['Signal Processing', 'Infrastructure', 'Real-time']
  },
  {
    id: 3,
    title: 'Sentiment Analytics',
    image: 'https://drive.google.com/thumbnail?id=1slY2qvN8-3hRHqu4LgF_jxoec28OKh-i&sz=w800',
    galleryImages: [
      'https://drive.google.com/thumbnail?id=1slY2qvN8-3hRHqu4LgF_jxoec28OKh-i&sz=w800',
      'https://drive.google.com/thumbnail?id=1rEp9FPI_LE-pbsSBhBMQeNLl9nq3YcUL&sz=w800'
    ],
    shortDesc: 'Visualize and analyze digital emotions through high-fidelity visualizations.',
    longDesc: 'Sentiments Analytic Platform: Visualize and analyze digital emotions through high-fidelity data visualizations. Real-time processing of communication patterns with actionable insights. Analyzes sentiment distribution across platforms like Instagram, Twitter, and Facebook with focus on positive engagement.',
    tags: ['Power BI', 'Sentiment Analysis', 'Data Visualization']
  },
  {
    id: 4,
    title: 'Smart-City Intelligence',
    image: 'https://drive.google.com/thumbnail?id=1Bb7ZEdzrrpiuabGCGXf_RpPe4-pWzB8g&sz=w1200',
    demoUrl: 'https://madurai-pure-pulse.base44.app',
    shortDesc: 'AI-powered capabilities designed for modern municipal governance.',
    longDesc: 'A high-fidelity AI-powered sanitation command platform for municipalities. Features real-time hotspot detection, predictive routing for cleanup teams, a live command center for coordinators, and progress tracking towards Zero-Landfill 2027 goals.',
    tags: ['Smart City', 'AI', 'Municipal Governance']
  }
];

interface ProjectsPageProps {
  onBack: () => void;
  onNavigate: (page: Page) => void;
}

export default function ProjectsPage({ onBack, onNavigate }: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
      >
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <header className="mb-24 scale-95 md:scale-100 origin-left">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">Projects</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl leading-tight font-medium opacity-60">
            Real-world projects built using AI, analytics, and software to solve practical challenges.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-[#0A0A0A] border border-white/10 rounded-[3rem] overflow-hidden hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500 flex flex-col h-full"
            >
                <div className="aspect-[16/10] bg-gray-900 relative overflow-hidden">
                  <img 
                    src={getDriveDirectLink(project.image)} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent pointer-events-none" />
                </div>

              {/* Content */}
              <div className="p-10 md:p-12 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black px-4 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10 uppercase tracking-[0.2em] group-hover:border-purple-500/30 group-hover:text-purple-400 transition-all duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-[1.1] tracking-tighter group-hover:text-purple-400 transition-colors duration-500">
                  {project.title}
                </h3>
                
                <div className="mt-auto pt-10 flex flex-wrap gap-4 items-center">
                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full text-sm font-black hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-white/10 text-white px-6 py-3.5 rounded-full text-sm font-black hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}

                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-gray-500 px-2 py-3 rounded-full text-sm font-black hover:text-white transition-all ml-auto hover:bg-white/5 px-6"
                  >
                    Details
                    <ArrowLeft size={18} className="rotate-180" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-all z-20"
              >
                <X size={28} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="aspect-square lg:aspect-auto bg-gray-900 border-r border-white/10">
                  <img 
                    src={getDriveDirectLink(selectedProject.image)} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 md:p-20 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs font-black text-purple-400 uppercase tracking-[0.3em]">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-[1.1]">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                    {selectedProject.longDesc}
                  </p>

                  {selectedProject.title === 'Sentiment Analytics' && (
                    <div className="mb-12">
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                          <div className="text-2xl font-black text-purple-400">75.78%</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-500">Positive</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                          <div className="text-2xl font-black text-blue-400">57.57</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-500">Mood Score</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                          <div className="text-2xl font-black text-purple-400">0.60</div>
                          <div className="text-[10px] uppercase tracking-widest text-gray-500">Avg Sentiment</div>
                        </div>
                      </div>

                      <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs opacity-50">Sentiment Distribution</h4>
                        <div className="space-y-4">
                          {[
                            { label: 'Contentment', value: 33.3, color: 'bg-blue-500' },
                            { label: 'Positive', value: 25.0, color: 'bg-purple-500' },
                            { label: 'Inspiration', value: 16.7, color: 'bg-blue-400' },
                            { label: 'Adventure/Research', value: 16.6, color: 'bg-purple-400' }
                          ].map((item) => (
                            <div key={item.label} className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-400">{item.label}</span>
                                <span className="text-white font-bold">{item.value}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.title === 'Smart-City Intelligence' && (
                    <div className="mb-12">
                      <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs opacity-50">Platform Capabilities</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { title: 'Real-Time Hotspots', desc: 'AI detects sanitation issues as they emerge across the city', color: 'text-blue-400' },
                          { title: 'Predictive Routing', desc: 'Optimize cleanup teams with AI-powered route prediction', color: 'text-orange-400' },
                          { title: 'Live Command Center', desc: 'Real-time monitoring dashboard for municipal coordinators', color: 'text-pink-400' },
                          { title: 'Zero-Landfill 2027', desc: 'Track progress toward waste diversion & sustainability goals', color: 'text-green-400' }
                        ].map((feature) => (
                          <div key={feature.title} className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className={`text-lg font-black ${feature.color} mb-2 leading-tight`}>{feature.title}</div>
                            <div className="text-sm text-gray-500 leading-relaxed font-medium">{feature.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.galleryImages && (
                    <div className="mb-12">
                      <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs opacity-50">Report Screenshots</h4>
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        {selectedProject.galleryImages.map((img, i) => (
                          <div 
                            key={i} 
                            className="flex-shrink-0 w-48 aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors cursor-zoom-in"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(img, '_blank');
                            }}
                          >
                            <img src={getDriveDirectLink(img)} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto flex flex-wrap gap-4">
                    {selectedProject.demoUrl && (
                      <a 
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-8 py-4 rounded-full font-black hover:bg-gray-200 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 shadow-xl"
                      >
                        <ExternalLink size={20} />
                        View Live
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/10 text-white px-8 py-4 rounded-full font-black hover:bg-white/5 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                      >
                        <Github size={20} />
                        Repo
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
