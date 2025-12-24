import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionProps, Theme } from '../types';

const SectionWrapper: React.FC<SectionProps> = ({ id, title, children, alternate = false, colorKey, fullWidth = false, theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getThemeClasses = () => {
    if (theme === 'neon') {
      switch(colorKey) {
        case 'cyan': return { border: 'border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.2)]', text: 'text-neon-cyan drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]', bar: 'bg-neon-cyan', visual: 'bg-neon-cyan' };
        case 'purple': return { border: 'border-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.2)]', text: 'text-neon-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.8)]', bar: 'bg-neon-purple', visual: 'bg-neon-purple' };
        case 'green': return { border: 'border-neon-green shadow-[0_0_15px_rgba(10,255,100,0.2)]', text: 'text-neon-green drop-shadow-[0_0_10px_rgba(10,255,100,0.8)]', bar: 'bg-neon-green', visual: 'bg-neon-green' };
        case 'pink': return { border: 'border-neon-pink shadow-[0_0_15px_rgba(255,0,85,0.2)]', text: 'text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,85,0.8)]', bar: 'bg-neon-pink', visual: 'bg-neon-pink' };
        default: return { border: 'border-white', text: 'text-white', bar: 'bg-white', visual: 'bg-white' };
      }
    } else {
      // Mechanical Theme Colors
      switch(colorKey) {
        case 'cyan': return { border: 'border-mech-sky shadow-lg bg-white/50', text: 'text-mech-sky', bar: 'bg-mech-sky', visual: 'bg-mech-sky' };
        case 'purple': return { border: 'border-mech-indigo shadow-lg bg-white/50', text: 'text-mech-indigo', bar: 'bg-mech-indigo', visual: 'bg-mech-indigo' };
        case 'green': return { border: 'border-mech-emerald shadow-lg bg-white/50', text: 'text-mech-emerald', bar: 'bg-mech-emerald', visual: 'bg-mech-emerald' };
        case 'pink': return { border: 'border-mech-amber shadow-lg bg-white/50', text: 'text-mech-amber', bar: 'bg-mech-amber', visual: 'bg-mech-amber' };
        default: return { border: 'border-mech-text', text: 'text-mech-text', bar: 'bg-mech-text', visual: 'bg-mech-text' };
      }
    }
  };

  const styles = getThemeClasses();

  return (
    <section 
      id={id} 
      ref={ref}
      className={`min-h-screen flex items-center justify-center py-24 px-4 relative overflow-hidden`}
    >
      <div className={`container mx-auto relative z-10 ${fullWidth ? 'max-w-[90%]' : 'max-w-7xl'}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className={`font-display text-4xl md:text-5xl font-bold uppercase tracking-wider ${styles.text}`}>
            {title}
          </h2>
          <div className={`h-1 w-24 mx-auto mt-4 rounded-full ${styles.bar} ${theme === 'neon' ? 'shadow-[0_0_10px_currentColor]' : ''}`} />
        </motion.div>

        {fullWidth ? (
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className={`${theme === 'neon' ? 'bg-bg-card/80 backdrop-blur-md' : 'bg-white/70 backdrop-blur-md'} p-8 rounded-2xl border ${styles.border} w-full`}
          >
             {children}
          </motion.div>
        ) : (
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${alternate ? 'lg:grid-flow-dense' : ''}`}>
            
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: alternate ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: alternate ? 50 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${theme === 'neon' ? 'bg-bg-card/80 backdrop-blur-md' : 'bg-white/70 backdrop-blur-md'} p-8 rounded-2xl border ${styles.border} ${alternate ? 'lg:col-start-2' : ''} relative z-20`}
            >
              {children}
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`flex justify-center items-center h-full min-h-[300px] ${alternate ? 'lg:col-start-1' : ''}`}
            >
              <div className={`relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden ${theme === 'neon' ? 'opacity-60 mix-blend-lighten' : 'opacity-80'} hover:opacity-100 transition-opacity duration-700`}>
                 <div className="absolute inset-4 flex items-center justify-center overflow-hidden">
                    <div className={`w-48 h-48 rounded-full blur-[60px] opacity-30 animate-pulse-slow ${styles.visual}`}></div>
                    
                    {id === 'education' && (
                      <div className="text-center p-6 transform rotate-3">
                         <span className={`text-9xl mb-4 block ${theme === 'neon' ? 'drop-shadow-[0_0_25px_rgba(188,19,254,0.5)]' : 'drop-shadow-xl text-mech-text'}`}>🎓</span>
                      </div>
                    )}
                    {id === 'experience' && (
                      <div className="w-full h-full p-4 flex flex-col gap-6 justify-center items-center">
                         <div className={`h-4 rounded w-3/4 animate-pulse ${theme === 'neon' ? 'bg-neon-cyan/20 shadow-[0_0_10px_rgba(0,243,255,0.2)]' : 'bg-mech-sky/40'}`}></div>
                         <div className={`h-4 rounded w-1/2 animate-pulse delay-75 ${theme === 'neon' ? 'bg-neon-cyan/20 shadow-[0_0_10px_rgba(0,243,255,0.2)]' : 'bg-mech-sky/40'}`}></div>
                         <div className={`h-4 rounded w-full animate-pulse delay-150 ${theme === 'neon' ? 'bg-neon-cyan/20 shadow-[0_0_10px_rgba(0,243,255,0.2)]' : 'bg-mech-sky/40'}`}></div>
                      </div>
                    )}
                     {id === 'certificates' && (
                       <div className="flex flex-col items-center justify-center transform -rotate-3">
                          <div className={`w-32 h-40 border-2 rounded flex items-center justify-center mb-2 backdrop-blur-sm ${
                            theme === 'neon' 
                              ? 'border-neon-green/50 shadow-[0_0_20px_rgba(10,255,100,0.2)] bg-black/40' 
                              : 'border-mech-emerald/50 bg-white/60 shadow-lg'
                          }`}>
                             <div className={`w-16 h-16 rounded-full animate-pulse ${theme === 'neon' ? 'bg-neon-green/30' : 'bg-mech-emerald/30'}`}></div>
                          </div>
                       </div>
                    )}
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionWrapper;