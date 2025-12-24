import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionProps } from '../types';

const SectionWrapper: React.FC<SectionProps> = ({ id, title, children, alternate = false, neonColor, fullWidth = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getBorderColor = () => {
    switch(neonColor) {
      case 'cyan': return 'border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.2)]';
      case 'purple': return 'border-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.2)]';
      case 'green': return 'border-neon-green shadow-[0_0_15px_rgba(10,255,100,0.2)]';
      case 'pink': return 'border-neon-pink shadow-[0_0_15px_rgba(255,0,85,0.2)]';
      default: return 'border-white';
    }
  };

  const getTitleColor = () => {
    switch(neonColor) {
      case 'cyan': return 'text-neon-cyan drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]';
      case 'purple': return 'text-neon-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.8)]';
      case 'green': return 'text-neon-green drop-shadow-[0_0_10px_rgba(10,255,100,0.8)]';
      case 'pink': return 'text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,85,0.8)]';
      default: return 'text-white';
    }
  };

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
          <h2 className={`font-display text-4xl md:text-5xl font-bold uppercase tracking-wider ${getTitleColor()}`}>
            {title}
          </h2>
          <div className={`h-1 w-24 mx-auto mt-4 rounded-full ${
            neonColor === 'cyan' ? 'bg-neon-cyan' : 
            neonColor === 'purple' ? 'bg-neon-purple' : 
            neonColor === 'green' ? 'bg-neon-green' : 'bg-neon-pink'
          } shadow-[0_0_10px_currentColor]`} />
        </motion.div>

        {fullWidth ? (
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className={`bg-bg-card/80 backdrop-blur-md p-8 rounded-2xl border ${getBorderColor()} w-full`}
          >
             {children}
          </motion.div>
        ) : (
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${alternate ? 'lg:grid-flow-dense' : ''}`}>
            
            {/* Content Side - The "Card" */}
            <motion.div
              initial={{ opacity: 0, x: alternate ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: alternate ? 50 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`bg-bg-card/80 backdrop-blur-md p-8 rounded-2xl border ${getBorderColor()} ${alternate ? 'lg:col-start-2' : ''} relative z-20`}
            >
              {children}
            </motion.div>

            {/* Visual/Image Side - Faded, No Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`flex justify-center items-center h-full min-h-[300px] ${alternate ? 'lg:col-start-1' : ''}`}
            >
              <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden opacity-60 mix-blend-lighten hover:opacity-100 transition-opacity duration-700">
                 {/* Visual Placeholder content */}
                 <div className="absolute inset-4 flex items-center justify-center overflow-hidden">
                    <div className={`w-48 h-48 rounded-full blur-[60px] opacity-30 animate-pulse-slow ${
                       neonColor === 'cyan' ? 'bg-neon-cyan' : 
                       neonColor === 'purple' ? 'bg-neon-purple' : 
                       neonColor === 'green' ? 'bg-neon-green' : 'bg-neon-pink'
                    }`}></div>
                    
                    {id === 'education' && (
                      <div className="text-center p-6 transform rotate-3">
                         <span className="text-9xl mb-4 block drop-shadow-[0_0_25px_rgba(188,19,254,0.5)]">🎓</span>
                      </div>
                    )}
                    {id === 'experience' && (
                      <div className="w-full h-full p-4 flex flex-col gap-6 justify-center items-center">
                         <div className="h-4 bg-neon-cyan/20 rounded w-3/4 animate-pulse shadow-[0_0_10px_rgba(0,243,255,0.2)]"></div>
                         <div className="h-4 bg-neon-cyan/20 rounded w-1/2 animate-pulse delay-75 shadow-[0_0_10px_rgba(0,243,255,0.2)]"></div>
                         <div className="h-4 bg-neon-cyan/20 rounded w-full animate-pulse delay-150 shadow-[0_0_10px_rgba(0,243,255,0.2)]"></div>
                      </div>
                    )}
                     {id === 'certificates' && (
                       <div className="flex flex-col items-center justify-center transform -rotate-3">
                          <div className="w-32 h-40 border-2 border-neon-green/50 rounded flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(10,255,100,0.2)] bg-black/40 backdrop-blur-sm">
                             <div className="w-16 h-16 rounded-full bg-neon-green/30 animate-pulse"></div>
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