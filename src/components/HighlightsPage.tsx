import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Award, Presentation, Mic2, MessageSquare } from 'lucide-react';
import { getDriveDirectLink, getDriveEmbedLink } from '../utils';

interface HighlightsPageProps {
  onBack: () => void;
  initialSection?: 'all' | 'communication' | 'certification';
}

export default function HighlightsPage({ onBack, initialSection = 'all' }: HighlightsPageProps) {
  const communicationRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialSection === 'communication') {
      communicationRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (initialSection === 'certification') {
      certificationRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [initialSection]);

  const RenderCertCard = ({ cert, index }: { cert: any, index: number, key?: any }) => {
    const isGoogleDriveVideo = cert.videoUrl?.includes('drive.google.com');
    const driveVideoEmbedUrl = getDriveEmbedLink(cert.videoUrl);
    const driveImageDirectUrl = getDriveDirectLink(cert.image);

    return (
      <motion.div 
        whileHover={{ y: -12, scale: 1.02 }}
        className="group relative bg-[#0D0D0D] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)] transition-all duration-500"
      >
        <div className="aspect-[4/3] relative overflow-hidden bg-gray-900">
          <img 
            src={driveImageDirectUrl} 
            alt={cert.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />
          
          {/* Inner Glow on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
          
          {cert.videoUrl && (
            <div className="absolute top-6 right-6 bg-purple-600 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-2xl z-20 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Watch Video
            </div>
          )}
          
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-400 mb-2 drop-shadow-sm">{cert.org}</div>
            <div className="text-2xl font-black text-white leading-tight drop-shadow-xl tracking-tight group-hover:text-purple-200 transition-colors">{cert.title}</div>
          </div>
        </div>
        <div className="p-10">
          <p className="text-base text-gray-400 leading-relaxed font-medium mb-8 group-hover:text-gray-300 transition-colors duration-500">
            {cert.desc}
          </p>
          {cert.videoUrl && (
            <div className="mt-4 rounded-3xl overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl group-hover:border-purple-500/30 transition-colors">
              {isGoogleDriveVideo ? (
                <iframe 
                  src={driveVideoEmbedUrl || ''} 
                  className="w-full h-full border-0" 
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={cert.title}
                />
              ) : (
                <video 
                  controls 
                  className="w-full h-full"
                  poster={driveImageDirectUrl}
                >
                  <source src={cert.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const communicationItems = [
    {
      title: "AI-Powered Refrigerators",
      org: "Alagappa College / SRM Madurai",
      image: "https://drive.google.com/thumbnail?id=1rEp9FPI_LE-pbsSBhBMQeNLl9nq3YcUL&sz=w800",
      videoUrl: "https://drive.google.com/file/d/1UuBekoz8CH2wyuC8RJwndTscD8uGCT4a/view?usp=sharing",
      desc: "Research presentation on smart community refrigerators for sustainable food management and waste reduction."
    },
    {
      title: "GPU Advantage Seminar",
      org: "Technical Seminar",
      image: "https://drive.google.com/thumbnail?id=1lgjcd71Z8p0ya_zi6PEL0CZVG1xxF7kn&sz=w800",
      videoUrl: "https://drive.google.com/file/d/1wgajGRGPRhnri4Wu_GHsdldcmC3oeQl2/view?usp=sharing",
      desc: "Seminar presentation discussing the advantages of GPU computing in Artificial Intelligence and Data Science."
    },
    {
      title: "Speech on Environment",
      org: "RRR Cell",
      image: "https://drive.google.com/thumbnail?id=134m3P08GUtMpk0P-sxmyjNl7N-Z_FrUz&sz=w800",
      videoUrl: "https://drive.google.com/file/d/134m3P08GUtMpk0P-sxmyjNl7N-Z_FrUz/view?usp=sharing",
      desc: "A compelling speech on environmental sustainability and the RRR (Reduce, Reuse, Recycle) initiative, focusing on student impact."
    }
  ];

  const certificationItems = [
    {
      title: "TENSOR'26 AI Hackathon",
      org: "SRM Trichy",
      image: "https://drive.google.com/thumbnail?id=16E6nzle_luYdwrOviIgWCJU5RhzVlq4F&sz=w800",
      desc: "24-Hour National Level AI Hackathon participation representing PH VISIONARIES."
    },
    {
      title: "PromptWar Hackathon",
      org: "GDG Madurai",
      image: "https://drive.google.com/thumbnail?id=10yheQ8SzCUrZbfS4GH7ItmelnHAw5Jlr&sz=w800",
      desc: "36-Hour Hackathon contributing to AI-driven solution development for Clean Madurai."
    },
    {
      title: "LUMINOVA 2025 (Maverick)",
      org: "SRM Madurai",
      image: "https://drive.google.com/thumbnail?id=1P8YiUOdqJSccfUOnd7vSVfxDZL3j7cFS&sz=w800",
      desc: "Paper presentation on 'AI-Powered Food Refrigerator' organized by AIML & MAKAL."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <h1 className="text-5xl md:text-8xl font-black text-white mb-16 tracking-tighter">
        Career <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">Highlights</span>
      </h1>

      {/* Communication Section */}
      <div ref={communicationRef} className="mb-40 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-[2rem] bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              <MessageSquare className="text-blue-400" size={32} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">Communication</h2>
              <p className="text-blue-400/50 text-base font-bold uppercase tracking-widest">Public Speaking & Research</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {communicationItems.map((cert, i) => (
            <RenderCertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>

      {/* Certification Section */}
      <div ref={certificationRef} className="mb-40 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-[2rem] bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
              <Award className="text-purple-400" size={32} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">Certifications</h2>
              <p className="text-purple-400/50 text-base font-bold uppercase tracking-widest">Hackathons & Honors</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificationItems.map((cert, i) => (
            <RenderCertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>

      <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Recognized for Excellence</h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          As a 1st year B.Tech student, my focus remains on building a strong foundation in AI/DS while actively contributing to the community through presentations and builds.
        </p>
      </div>
    </motion.div>
  );
}
