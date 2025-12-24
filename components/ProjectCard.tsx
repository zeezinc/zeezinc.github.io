import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Icosahedron, Box, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Fix for missing JSX intrinsic elements in TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      meshStandardMaterial: any;
    }
  }
}

const ProjectModel = ({ type, color, hovered }: { type: string, color: string, hovered: boolean }) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

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
};

interface ProjectCardProps {
  project: Project;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, color }) => {
  const [hovered, setHovered] = useState(false);

  let modelType = 'torus';
  if (project.id === 2) modelType = 'icosahedron';
  if (project.id === 3) modelType = 'box';

  return (
    <motion.div 
      className="bg-black/40 rounded-xl overflow-hidden border border-white/10 hover:border-neon-green/50 transition-all duration-300 flex flex-col h-full group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 w-full bg-gradient-to-b from-black/20 to-black/80 relative">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ProjectModel type={modelType} color={color} hovered={hovered} />
          <OrbitControls enableZoom={true} enablePan={false} autoRotate={false} />
        </Canvas>
        <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs text-neon-green border border-neon-green/30">
          Interactive 3D
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">{project.title}</h3>
          <a href={project.link} className="text-gray-400 hover:text-neon-green transition-colors"><ExternalLink size={18} /></a>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-neon-green/80 bg-neon-green/10 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;