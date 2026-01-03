import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Server, Database, Cloud, Cpu, Terminal, Layers } from 'lucide-react';
import SkillBar from './SkillBar';
import { Skill, Theme } from '../types';

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  theme: Theme;
  defaultOpen?: boolean;
}

const getCategoryIcon = (category: string, theme: Theme) => {
  const props = { size: 20, className: theme === 'neon' ? 'text-neon-pink' : 'text-mech-amber' };
  const lower = category.toLowerCase();
  
  if (lower.includes('frontend') || lower.includes('web')) return <Code {...props} />;
  if (lower.includes('backend') || lower.includes('server')) return <Server {...props} />;
  if (lower.includes('data') || lower.includes('db')) return <Database {...props} />;
  if (lower.includes('cloud') || lower.includes('infra')) return <Cloud {...props} />;
  if (lower.includes('ai') || lower.includes('ml')) return <Cpu {...props} />;
  if (lower.includes('ops') || lower.includes('devops')) return <Terminal {...props} />;
  
  return <Layers {...props} />;
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, theme, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`mb-4 rounded-xl overflow-hidden border transition-all duration-300
      ${theme === 'neon' 
        ? `bg-white/5 border-white/10 ${isOpen ? 'border-neon-pink/50 shadow-[0_0_15px_rgba(255,0,85,0.1)]' : 'hover:border-white/30'}` 
        : `bg-white border-gray-200 ${isOpen ? 'border-mech-amber/50 shadow-md' : 'hover:border-gray-300'}`
      }
    `}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 text-left transition-colors
          ${theme === 'neon' ? 'hover:bg-white/5' : 'hover:bg-gray-50'}
        `}
      >
        <div className="flex items-center gap-3">
          {getCategoryIcon(category, theme)}
          <span className={`font-bold tracking-wide uppercase ${theme === 'neon' ? 'text-white' : 'text-mech-text'}`}>
            {category}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            theme === 'neon' ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'
          }`}>
            {skills.length}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} className={theme === 'neon' ? 'text-gray-400' : 'text-gray-500'} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className={`p-4 pt-0 border-t ${theme === 'neon' ? 'border-white/5' : 'border-gray-100'}`}>
              <div className="mt-4 flex flex-col gap-6">
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={`${category}-${skill.name}`} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={index * 0.05} 
                    theme={theme} 
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillCategory;