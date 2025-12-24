import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const SkillsChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="name" tick={{ fill: '#aaa', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#bc13fe"
            strokeWidth={3}
            fill="#bc13fe"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0a0a0c', borderColor: '#333', color: '#fff' }}
            itemStyle={{ color: '#bc13fe' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;