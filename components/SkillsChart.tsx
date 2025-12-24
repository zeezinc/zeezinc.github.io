import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { Skill, Theme } from '../types';

interface SkillsChartProps {
    skills: Skill[];
    theme: Theme;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills, theme }) => {
  const chartColor = theme === 'neon' ? '#bc13fe' : '#6366f1'; // Purple vs Indigo
  const gridColor = theme === 'neon' ? '#333' : '#cbd5e1';
  const textColor = theme === 'neon' ? '#aaa' : '#475569';
  const tooltipBg = theme === 'neon' ? '#0a0a0c' : '#ffffff';
  const tooltipText = theme === 'neon' ? '#fff' : '#1e293b';

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skills}>
          <PolarGrid stroke={gridColor} />
          <PolarAngleAxis dataKey="name" tick={{ fill: textColor, fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke={chartColor}
            strokeWidth={3}
            fill={chartColor}
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: tooltipBg, borderColor: gridColor, color: tooltipText }}
            itemStyle={{ color: chartColor }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;