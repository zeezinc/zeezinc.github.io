import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Download, Cpu, Brain, Award, CheckCircle, Heart, ToggleLeft, ToggleRight, GraduationCap, Sparkles } from 'lucide-react';
import Background3D from './components/Background3D';
import SectionWrapper from './components/SectionWrapper';
import SkillsChart from './components/SkillsChart';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillCategory from './components/SkillCategory';
import { AI_PROFILE, SWE_PROFILE, NAV_LINKS } from './constants';
import { Theme } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('neon');
  const [activeSection, setActiveSection] = useState('hero');
  
  const activeProfile = theme === 'neon' ? AI_PROFILE : SWE_PROFILE;
  
  // Group skills by category for the accordion view
  const skillsByCategory = activeProfile.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof activeProfile.skills>);

  // Filter top 6 skills for the Radar Chart to keep it clean and readable
  const chartSkills = [...activeProfile.skills].sort((a, b) => b.level - a.level).slice(0, 6);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar height + buffer

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Images
  const aboutImage = theme === 'neon'
    ? 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop'
    : 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop';

  const educationImage = theme === 'neon' 
    ? 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop'
    : 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop';

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-500 ${bgClass} ${selectionClass}`}>
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 origin-left z-50 ${theme === 'neon' ? 'bg-neon-cyan shadow-[0_0_10px_#00f3ff]' : 'bg-mech-sky'}`}
        style={{ scaleX }}
      />

      {/* 3D Background */}
      <Background3D theme={theme} />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-colors duration-500 ${navBg}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#" className={`font-display text-2xl font-bold tracking-widest transition-colors ${theme === 'neon' ? 'text-white hover:text-neon-cyan' : 'text-mech-text hover:text-mech-sky'}`}>
              ZEESHAN<span className={accentText}>SHAIKH</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Theme Toggle Button - Desktop - Made Bigger */}
            <button 
                onClick={toggleTheme}
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-5 py-2 rounded-full border-2 transition-all hover:scale-105 active:scale-95 ${
                  theme === 'neon' 
                    ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 shadow-[0_0_15px_rgba(0,243,255,0.3)]' 
                    : 'border-mech-sky text-mech-sky hover:bg-mech-sky/10 shadow-md'
                }`}
                title="Switch Theme"
              >
                {theme === 'neon' ? <Brain size={18} /> : <Cpu size={18} />}
                <span>{theme === 'neon' ? 'AI' : 'DEV'}</span>
            </button>

            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm uppercase tracking-widest transition-all duration-300 relative group 
                    ${isActive 
                      ? (theme === 'neon' ? 'text-neon-cyan drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]' : 'text-mech-sky font-bold') 
                      : (theme === 'neon' ? 'text-gray-400 hover:text-neon-cyan' : 'text-gray-500 hover:text-mech-sky')
                    }
                  `}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 transition-all duration-300 
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} 
                    ${theme === 'neon' ? 'bg-neon-cyan shadow-[0_0_8px_#00f3ff]' : 'bg-mech-sky'}
                  `}></span>
                </button>
              );
            })}
          </div>

          <div className="flex md:hidden items-center gap-4">
             {/* Theme Toggle Button - Mobile (Compact) */}
             <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full border ${theme === 'neon' ? 'border-neon-cyan text-neon-cyan' : 'border-mech-sky text-mech-sky'}`}
              >
                {theme === 'neon' ? <Brain size={20} /> : <Cpu size={20} />}
             </button>

            <button className={`md:hidden ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className={`md:hidden border-b ${theme === 'neon' ? 'bg-bg-card border-white/10' : 'bg-white border-gray-200'}`}
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => {
                 const isActive = activeSection === link.href.substring(1);
                 return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left text-lg flex items-center gap-2
                      ${isActive 
                        ? (theme === 'neon' ? 'text-neon-cyan font-bold' : 'text-mech-sky font-bold') 
                        : (theme === 'neon' ? 'text-gray-400' : 'text-gray-600')
                      }
                    `}
                  >
                    {isActive && <span className={`w-2 h-2 rounded-full ${theme === 'neon' ? 'bg-neon-cyan' : 'bg-mech-sky'}`}></span>}
                    {link.name}
                  </button>
                );
              })}
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

      {/* About Section */}
      <SectionWrapper
        id="about"
        title="Behind the Code"
        colorKey="pink"
        theme={theme}
        alternate={true}
        visualImage={aboutImage}
      >
        <div className="space-y-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-lg leading-relaxed font-light ${theme === 'neon' ? 'text-gray-300' : 'text-gray-600'}`}
            >
               <p>{activeProfile.about.text}</p>
            </motion.div>

            <div>
                <motion.h4 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2 ${theme === 'neon' ? 'text-neon-pink' : 'text-mech-amber'}`}
                >
                   <Sparkles size={14} /> Interests & Hobbies
                </motion.h4>
                <div className="flex flex-wrap gap-3">
                    {activeProfile.about.hobbies.map((hobby, i) => (
                        <motion.span 
                            key={i} 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + (i * 0.1), type: "spring", stiffness: 200 }}
                            whileHover={{ y: -5, rotate: i % 2 === 0 ? 3 : -3, scale: 1.1 }}
                            className={`px-4 py-2 rounded-full text-sm font-medium border cursor-default flex items-center gap-2 transition-colors duration-300
                                ${theme === 'neon' 
                                    ? 'bg-white/5 border-white/10 text-white hover:border-neon-pink hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,0,85,0.3)]' 
                                    : 'bg-white border-gray-200 text-mech-text hover:border-mech-amber hover:bg-mech-amber/10 hover:shadow-md'
                                }
                            `}
                        >
                            {hobby}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
      </SectionWrapper>

      {/* Education Section - Split Layout with Image */}
      <SectionWrapper 
        id="education" 
        title="Education" 
        colorKey="purple" 
        alternate={false} 
        theme={theme}
        visualImage={educationImage}
      >
         <div className="relative pl-12 space-y-8">
            {/* Timeline Vertical Line */}
             <div className={`absolute left-4 top-2 bottom-2 w-0.5 rounded-full ${theme === 'neon' ? 'bg-white/10' : 'bg-gray-200'}`}>
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${theme === 'neon' ? 'from-neon-purple via-neon-purple/50 to-transparent' : 'from-mech-indigo via-mech-indigo/50 to-transparent'}`}></div>
             </div>

            {activeProfile.education.map((edu, index) => (
              <div key={edu.id} className="relative group/timeline">
                {/* Timeline Dot */}
                <div className={`absolute -left-[39px] top-6 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300
                    ${theme === 'neon' 
                        ? 'bg-bg-dark border-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.5)] group-hover/timeline:scale-125 group-hover/timeline:bg-neon-purple' 
                        : 'bg-white border-mech-indigo group-hover/timeline:scale-125 group-hover/timeline:bg-mech-indigo'
                    }
                `}></div>
                
                {/* Horizontal Connector */}
                 <div className={`absolute -left-[32px] top-[31px] w-8 h-[2px] 
                     ${theme === 'neon' ? 'bg-neon-purple/30' : 'bg-mech-indigo/30'}
                 `}></div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`relative p-6 rounded-xl border transition-all duration-300 group
                    ${theme === 'neon' 
                      ? 'bg-white/5 border-white/10 hover:border-neon-purple hover:bg-white/10 hover:shadow-[0_0_15px_rgba(188,19,254,0.2)]' 
                      : 'bg-white border-gray-200 hover:border-mech-indigo hover:shadow-lg'
                    }
                  `}
                >
                  {/* Decorative corner accents for Neon */}
                  {theme === 'neon' && (
                    <>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 group-hover:border-neon-purple transition-colors"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 group-hover:border-neon-purple transition-colors"></div>
                    </>
                  )}
                  
                  {/* ID Display Removed here */}

                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-2">
                      <div>
                           <h3 className={`text-xl font-bold ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`}>
                              {edu.degree}
                           </h3>
                           <div className={`flex items-center gap-2 text-sm font-medium mt-1 ${theme === 'neon' ? 'text-neon-purple' : 'text-mech-indigo'}`}>
                              <GraduationCap size={16} />
                              {edu.institution}
                           </div>
                      </div>
                      <span className={`text-xs font-mono py-1 px-2 rounded border whitespace-nowrap
                          ${theme === 'neon' 
                             ? 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple' 
                             : 'bg-mech-indigo/10 border-mech-indigo/20 text-mech-indigo'
                          }
                      `}>
                          {edu.year}
                      </span>
                  </div>

                  <p className={`text-sm leading-relaxed ${theme === 'neon' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.details}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
      </SectionWrapper>

      {/* Experience Section - REPLACED WITH CHRONOLOGICAL TIMELINE */}
      <SectionWrapper id="experience" title="Experience" colorKey="cyan" fullWidth={true} theme={theme}>
         <ExperienceTimeline experience={activeProfile.experience} theme={theme} />
      </SectionWrapper>

      {/* Projects Section - UPDATED TO HORIZONTAL SCROLL */}
      <SectionWrapper id="projects" title="Projects" colorKey="green" fullWidth={true} theme={theme}>
        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory px-4" style={{ scrollbarWidth: 'thin' }}>
           {activeProfile.projects.map((project) => (
             <div key={project.id} className="w-[85vw] md:w-[450px] lg:w-[400px] h-[450px] snap-center flex-shrink-0">
               <ProjectCard project={project} color={theme === 'neon' ? '#0aff64' : '#10b981'} theme={theme} />
             </div>
           ))}
        </div>
      </SectionWrapper>

      {/* Skills Section - UPDATED WITH EXPANDABLE CATEGORIES */}
      <SectionWrapper id="skills" title="Technical Arsenal" colorKey="pink" fullWidth={true} theme={theme}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                {Object.entries(skillsByCategory).map(([category, skills], index) => (
                   <SkillCategory 
                      key={category} 
                      category={category} 
                      skills={skills} 
                      theme={theme} 
                      defaultOpen={index === 0} 
                   />
                ))}
             </div>
           </div>
           
           <div className={`order-1 lg:order-2 flex justify-center items-center rounded-full p-4 aspect-square sticky top-24 ${theme === 'neon' ? 'bg-black/30' : 'bg-white/50 border border-gray-100 shadow-inner'}`}>
             <SkillsChart skills={chartSkills} theme={theme} />
           </div>
        </div>
      </SectionWrapper>

      {/* Certificates Section - UPDATED BADGE VISIBILITY */}
      <SectionWrapper id="certificates" title="Certifications" colorKey="purple" fullWidth={true} theme={theme}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeProfile.certificates.map((cert) => (
            <motion.div 
              key={cert.id}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative overflow-hidden p-8 rounded-xl border transition-all duration-300 group
                ${theme === 'neon' 
                  ? 'bg-white/5 backdrop-blur-md border-neon-purple/30 hover:shadow-[0_0_25px_rgba(188,19,254,0.3)] hover:border-neon-purple/80'
                  : 'bg-white border-mech-indigo/20 shadow-md hover:shadow-xl hover:border-mech-indigo/50'
                }
              `}
            >
               {/* Decorative Background Element - INCREASED VISIBILITY */}
               <div className={`absolute -top-6 -right-6 p-6 transition-all duration-500 transform rotate-12 group-hover:rotate-0 group-hover:scale-110
                  ${theme === 'neon' ? 'text-neon-purple opacity-20 group-hover:opacity-40' : 'text-mech-indigo opacity-10 group-hover:opacity-25'}
               `}>
                  <Award size={140} strokeWidth={1} />
               </div>

               <div className="relative z-10 flex flex-col h-full">
                 <div className="mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2 ${
                        theme === 'neon' ? 'bg-neon-purple/20 text-neon-purple' : 'bg-mech-indigo/10 text-mech-indigo'
                    }`}>
                        <CheckCircle size={12} /> Verified
                    </div>
                 </div>
                 
                 <h4 className={`text-xl font-bold mb-2 leading-tight ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`}>{cert.name}</h4>
                 <p className={`text-sm font-medium mb-1 ${theme === 'neon' ? 'text-gray-300' : 'text-mech-indigo'}`}>{cert.issuer}</p>
                 <p className={`text-xs ${theme === 'neon' ? 'text-gray-500' : 'text-gray-400'}`}>Issued: {cert.date}</p>
                 
                 <div className={`mt-6 w-full h-1 rounded-full ${theme === 'neon' ? 'bg-white/10' : 'bg-gray-100'}`}>
                    <div className={`h-full w-2/3 rounded-full ${theme === 'neon' ? 'bg-neon-purple shadow-[0_0_10px_#bc13fe]' : 'bg-mech-indigo'}`}></div>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className={`py-12 text-center text-sm relative z-10 backdrop-blur-sm border-t ${
        theme === 'neon' 
        ? 'text-gray-500 bg-black/50 border-white/5' 
        : 'text-gray-600 bg-white/50 border-gray-200'
      }`}>
        <p className="flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} {theme === 'neon' ? 'Gen AI Engineer Portfolio' : 'Software Development Portfolio'}. 
            Made with
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> 
            by Zeeshan Shaikh.
        </p>
      </footer>
    </div>
  );
};

export default App;