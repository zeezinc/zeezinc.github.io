import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Icosahedron, Box, Torus, Octahedron, Dodecahedron, OrbitControls, Cone } from '@react-three/drei';
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

const ProjectModel = ({ projectId, color, hovered, theme }: { projectId: number, color: string, hovered: boolean, theme: Theme }) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  // Dark Mode (Neon) -> Complex Wireframes
  if (theme === 'neon') {
      // Significantly increased emissive intensity and disabled toneMapping for "Neon" glow
      const material = (
        <meshStandardMaterial 
          color={color} 
          wireframe 
          wireframeLinewidth={2} 
          emissive={color} 
          emissiveIntensity={4}
          toneMapped={false}
        />
      );
      
      return (
        <group ref={meshRef}>
           {/* NeuroArt Gen - Sharp Edged Object */}
           {projectId === 1 && (
             <Octahedron args={[1.5, 0]}>
                {material}
             </Octahedron>
           )}
           {/* CogniChat - Geodesic Sphere feel */}
           {projectId === 2 && (
             <Icosahedron args={[1.5, 1]}>
               {material}
             </Icosahedron>
           )}
           {/* VoiceClone - Tech Cube */}
           {projectId === 3 && (
             <group>
               <Box args={[1.5, 1.5, 1.5]}>
                 {material}
               </Box>
               <Box args={[0.8, 0.8, 0.8]} rotation={[Math.PI/4, Math.PI/4, 0]}>
                 <meshStandardMaterial 
                    color="#ffffff" 
                    wireframe 
                    emissive="#ffffff" 
                    emissiveIntensity={2} 
                    toneMapped={false}
                 />
               </Box>
             </group>
           )}
        </group>
      );
  } else {
      // Light Mode (Mech) -> Solid Solids
      const material = <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />;

      return (
        <group ref={meshRef}>
             {/* NeuroArt Gen (or equivalent ID 1 in Mech) - Solid Torus */}
             {projectId === 1 && (
                <Torus args={[1.2, 0.4, 16, 50]} rotation={[Math.PI/6, 0, 0]}>
                   {material}
                </Torus>
             )}
             {/* FinTech (ID 2 in Mech) - Solid Octahedron */}
             {projectId === 2 && (
                <Octahedron args={[1.6, 0]}>
                   {material}
                </Octahedron>
             )}
             {/* OmniStore Platform (ID 3 in Mech) - Sharp Pyramid/Cone */}
             {projectId === 3 && (
                <Cone args={[1.5, 2.5, 4]} rotation={[0, 0, 0]}> {/* 4 segments = Pyramid */}
                   {material}
                </Cone>
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
      <div className={`h-48 w-full relative ${theme === 'neon' ? 'bg-gradient-to-b from-black/20 to-black/80' : 'bg-mech-slate/50'}`}>
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={theme === 'neon' ? 0.2 : 0.8} />
          <pointLight position={[10, 10, 10]} intensity={theme === 'neon' ? 1.5 : 0.8} />
          <ProjectModel projectId={project.id} color={color} hovered={hovered} theme={theme} />
          <OrbitControls enableZoom={true} enablePan={false} autoRotate={false} />
        </Canvas>
        <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs border ${
            theme === 'neon' 
            ? 'bg-black/60 text-neon-green border-neon-green/30'
            : 'bg-white/90 text-mech-emerald border-mech-emerald/30'
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