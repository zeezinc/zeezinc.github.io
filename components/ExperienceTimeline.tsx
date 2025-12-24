import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Experience, Theme } from '../types';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceTimelineProps {
  experience: Experience[];
  theme: Theme;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience, theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use MotionValue to track mouse Y position relative to container
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  // Smooth out the height change
  const smoothHeight = useSpring(mouseY, {
    stiffness: 200,
    damping: 30
  });

  const smoothOpacity = useSpring(opacity, {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    
    // Clamp value to stay within container
    const clampedY = Math.max(0, Math.min(y, rect.height));
    
    mouseY.set(clampedY);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative py-4 px-4 md:px-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Central Continuous Line Background (Empty Track) */}
      <div className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 overflow-hidden rounded-full
        ${theme === 'neon' ? 'bg-white/5' : 'bg-gray-200'}
      `}></div>

      {/* Filling Beam (Mouse Linked) */}
      <motion.div 
        style={{ height: smoothHeight, opacity: smoothOpacity }}
        className={`absolute left-6 md:left-1/2 top-0 w-1 transform md:-translate-x-1/2 rounded-full z-0 origin-top pointer-events-none
          ${theme === 'neon' 
            ? 'bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.6)]' 
            : 'bg-gradient-to-b from-mech-sky via-mech-indigo to-mech-sky'
          }
        `}
      />

      <div className="space-y-12 relative z-10 pointer-events-none">
        {experience.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center w-full group pointer-events-auto`}
            >
              {/* Timeline Dot on the continuous line */}
              <div className={`absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full z-10 transition-all duration-300
                ${theme === 'neon' 
                  ? 'bg-black border-2 border-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)] group-hover:bg-neon-cyan' 
                  : 'bg-white border-2 border-mech-sky shadow-sm group-hover:bg-mech-sky'
                }
              `}></div>
              
              {/* Spacer for Desktop Layout */}
              <div className="hidden md:block w-1/2" />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-8`}>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`p-6 rounded-xl border relative transition-all duration-300
                    ${theme === 'neon' 
                      ? 'bg-white/5 border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.1)]' 
                      : 'bg-white border-gray-200 shadow-sm hover:shadow-lg hover:border-mech-sky/50'
                    }
                  `}
                >
                  {/* Connector Line to Dot (Horizontal) */}
                  <div className={`absolute top-8 h-[2px] w-8 md:w-12 ${isEven ? 'right-full' : 'left-[-32px] md:left-full'} md:hidden
                    ${theme === 'neon' ? 'bg-gradient-to-r from-neon-cyan/50 to-transparent' : 'bg-gray-300'}
                  `}></div>
                  
                  {/* Desktop Horizontal Connector */}
                   <div className={`hidden md:block absolute top-1/2 h-[2px] w-12 ${isEven ? '-right-12' : '-left-12'} 
                    ${theme === 'neon' ? 'bg-white/20' : 'bg-gray-300'}
                  `}></div>


                  <div className="flex flex-col mb-2">
                     <span className={`inline-flex items-center gap-2 text-xs font-mono mb-2 uppercase tracking-widest ${theme === 'neon' ? 'text-neon-cyan' : 'text-mech-sky'}`}>
                        <Calendar size={12} /> {exp.period}
                     </span>
                     <h3 className={`text-xl font-bold ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`}>
                        {exp.role}
                     </h3>
                     <div className={`flex items-center gap-2 text-md font-semibold mt-1 ${theme === 'neon' ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Briefcase size={14} /> {exp.company}
                     </div>
                  </div>

                  <p className={`mb-4 text-sm leading-relaxed ${theme === 'neon' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={`text-[10px] uppercase font-bold px-2 py-1 rounded border
                        ${theme === 'neon' 
                          ? 'border-neon-cyan/30 text-neon-cyan/70 bg-neon-cyan/5' 
                          : 'border-mech-sky/30 text-mech-sky bg-mech-sky/5'
                        }
                      `}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;