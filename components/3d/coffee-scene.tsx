"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text3D, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function CoffeeBean({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.15, 8, 6]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.1} />
        <mesh position={[0, 0, 0.05]} scale={[0.8, 0.8, 0.1]}>
          <sphereGeometry args={[0.1, 8, 6]} />
          <meshStandardMaterial color="#654321" roughness={0.9} />
        </mesh>
      </mesh>
    </Float>
  )
}

function CoffeeCup() {
  const cupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (cupRef.current) {
      cupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      cupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={cupRef}>
        {/* Cup Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
          <meshStandardMaterial color="#f8f8f8" roughness={0.1} metalness={0.05} />
        </mesh>

        {/* Coffee Liquid */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 0.1, 32]} />
          <meshStandardMaterial color="#3e2723" roughness={0.3} metalness={0.1} />
        </mesh>

        {/* Cup Handle */}
        <mesh position={[0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.05, 8, 16]} />
          <meshStandardMaterial color="#f8f8f8" roughness={0.1} metalness={0.05} />
        </mesh>

        {/* Saucer */}
        <mesh position={[0, -0.7, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.1} metalness={0.05} />
        </mesh>
      </group>
    </Float>
  )
}

function SteamParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += 0.01
        if (positions[i] > 3) {
          positions[i] = 0
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const particleCount = 50
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 0.5
    positions[i * 3 + 1] = Math.random() * 3
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5
  }

  return (
    <points ref={particlesRef} position={[0, 1, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
    </points>
  )
}

export default function CoffeeScene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ff6b35" />

          <Environment preset="sunset" />

          <CoffeeCup />
          <SteamParticles />

          {/* Floating Coffee Beans */}
          <CoffeeBean position={[-2, 1, -1]} scale={0.8} />
          <CoffeeBean position={[2, 0.5, -2]} scale={1.2} />
          <CoffeeBean position={[-1.5, -0.5, 1]} scale={0.9} />
          <CoffeeBean position={[1.8, 1.5, 0.5]} scale={1.1} />
          <CoffeeBean position={[-2.5, 0, 0]} scale={0.7} />
          <CoffeeBean position={[0.5, -1, -1.5]} scale={1.3} />

          {/* 3D Text */}
          <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
            <Text3D
              font="/fonts/Geist_Bold.json"
              size={0.3}
              height={0.05}
              position={[-1.5, -2, 0]}
              rotation={[0, 0.2, 0]}
            >
              PREMIUM COFFEE
              <meshStandardMaterial color="#d4af37" roughness={0.1} metalness={0.8} />
            </Text3D>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  )
}
