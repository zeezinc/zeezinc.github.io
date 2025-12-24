import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Torus, Octahedron, Box, Sphere, Cone, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import { Theme } from '../types';

// Fix for missing JSX intrinsic elements in TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Three.js elements
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      group: any;

      // Standard HTML elements
      div: any;
      span: any;
      p: any;
      a: any;
      img: any;
      ul: any;
      li: any;
      button: any;
      h1: any;
      h2: any;
      h3: any;
      h4: any;
      h5: any;
      h6: any;
      nav: any;
      header: any;
      footer: any;
      section: any;
      form: any;
      input: any;
      label: any;
      canvas: any;
    }
  }
}

// --- Neon Theme Components (Space Theme) ---

const Satellite = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Slow complex rotation
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={[6, 3, -5]} rotation={[0.5, -0.5, 0]} ref={groupRef} scale={0.8}>
        {/* Main Body - Gold Foil Look */}
        <Box args={[1.5, 2, 1.5]}> 
           <meshStandardMaterial 
             color="#fbbf24" // Gold
             metalness={0.9}
             roughness={0.3}
             emissive="#b45309"
             emissiveIntensity={0.1}
           />
        </Box>

        {/* Solar Panels Left */}
        <group position={[-2.5, 0, 0]}>
           {/* Connector */}
           <Cylinder args={[0.1, 0.1, 1.5]} rotation={[0, 0, Math.PI / 2]} position={[1.5, 0, 0]}>
               <meshStandardMaterial color="#94a3b8" metalness={0.8} />
           </Cylinder>
           {/* Panel */}
           <Box args={[3.5, 1.2, 0.05]}>
              <meshStandardMaterial 
                color="#1e3a8a" // Dark Solar Blue
                roughness={0.2} 
                metalness={0.8} 
                emissive="#172554"
                emissiveIntensity={0.2}
              />
           </Box>
           {/* Grid lines (simulated with thin strips) */}
           <Box args={[3.5, 0.05, 0.06]} position={[0, 0.3, 0]}>
             <meshStandardMaterial color="#000" />
           </Box>
           <Box args={[3.5, 0.05, 0.06]} position={[0, -0.3, 0]}>
             <meshStandardMaterial color="#000" />
           </Box>
        </group>

        {/* Solar Panels Right */}
        <group position={[2.5, 0, 0]}>
           {/* Connector */}
           <Cylinder args={[0.1, 0.1, 1.5]} rotation={[0, 0, Math.PI / 2]} position={[-1.5, 0, 0]}>
               <meshStandardMaterial color="#94a3b8" metalness={0.8} />
           </Cylinder>
           {/* Panel */}
           <Box args={[3.5, 1.2, 0.05]}>
              <meshStandardMaterial 
                color="#1e3a8a" 
                roughness={0.2} 
                metalness={0.8}
                emissive="#172554"
                emissiveIntensity={0.2}
              />
           </Box>
           {/* Grid lines */}
           <Box args={[3.5, 0.05, 0.06]} position={[0, 0.3, 0]}>
             <meshStandardMaterial color="#000" />
           </Box>
           <Box args={[3.5, 0.05, 0.06]} position={[0, -0.3, 0]}>
             <meshStandardMaterial color="#000" />
           </Box>
        </group>

        {/* Comms Dish */}
        <group position={[0, 1.2, 0]} rotation={[0.4, 0, 0]}>
           <Cone args={[0.8, 0.4, 32, 1, true]} rotation={[Math.PI, 0, 0]}>
              <meshStandardMaterial color="#cbd5e1" side={THREE.DoubleSide} metalness={0.5} />
           </Cone>
           <Sphere args={[0.15]} position={[0, -0.1, 0]}>
               <meshStandardMaterial color="#cbd5e1" />
           </Sphere>
           {/* Antenna spike */}
           <Cylinder args={[0.02, 0.02, 0.8]} position={[0, 0.2, 0]}>
               <meshStandardMaterial color="#cbd5e1" />
           </Cylinder>
        </group>

        {/* Tech Sensor Lens */}
        <group position={[0, 0.5, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
            <Cylinder args={[0.3, 0.3, 0.2]}>
                <meshStandardMaterial color="#333" />
            </Cylinder>
            <Sphere args={[0.2]} position={[0, 0.1, 0]}>
                 <meshStandardMaterial 
                    color="#00f3ff"
                    emissive="#00f3ff"
                    emissiveIntensity={5}
                    toneMapped={false}
                 />
            </Sphere>
        </group>

      </group>
    </Float>
  );
};

const UFO = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.8;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
      <group position={[-5, 2, -3]} ref={groupRef} scale={0.8}>
        {/* Dome */}
        <Sphere args={[0.8, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} position={[0, 0.2, 0]}>
           <meshStandardMaterial 
             color="#00f3ff" 
             roughness={0.1} 
             metalness={0.9} 
             opacity={0.9} 
             transparent 
             emissive="#00f3ff" 
             emissiveIntensity={2}
             toneMapped={false}
           />
        </Sphere>
        {/* Disk Body */}
        <Cylinder args={[2, 1, 0.5, 32]} position={[0, -0.2, 0]}>
           <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
        </Cylinder>
        {/* Lights */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Sphere key={i} args={[0.15, 8, 8]} position={[1.6 * Math.cos(i * Math.PI / 3), -0.2, 1.6 * Math.sin(i * Math.PI / 3)]}>
             <meshStandardMaterial 
               color="#0aff64" 
               emissive="#0aff64" 
               emissiveIntensity={8} 
               toneMapped={false} 
             />
          </Sphere>
        ))}
      </group>
    </Float>
  );
};

