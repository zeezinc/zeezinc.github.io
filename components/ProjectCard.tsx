import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { TorusKnot, Icosahedron, Box, Torus, Octahedron, Dodecahedron, OrbitControls, Cone, Cylinder, Sphere, Tetrahedron } from '@react-three/drei';
import { Project, Theme } from '../types';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
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

  // Dark Mode (Neon) -> Complex Wireframes with Glow
  if (theme === 'neon') {
      const material = (
        <meshStandardMaterial 
          color={color} 
          wireframe={true}
          emissive={color} 
          emissiveIntensity={2} // Luminous but not blinding
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
                    emissiveIntensity={1.5} 
                    toneMapped={false}
                 />
               </Box>
             </group>
           )}
           {/* Student Info Bot - Complex Dodecahedron */}
           {projectId === 4 && (
             <Dodecahedron args={[1.5, 0]}>
                {material}
             </Dodecahedron>
           )}
           {/* Property Finder - Tetrahedron (Roof/Structure vibe) */}
           {projectId === 5 && (
             <group rotation={[Math.PI/4, 0, 0]}>
                <Tetrahedron args={[1.8]}>
                   {material}
                </Tetrahedron>
                <Octahedron args={[0.5, 0]}>
                    <meshStandardMaterial 
                        color="#ffffff" 
                        wireframe 
                        emissive="#ffffff" 
                        emissiveIntensity={1} 
                        toneMapped={false}
                    />
                </Octahedron>
             </group>
           )}
           {/* Third Eye - Vision Eye Structure */}
           {projectId === 6 && (
             <group rotation={[Math.PI/2, 0, 0]}>
               <Sphere args={[0.8, 32, 32]}>
                 {material}
               </Sphere>
               <Torus args={[1.2, 0.1, 16, 100]}>
                 <meshStandardMaterial 
                    color="#ffffff" 
                    wireframe 
                    emissive="#ffffff" 
                    emissiveIntensity={1} 
                    toneMapped={false}
                 />
               </Torus>
             </group>
           )}
        </group>
      );
  } else {
      // Light Mode (Mech) -> Professional Metallic Solids
      const material = (
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.6} 
          envMapIntensity={1}
        />
      );

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
             {/* Facility Management (ID 4) - Modular Boxes */}
             {projectId === 4 && (
                <group>
                  <Box args={[1.2, 1.2, 1.2]} position={[-0.4, -0.4, 0]}>
                     {material}
                  </Box>
                  <Box args={[1, 1, 1]} position={[0.5, 0.5, 0.5]}>
                     <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
                  </Box>
                </group>
             )}
             {/* Payroll (ID 5) - Cylinder Stack (Coins/Database) - Distinct from ID 3 */}
             {projectId === 5 && (
                <group rotation={[Math.PI/6, 0, 0]}>
                  <Cylinder args={[1, 1, 0.5, 32]} position={[0, 0.6, 0]}>
                     {material}
                  </Cylinder>
                  <Cylinder args={[1, 1, 0.5, 32]} position={[0, 0, 0]}>
                     {material}
                  </Cylinder>
                  <Cylinder args={[1, 1, 0.5, 32]} position={[0, -0.6, 0]}>
                     {material}
                  </Cylinder>
                </group>
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
          <pointLight position={[10, 10, 10]} intensity={theme === 'neon' ? 1.5 : 1.0} />
          {theme === 'mech' && <pointLight position={[-10, -10, -10]} intensity={0.5} />}
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
          <a 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            title="View Project"
            className={`${theme === 'neon' ? 'text-gray-400 hover:text-neon-green' : 'text-gray-500 hover:text-mech-emerald'} transition-colors`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
        
        <p className={`text-sm mb-6 flex-1 overflow-y-auto pr-2 ${theme === 'neon' ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
        
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