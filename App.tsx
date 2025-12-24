import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import Background3D from './components/Background3D';
import SectionWrapper from './components/SectionWrapper';
import SkillsChart from './components/SkillsChart';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import { HERO_CONTENT, EDUCATION, EXPERIENCE, PROJECTS, CERTIFICATES, NAV_LINKS, SKILLS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-bg-dark text-white min-h-screen font-sans selection:bg-neon-cyan/30 selection:text-neon-cyan">
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan origin-left z-50 shadow-[0_0_10px_#00f3ff]"
        style={{ scaleX }}
      />

      {/* 3D Background */}
      <Background3D />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-display text-2xl font-bold tracking-widest text-white hover:text-neon-cyan transition-colors">
            NEON<span className="text-neon-purple">GEN</span>
          </a>

          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm uppercase tracking-widest hover:text-neon-cyan transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden bg-bg-card border-b border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg hover:text-neon-cyan"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4 pt-20">
        <div className="text-center z-20 max-w-4xl">
           <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, type: 'spring' }}
           >
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan text-sm tracking-widest uppercase backdrop-blur-sm">
              Available for Hire
            </div>
           </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight mix-blend-difference"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              {HERO_CONTENT.title.split(' ').slice(0, 1)}
            </span>
            <span className="block text-neon-cyan drop-shadow-[0_0_20px_rgba(0,243,255,0.6)]">
               {HERO_CONTENT.title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto font-light"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => handleNavClick('#projects')}
              className="px-8 py-3 bg-neon-cyan text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded shadow-[0_0_20px_rgba(0,243,255,0.4)]"
            >
              View Work
            </button>
            <button className="px-8 py-3 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 rounded flex items-center justify-center gap-2">
              <Download size={18} /> Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 flex justify-center gap-6"
          >
             <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Github size={32} /></a>
             <a href="#" className="text-gray-400 hover:text-neon-cyan hover:scale-110 transition-all"><Linkedin size={32} /></a>
             <a href="#" className="text-gray-400 hover:text-neon-purple hover:scale-110 transition-all"><Mail size={32} /></a>
          </motion.div>
        </div>
      </section>

      {/* Education Section - Split Layout */}
      <SectionWrapper id="education" title="Education" neonColor="purple" alternate={false}>
        <div className="space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative pl-6 border-l-2 border-white/20 hover:border-neon-purple transition-colors duration-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-dark border-2 border-neon-purple"></div>
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-neon-purple font-display text-sm mt-1">{edu.institution}</p>
              <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Experience Section - Split Layout */}
      <SectionWrapper id="experience" title="Experience" neonColor="cyan" alternate={true}>
        <div className="space-y-10">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.role}</h3>
                <span className="text-sm font-mono text-gray-500">{exp.period}</span>
              </div>
              <p className="text-neon-cyan/80 text-lg mb-4">{exp.company}</p>
              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-xs border border-neon-cyan/30 rounded-full text-neon-cyan/80 bg-neon-cyan/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Projects Section - Full Width Grid */}
      <SectionWrapper id="projects" title="Projects" neonColor="green" fullWidth={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {PROJECTS.map((project) => (
             <div key={project.id} className="h-[450px]">
               <ProjectCard project={project} color="#0aff64" />
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* Skills Section - Full Width Split */}
      <SectionWrapper id="skills" title="Technical Arsenal" neonColor="pink" fullWidth={true}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="order-2 lg:order-1">
             <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
                <p className="text-gray-400 leading-relaxed">
                  Deep expertise in Generative AI architectures, from training Large Language Models to deploying scalable diffusion pipelines. Proficient in optimizing inference for edge devices and cloud infrastructure.
                </p>
             </div>
             <div>
                {SKILLS.map((skill, index) => (
                   <SkillBar key={index} name={skill.name} level={skill.level} delay={index * 0.1} />
                ))}
             </div>
           </div>
           
           <div className="order-1 lg:order-2 flex justify-center items-center bg-black/30 rounded-full p-4 aspect-square">
             <SkillsChart />
           </div>
        </div>
      </SectionWrapper>

      {/* Certificates Section - Split Layout */}
      <SectionWrapper id="certificates" title="Certifications" neonColor="purple" alternate={false}>
        <div className="grid gap-6">
          {CERTIFICATES.map((cert) => (
            <div key={cert.id} className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-transparent rounded-lg hover:from-white/10 transition-all border-l-4 border-neon-purple group">
               <div className="p-3 bg-neon-purple/20 rounded-full text-neon-purple group-hover:bg-neon-purple group-hover:text-black transition-colors">
                  <Download size={20} />
               </div>
               <div>
                  <h4 className="font-bold text-white text-lg">{cert.name}</h4>
                  <div className="flex gap-2 text-sm text-gray-400">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} NeonGen Portfolio. Built with React, Three.js & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;