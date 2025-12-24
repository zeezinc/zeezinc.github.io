import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-bold tracking-wide">{name}</span>
        <span className="text-neon-pink font-mono">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className="h-full bg-neon-pink rounded-full shadow-[0_0_8px_#ff0055]"
        />
      </div>
    </div>
  );
};

export default SkillBar;