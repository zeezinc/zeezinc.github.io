import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Download, Moon, Sun, Cpu, Brain } from 'lucide-react';
import Background3D from './components/Background3D';
import SectionWrapper from './components/SectionWrapper';
import SkillsChart from './components/SkillsChart';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import { AI_PROFILE, SWE_PROFILE, NAV_LINKS } from './constants';
import { Theme } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('neon');
  
  const activeProfile = theme === 'neon' ? AI_PROFILE : SWE_PROFILE;
  
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

  const toggleTheme = () => {
    setTheme(prev => prev === 'neon' ? 'mech' : 'neon');
  };

  // Helper styles based on theme
  const bgClass = theme === 'neon' ? 'bg-bg-dark text-white' : 'bg-mech-slate text-mech-text';
  const navBg = theme === 'neon' ? 'bg-bg-dark/80 border-white/5' : 'bg-white/80 border-gray-200';
  const highlightText = theme === 'neon' ? 'text-neon-cyan' : 'text-mech-sky';
  const accentText = theme === 'neon' ? 'text-neon-purple' : 'text-mech-indigo';
  const buttonPrimary = theme === 'neon' 
    ? 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:bg-white' 
    : 'bg-mech-sky text-white shadow-lg hover:bg-mech-indigo';
  const buttonSecondary = theme === 'neon'
    ? 'border-white text-white hover:bg-white hover:text-black'
    : 'border-mech-text text-mech-text hover:bg-mech-text hover:text-white';
  const iconHover = theme === 'neon' ? 'hover:text-neon-cyan' : 'hover:text-mech-sky';
  const selectionClass = theme === 'neon' ? 'selection:bg-neon-cyan/30 selection:text-neon-cyan' : 'selection:bg-mech-sky/30 selection:text-mech-sky';

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-500 ${bgClass} ${selectionClass}`}>
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 origin-left z-50 ${theme === 'neon' ? 'bg-neon-cyan shadow-[0_0_10px_#00f3ff]' : 'bg-mech-sky'}`}
        style={{ scaleX }}
      />

      {/* 3D Background */}
      <Background3D theme={theme} />

      {/* Theme Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={toggleTheme}
          className={`p-4 rounded-full shadow-xl transition-all duration-500 transform hover:scale-110 flex items-center justify-center
            ${theme === 'neon' ? 'bg-white/10 text-neon-cyan border border-neon-cyan/50' : 'bg-white text-mech-amber border border-mech-amber'}
          `}
          title={`Switch to ${theme === 'neon' ? 'Software Engineer' : 'AI Engineer'} Profile`}
        >
          {theme === 'neon' ? <Brain size={24} /> : <Cpu size={24} />}
          <span className="ml-2 font-bold hidden md:inline">{theme === 'neon' ? 'AI MODE' : 'DEV MODE'}</span>
        </button>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-colors duration-500 ${navBg}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className={`font-display text-2xl font-bold tracking-widest transition-colors ${theme === 'neon' ? 'text-white hover:text-neon-cyan' : 'text-mech-text hover:text-mech-sky'}`}>
            {theme === 'neon' ? 'NEON' : 'DEV'}<span className={accentText}>{theme === 'neon' ? 'GEN' : 'OPS'}</span>
          </a>

          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${theme === 'neon' ? 'hover:text-neon-cyan' : 'hover:text-mech-sky'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${theme === 'neon' ? 'bg-neon-cyan' : 'bg-mech-sky'}`}></span>
              </button>
            ))}
          </div>

          <button className={`md:hidden ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className={`md:hidden border-b ${theme === 'neon' ? 'bg-bg-card border-white/10' : 'bg-white border-gray-200'}`}
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left text-lg ${theme === 'neon' ? 'hover:text-neon-cyan' : 'hover:text-mech-sky'}`}
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
             key={theme} // Re-animate on theme switch
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, type: 'spring' }}
           >
            <div className={`inline-block mb-4 px-4 py-1 rounded-full border text-sm tracking-widest uppercase backdrop-blur-sm
              ${theme === 'neon' ? 'border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan' : 'border-mech-sky/50 bg-mech-sky/10 text-mech-sky'}
            `}>
              Available for Hire
            </div>
           </motion.div>
          
          <motion.h1 
            key={`${theme}-title`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${theme === 'neon' ? 'mix-blend-difference' : ''}`}
          >
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${theme === 'neon' ? 'from-white via-gray-200 to-gray-400' : 'from-mech-text via-slate-600 to-slate-400'}`}>
              {activeProfile.hero.title.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className={`block ${theme === 'neon' ? 'text-neon-cyan drop-shadow-[0_0_20px_rgba(0,243,255,0.6)]' : 'text-mech-sky'}`}>
               {activeProfile.hero.title.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>

          <motion.p
            key={`${theme}-desc`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light ${theme === 'neon' ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {activeProfile.hero.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => handleNavClick('#projects')}
              className={`px-8 py-3 font-bold uppercase tracking-widest transition-colors duration-300 rounded ${buttonPrimary}`}
            >
              View Work
            </button>
            <button className={`px-8 py-3 border font-bold uppercase tracking-widest transition-colors duration-300 rounded flex items-center justify-center gap-2 ${buttonSecondary}`}>
              <Download size={18} /> Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 flex justify-center gap-6"
          >
             <a href="#" className={`${theme === 'neon' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-mech-text'} transition-all hover:scale-110`}><Github size={32} /></a>
             <a href="#" className={`${theme === 'neon' ? 'text-gray-400' : 'text-gray-500'} ${iconHover} transition-all hover:scale-110`}><Linkedin size={32} /></a>
             <a href="#" className={`${theme === 'neon' ? 'text-gray-400 hover:text-neon-purple' : 'text-gray-500 hover:text-mech-indigo'} transition-all hover:scale-110`}><Mail size={32} /></a>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <SectionWrapper id="education" title="Education" colorKey="purple" alternate={false} theme={theme}>
        <div className="space-y-8">
          {activeProfile.education.map((edu) => (
            <div key={edu.id} className={`relative pl-6 border-l-2 transition-colors duration-300 ${theme === 'neon' ? 'border-white/20 hover:border-neon-purple' : 'border-gray-300 hover:border-mech-indigo'}`}>
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${theme === 'neon' ? 'bg-bg-dark border-neon-purple' : 'bg-white border-mech-indigo'}`}></div>
              <h3 className={`text-xl font-bold ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`}>{edu.degree}</h3>
              <p className={`${theme === 'neon' ? 'text-neon-purple' : 'text-mech-indigo'} font-display text-sm mt-1`}>{edu.institution}</p>
              <p className={`${theme === 'neon' ? 'text-gray-500' : 'text-gray-400'} text-sm mb-2`}>{edu.year}</p>
              <p className={`${theme === 'neon' ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>{edu.details}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper id="experience" title="Experience" colorKey="cyan" alternate={true} theme={theme}>
        <div className="space-y-10">
          {activeProfile.experience.map((exp) => (
            <div key={exp.id} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className={`text-2xl font-bold transition-colors ${theme === 'neon' ? 'text-white group-hover:text-neon-cyan' : 'text-mech-text group-hover:text-mech-sky'}`}>{exp.role}</h3>
                <span className="text-sm font-mono text-gray-500">{exp.period}</span>
              </div>
              <p className={`${theme === 'neon' ? 'text-neon-cyan/80' : 'text-mech-sky'} text-lg mb-4`}>{exp.company}</p>
              <p className={`${theme === 'neon' ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className={`px-3 py-1 text-xs border rounded-full ${
                    theme === 'neon' 
                    ? 'border-neon-cyan/30 text-neon-cyan/80 bg-neon-cyan/5'
                    : 'border-mech-sky/30 text-mech-sky bg-mech-sky/5'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects" title="Projects" colorKey="green" fullWidth={true} theme={theme}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {activeProfile.projects.map((project) => (
             <div key={project.id} className="h-[450px]">
               <ProjectCard project={project} color={theme === 'neon' ? '#0aff64' : '#10b981'} theme={theme} />
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills" title="Technical Arsenal" colorKey="pink" fullWidth={true} theme={theme}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="order-2 lg:order-1">
             <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`}>Core Competencies</h3>
                <p className={`${theme === 'neon' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  {theme === 'neon' 
                    ? "Deep expertise in Generative AI architectures, from training Large Language Models to deploying scalable diffusion pipelines."
                    : "Extensive experience in building distributed systems, scalable web architectures, and cloud-native applications."
                  }
                </p>
             </div>
             <div>
                {activeProfile.skills.map((skill, index) => (
                   <SkillBar key={index} name={skill.name} level={skill.level} delay={index * 0.1} theme={theme} />
                ))}
             </div>
           </div>
           
           <div className={`order-1 lg:order-2 flex justify-center items-center rounded-full p-4 aspect-square ${theme === 'neon' ? 'bg-black/30' : 'bg-white/50 border border-gray-100 shadow-inner'}`}>
             <SkillsChart skills={activeProfile.skills} theme={theme} />
           </div>
        </div>
      </SectionWrapper>

      {/* Certificates Section */}
      <SectionWrapper id="certificates" title="Certifications" colorKey="purple" alternate={false} theme={theme}>
        <div className="grid gap-6">
          {activeProfile.certificates.map((cert) => (
            <div key={cert.id} className={`flex items-center gap-4 p-4 rounded-lg transition-all border-l-4 group
              ${theme === 'neon' 
                ? 'bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 border-neon-purple'
                : 'bg-white shadow hover:shadow-md border-mech-indigo'
              }
            `}>
               <div className={`p-3 rounded-full transition-colors ${
                 theme === 'neon'
                 ? 'bg-neon-purple/20 text-neon-purple group-hover:bg-neon-purple group-hover:text-black'
                 : 'bg-mech-indigo/10 text-mech-indigo group-hover:bg-mech-indigo group-hover:text-white'
               }`}>
                  <Download size={20} />
               </div>
               <div>
                  <h4 className={`font-bold text-lg ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`}>{cert.name}</h4>
                  <div className={`flex gap-2 text-sm ${theme === 'neon' ? 'text-gray-400' : 'text-gray-500'}`}>
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
      <footer className={`py-12 text-center text-sm relative z-10 backdrop-blur-sm border-t ${
        theme === 'neon' 
        ? 'text-gray-500 bg-black/50 border-white/5' 
        : 'text-gray-600 bg-white/50 border-gray-200'
      }`}>
        <p>&copy; {new Date().getFullYear()} {theme === 'neon' ? 'NeonGen' : 'DevOps'} Portfolio. Built with React, Three.js & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;