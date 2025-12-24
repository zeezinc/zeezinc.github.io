import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Icosahedron, Box, MeshDistortMaterial, OrbitControls, Cylinder, Tetrahedron } from '@react-three/drei';
import { Project, Theme } from '../types';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Fix for missing JSX intrinsic elements in TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      meshStandardMaterial: any;
      group: any;
    }
  }
}

const ProjectModel = ({ type, color, hovered, theme }: { type: string, color: string, hovered: boolean, theme: Theme }) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  if (theme === 'neon') {
      return (
        <>
          {type === 'torus' && (
            <TorusKnot args={[1, 0.3, 100, 16]} ref={meshRef}>
              <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
            </TorusKnot>
          )}
          {type === 'icosahedron' && (
            <Icosahedron args={[1.5, 0]} ref={meshRef}>
               <meshStandardMaterial color={color} wireframe />
            </Icosahedron>
          )}
          {type === 'box' && (
            <Box args={[1.8, 1.8, 1.8]} ref={meshRef}>
               <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
            </Box>
          )}
        </>
      );
  } else {
      // Mechanical Theme Models - Clean Geometry, Matte Finish
      const material = <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />;
      return (
        <group ref={meshRef}>
             {type === 'torus' && (
                <Cylinder args={[1, 1, 1, 6]} rotation={[Math.PI/4, Math.PI/4, 0]}>
                   {material}
                </Cylinder>
             )}
             {type === 'icosahedron' && (
                <Tetrahedron args={[1.8, 0]}>
                   {material}
                </Tetrahedron>
             )}
             {type === 'box' && (
                <Box args={[1.5, 1.5, 1.5]}>
                   {material}
                </Box>
             )}
        </group>
      )
  }
};

interface ProjectCardProps {
  project: Project;
  color: string;
  theme: Theme;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, color, theme }) => {
  const [hovered, setHovered] = useState(false);

  let modelType = 'torus';
  if (project.id === 2) modelType = 'icosahedron';
  if (project.id === 3) modelType = 'box';

  return (
    <motion.div 
      className={`rounded-xl overflow-hidden border transition-all duration-300 flex flex-col h-full group
        ${theme === 'neon' 
          ? 'bg-black/40 border-white/10 hover:border-neon-green/50' 
          : 'bg-white shadow-lg border-mech-slate hover:border-mech-emerald/50'
        }
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className={`h-48 w-full relative ${theme === 'neon' ? 'bg-gradient-to-b from-black/20 to-black/80' : 'bg-mech-slate'}`}>
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={theme === 'neon' ? 0.5 : 0.8} />
          <pointLight position={[10, 10, 10]} />
          <ProjectModel type={modelType} color={color} hovered={hovered} theme={theme} />
          <OrbitControls enableZoom={true} enablePan={false} autoRotate={false} />
        </Canvas>
        <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs border ${
            theme === 'neon' 
            ? 'bg-black/60 text-neon-green border-neon-green/30'
            : 'bg-white/80 text-mech-emerald border-mech-emerald/30'
        }`}>
          Interactive 3D
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-bold transition-colors ${theme === 'neon' ? 'text-white group-hover:text-neon-green' : 'text-mech-text group-hover:text-mech-emerald'}`}>
              {project.title}
          </h3>
          <a href={project.link} className={`${theme === 'neon' ? 'text-gray-400 hover:text-neon-green' : 'text-gray-500 hover:text-mech-emerald'} transition-colors`}><ExternalLink size={18} /></a>
        </div>
        
        <p className={`text-sm mb-6 flex-1 ${theme === 'neon' ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <span key={i} className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded ${
                theme === 'neon' 
                ? 'text-neon-green/80 bg-neon-green/10'
                : 'text-mech-emerald bg-mech-emerald/10'
            }`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;