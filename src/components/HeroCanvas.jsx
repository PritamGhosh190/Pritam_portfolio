import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { colors } from "../config";

function randomPositions(count) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 1.6 + Math.random() * 1.6;
    const theta = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 3;
    arr[i * 3] = Math.cos(theta) * r;
    arr[i * 3 + 1] = y;
    arr[i * 3 + 2] = Math.sin(theta) * r - 1;
  }
  return arr;
}

function makeDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.5)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function Dust({ count = 90 }) {
  const pointsRef = useRef(null);
  const [positions] = useState(() => randomPositions(count));
  const texture = useMemo(() => makeDotTexture(), []);

  useFrame((state, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.07}
        color={colors.coral}
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
        alphaTest={0.01}
      />
    </points>
  );
}

/* Three tilted rings, lit with real point lights so they pick up genuine
   specular highlights as they spin — this is what sells the "3D" read,
   not flat CSS circles. */
function Rings() {
  const group = useRef(null);
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const ring3 = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (group.current) group.current.position.y = Math.sin(t * 0.6) * 0.07;
    if (ring1.current) ring1.current.rotation.z += delta * 0.22;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.16;
    if (ring3.current) ring3.current.rotation.z += delta * 0.1;
  });

  return (
    <group ref={group}>
      <mesh ref={ring1} rotation={[Math.PI / 2.1, 0.35, 0]}>
        <torusGeometry args={[1.5, 0.035, 32, 120]} />
        <meshStandardMaterial
          color={colors.coral}
          emissive={colors.coral}
          emissiveIntensity={1.5}
          roughness={0.25}
          metalness={0.5}
        />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 2.4, -0.4, 0.25]}>
        <torusGeometry args={[1.25, 0.02, 32, 120]} />
        <meshStandardMaterial
          color="#FF9270"
          emissive="#FF9270"
          emissiveIntensity={1.1}
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>
      <mesh ref={ring3} rotation={[Math.PI / 1.85, 0.6, -0.3]}>
        <torusGeometry args={[1.72, 0.014, 32, 120]} />
        <meshStandardMaterial
          color={colors.coral}
          emissive={colors.coral}
          emissiveIntensity={0.8}
          transparent
          opacity={0.55}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[2.5, 2, 3]} intensity={55} color="#FF8A68" distance={12} decay={2} />
      <pointLight position={[-2, -1.5, 2]} intensity={20} color={colors.coral} distance={12} decay={2} />
      <Rings />
      <Dust />
    </>
  );
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* Respects prefers-reduced-motion and quietly no-ops if WebGL init fails,
   since this is a decorative layer that should never break the page. */
export function HeroCanvas({ className = "" }) {
  const [enabled, setEnabled] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => setEnabled(!e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  if (!enabled) return null;

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;