const Rocket = () => {
   const groupRef = useRef<THREE.Group>(null);
   useFrame((state) => {
     if (groupRef.current) {
       // Gentle flying motion
       groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1 - Math.PI / 4;
     }
   });

   return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
       <group position={[0, -3, -4]} ref={groupRef} scale={0.7}>
          {/* Body */}
          <Cylinder args={[0.4, 0.6, 2.5, 16]}>
             <meshStandardMaterial color="#e2e8f0" metalness={0.6} roughness={0.2} />
          </Cylinder>
          {/* Nose */}
          <Cone args={[0.6, 1, 16]} position={[0, 1.75, 0]}>
             <meshStandardMaterial 
               color="#ff0055" 
               emissive="#ff0055" 
               emissiveIntensity={2} 
               toneMapped={false}
             />
          </Cone>
          {/* Fins */}
          {[0, 1, 2, 3].map((i) => (
             <group key={i} rotation={[0, i * Math.PI / 2, 0]}>
                <Box args={[0.1, 1, 1]} position={[0.6, -0.8, 0]}>
                    <meshStandardMaterial color="#3b82f6" />
                </Box>
             </group>
          ))}
          {/* Window */}
          <Sphere args={[0.25, 16, 16]} position={[0, 0.5, 0.35]}>
             <meshStandardMaterial 
               color="#00f3ff" 
               emissive="#00f3ff" 
               emissiveIntensity={5} 
               toneMapped={false}
             />
          </Sphere>
          {/* Engine Flame */}
          <Cone args={[0.3, 1, 8]} position={[0, -1.8, 0]} rotation={[Math.PI, 0, 0]}>
              <meshStandardMaterial 
                color="#f59e0b" 
                emissive="#f59e0b" 
                emissiveIntensity={10} 
                toneMapped={false}
              />
          </Cone>
       </group>
    </Float>
   )
}

const NeonScene = () => (
  <>
    <ambientLight intensity={1} />
    <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
    <pointLight position={[-10, 5, -5]} intensity={5} color="#00f3ff" distance={20} />
    <pointLight position={[5, -5, 5]} intensity={3} color="#bc13fe" distance={20} />
    
    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
    
    <Satellite />
    <UFO />
    <Rocket />
  </>
);

// --- Mechanical Theme Components ---
const CrossShape = ({ position, color, speed, scale }: any) => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state) => {
      if (groupRef.current) {
        groupRef.current.rotation.x += 0.005 * speed;
        groupRef.current.rotation.z -= 0.005 * speed;
      }
    });

    const material = <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />;
    
    return (
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={position} scale={scale} ref={groupRef}>
            <Box args={[1.5, 0.4, 0.4]}>{material}</Box>
            <Box args={[0.4, 1.5, 0.4]}>{material}</Box>
        </group>
      </Float>
    );
}

const MechShape = ({ type, position, color, speed, scale }: any) => {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005 * speed;
        meshRef.current.rotation.y += 0.01 * speed;
      }
    });

    const material = <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />;

    return (
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <group position={position} scale={scale} ref={meshRef}>
            {type === 'torus' && <Torus args={[1.2, 0.3, 16, 50]} >{material}</Torus>}
            {type === 'octa' && <Octahedron args={[1.5, 0]} >{material}</Octahedron>}
            {type === 'box' && <Box args={[1.2, 1.2, 1.2]} >{material}</Box>}
        </group>
      </Float>
    );
};

const MechScene = () => (
  <>
    <ambientLight intensity={0.8} />
    <directionalLight position={[5, 10, 7]} intensity={1.2} color="#fff7ed" />
    <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0ea5e9" />
    
    {/* Geometric shapes */}
    {/* Modified Yellow Cross: Larger, more left, a bit up */}
    <CrossShape position={[-7, -1, -3]} color="#f59e0b" scale={2.5} speed={1.2} /> {/* Amber */}
    
    <CrossShape position={[3, 1, -2]} color="#0ea5e9" scale={1.5} speed={1} /> {/* Sky */}
    <MechShape type="octa" position={[-4, 3, -5]} color="#6366f1" scale={1.5} speed={0.8} /> {/* Indigo */}
    <MechShape type="torus" position={[5, -3, -6]} color="#10b981" scale={1.3} speed={0.5} /> {/* Emerald */}
    {/* Removed the Black Box MechShape */}
  </>
);

const Background3D: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${theme === 'neon' ? 'opacity-60' : 'opacity-100'}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {theme === 'neon' ? <NeonScene /> : <MechScene />}
      </Canvas>
    </div>
  );
};

export default Background3D;