import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars, Torus, Octahedron, Box } from '@react-three/drei';
import * as THREE from 'three';
import { Theme } from '../types';

// Fix for missing JSX intrinsic elements in TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      meshStandardMaterial: any;
      group: any;
    }
  }
}

// --- Neon Theme Components ---
const NeonBlob = ({ position, color, speed, distort, scale }: { position: [number, number, number], color: string, speed: number, distort: number, scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1, 32, 32]} position={position} scale={scale} ref={meshRef}>
        <MeshDistortMaterial color={color} distort={distort} speed={speed} roughness={0.2} metalness={0.8} />
      </Sphere>
    </Float>
  );
};

const NeonScene = () => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
    <pointLight position={[-10, -10, -10]} intensity={2} color="#00f3ff" />
    <pointLight position={[10, -5, 5]} intensity={2} color="#bc13fe" />
    <NeonBlob position={[3, 0, -2]} color="#bc13fe" scale={2.5} speed={1.5} distort={0.5} />
    <NeonBlob position={[-4, 3, -5]} color="#00f3ff" scale={1.5} speed={2} distort={0.4} />
    <NeonBlob position={[-3, -4, -3]} color="#ff0055" scale={1.2} speed={1.5} distort={0.6} />
    <NeonBlob position={[5, -3, -6]} color="#0aff64" scale={1.8} speed={2} distort={0.3} />
    <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
  </>
);

// --- Mechanical Theme Components ---
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
            {type === 'torus' && <Torus args={[1.5, 0.4, 16, 50]} >{material}</Torus>}
            {type === 'octa' && <Octahedron args={[1.5, 0]} >{material}</Octahedron>}
            {type === 'box' && <Box args={[1.5, 1.5, 1.5]} >{material}</Box>}
        </group>
      </Float>
    );
};

const MechScene = () => (
  <>
    <ambientLight intensity={0.8} />
    <directionalLight position={[5, 10, 7]} intensity={1.2} color="#fff7ed" />
    <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0ea5e9" />
    
    {/* Clean geometric shapes instead of blobs */}
    <MechShape type="torus" position={[3, 0, -2]} color="#0ea5e9" scale={1.2} speed={1} /> {/* Sky */}
    <MechShape type="octa" position={[-4, 3, -5]} color="#6366f1" scale={1.5} speed={0.8} /> {/* Indigo */}
    <MechShape type="box" position={[-3, -4, -3]} color="#f59e0b" scale={1.0} speed={1.2} /> {/* Amber */}
    <MechShape type="torus" position={[5, -3, -6]} color="#10b981" scale={1.3} speed={0.5} /> {/* Emerald */}
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