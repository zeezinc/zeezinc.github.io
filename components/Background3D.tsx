import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing JSX intrinsic elements in TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}

const AnimatedSphere = ({ position, color, speed, distort, scale }: { position: [number, number, number], color: string, speed: number, distort: number, scale: number }) => {
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
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#00f3ff" />
      <pointLight position={[10, -5, 5]} intensity={2} color="#bc13fe" />
      
      {/* Main Hero Blob - Neon Purple */}
      <AnimatedSphere position={[3, 0, -2]} color="#bc13fe" scale={2.5} speed={1.5} distort={0.5} />
      
      {/* Accent Blobs */}
      {/* Neon Cyan */}
      <AnimatedSphere position={[-4, 3, -5]} color="#00f3ff" scale={1.5} speed={2} distort={0.4} />
      {/* Neon Pink */}
      <AnimatedSphere position={[-3, -4, -3]} color="#ff0055" scale={1.2} speed={1.5} distort={0.6} />
      {/* Neon Green */}
      <AnimatedSphere position={[5, -3, -6]} color="#0aff64" scale={1.8} speed={2} distort={0.3} />

      <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
    </>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D;