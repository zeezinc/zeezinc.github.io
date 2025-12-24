import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../types';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
  theme: Theme;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0, theme }) => {
  const textColor = theme === 'neon' ? 'text-white' : 'text-mech-text';
  const accentColor = theme === 'neon' ? 'text-neon-pink' : 'text-mech-amber';
  const barBg = theme === 'neon' ? 'bg-white/10' : 'bg-gray-200';
  const fillClass = theme === 'neon' ? 'bg-neon-pink shadow-[0_0_8px_#ff0055]' : 'bg-mech-amber';

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className={`${textColor} font-bold tracking-wide`}>{name}</span>
        <span className={`${accentColor} font-mono`}>{level}%</span>
      </div>
      <div className={`h-2 w-full ${barBg} rounded-full overflow-hidden`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${fillClass}`}
        />
      </div>
    </div>
  );
};

export default SkillBar;