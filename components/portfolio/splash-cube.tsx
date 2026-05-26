"use client"

import { useRef, useState, useCallback, Suspense } from "react"
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import { useRouter } from "next/navigation"
import * as THREE from "three"

interface NavFace {
  label: string
  href: string
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
}

const navFaces: NavFace[] = [
  { label: "HOME", href: "/home", position: [0, 0, 1.51], rotation: [0, 0, 0], color: "#ffffff" },
  { label: "ABOUT", href: "/about", position: [0, 0, -1.51], rotation: [0, Math.PI, 0], color: "#ffffff" },
  { label: "EXPERIENCE", href: "/experience", position: [1.51, 0, 0], rotation: [0, Math.PI / 2, 0], color: "#ffffff" },
  { label: "WORK", href: "/projects", position: [-1.51, 0, 0], rotation: [0, -Math.PI / 2, 0], color: "#ffffff" },
  { label: "EXPERIMENTS", href: "/experiments", position: [0, 1.51, 0], rotation: [-Math.PI / 2, 0, 0], color: "#ffffff" },
  { label: "CONTACT", href: "/contact", position: [0, -1.51, 0], rotation: [Math.PI / 2, 0, 0], color: "#ffffff" },
]

function CubeFace({ face, onHover, isHovered }: { face: NavFace; onHover: (label: string | null) => void; isHovered: boolean }) {
  const router = useRouter()
  
  const handleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    router.push(face.href)
  }, [router, face.href])

  return (
    <group position={face.position} rotation={face.rotation}>
      <mesh
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation()
          onHover(face.label)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          onHover(null)
          document.body.style.cursor = "default"
        }}
      >
        <planeGeometry args={[2.8, 2.8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <Html
        position={[0, 0, 0.01]}
        center
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: isHovered ? "#000000" : "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          {face.label}
        </span>
      </Html>
    </group>
  )
}

function NavigationCube() {
  const groupRef = useRef<THREE.Group>(null)
  const [hoveredFace, setHoveredFace] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const targetRotation = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0.002, y: 0.003 })

  useFrame((state, delta) => {
    if (groupRef.current && !isDragging) {
      // Gentle auto-rotation when not interacting
      groupRef.current.rotation.y += velocity.current.y
      groupRef.current.rotation.x += velocity.current.x
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main cube structure */}
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color={hoveredFace ? "#ffffff" : "#1a1a1a"}
          metalness={0.1}
          roughness={0.3}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Edge lines for visual definition */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(3.02, 3.02, 3.02)]} />
        <lineBasicMaterial color="#ffffff" linewidth={2} />
      </lineSegments>

      {/* Navigation faces */}
      {navFaces.map((face) => (
        <CubeFace
          key={face.label}
          face={face}
          onHover={setHoveredFace}
          isHovered={hoveredFace === face.label}
        />
      ))}
    </group>
  )
}

function Instructions() {
  return (
    <Html
      position={[0, -3, 0]}
      center
      style={{
        width: "300px",
        textAlign: "center",
        pointerEvents: "none",
      }}
    >
      <p
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#888888",
          margin: 0,
        }}
      >
        Drag to rotate / Click face to navigate
      </p>
    </Html>
  )
}

function LoadingFallback() {
  return (
    <Html center>
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "12px",
          letterSpacing: "0.1em",
          color: "#ffffff",
        }}
      >
        Loading...
      </div>
    </Html>
  )
}

export function SplashCube() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        style={{ background: "#0a0a0a" }}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />

          {/* Main cube */}
          <NavigationCube />

          {/* Instructions */}
          <Instructions />

          {/* Orbit controls for interaction */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            dampingFactor={0.1}
            enableDamping
          />
        </Suspense>
      </Canvas>

      {/* Name overlay */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#ffffff",
            margin: 0,
          }}
        >
          Naekyoung Kim
        </h1>
      </div>
    </div>
  )
}
