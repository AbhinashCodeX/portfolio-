/* ═══════════════════════════════════════════════════════════════
   ParticleField.jsx
   Full-screen WebGL 3D Dot Sculpture with Three.js
   Loads 78,000 dots from dots.bin (binary file)
   Seamless Reveal with Transparent WebGL Canvas
   ═══════════════════════════════════════════════════════════════ */
import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import portraitImg from '../../assets/photo.png';
import './ParticleField.css';

const lerp = (a, b, t) => a + (b - a) * t;

/* ═════════════════════════════════════════════════
   3D Particle System loaded from dots.bin
   ═════════════════════════════════════════════════ */
function SculptureParticles({
  dotData,
  mouse,
  loaded,
  revealed,
  revealProgress,
}) {
  const pointsRef = useRef();
  const materialRef = useRef();
  const cursorLightRef = useRef();

  const count = dotData ? dotData.count : 0;

  const state = useRef({
    time: 0,
    flyInFactor: 0,
    mouseSmooth: { x: 0, y: 0 },
    revealSmooth: 0,
  });

  useFrame((_, delta) => {
    if (!dotData || !pointsRef.current) return;
    const s = state.current;
    s.time += delta;

    // Fly in animation from ring at 100%
    if (loaded && s.flyInFactor < 1) {
      s.flyInFactor = Math.min(1, s.flyInFactor + delta * 0.95);
    }

    s.revealSmooth = lerp(s.revealSmooth, revealProgress, 0.08);

    // Freeze cursor tracking when revealed
    const isFrozen = revealed && s.revealSmooth > 0.85;
    if (!isFrozen) {
      s.mouseSmooth.x = lerp(s.mouseSmooth.x, mouse.current.x, 0.045);
      s.mouseSmooth.y = lerp(s.mouseSmooth.y, mouse.current.y, 0.045);
    } else {
      // Ease head back to forward
      s.mouseSmooth.x = lerp(s.mouseSmooth.x, 0, 0.06);
      s.mouseSmooth.y = lerp(s.mouseSmooth.y, 0, 0.06);
    }

    const geo = pointsRef.current.geometry;
    if (!geo) return;
    const posArr = geo.attributes.position.array;

    const mx = s.mouseSmooth.x;
    const my = s.mouseSmooth.y;

    // Head turns up to ~30 degrees (0.52 rad) toward cursor
    const maxTurnAngle = 0.52;
    const turnAngle = mx * maxTurnAngle * (1 - s.revealSmooth);
    const cosA = Math.cos(turnAngle);
    const sinA = Math.sin(turnAngle);

    const f = s.flyInFactor;
    // Cubic ease-out
    const easeFly = 1 - Math.pow(1 - f, 3);
    const rev = s.revealSmooth;

    const { targetPositions, ringPositions } = dotData;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      const rx = ringPositions[idx];
      const ry = ringPositions[idx + 1];
      const rz = ringPositions[idx + 2];

      const tx = targetPositions[idx];
      const ty = targetPositions[idx + 1];
      const tz = targetPositions[idx + 2];

      // Interpolate fly-in
      const baseX = lerp(rx, tx, easeFly);
      const baseY = lerp(ry, ty, easeFly);
      const baseZ = lerp(rz, tz, easeFly);

      // Idle drift before / after movement
      const drift = Math.sin(s.time * 0.45 + i * 0.12) * 0.012;
      const driftY = Math.cos(s.time * 0.38 + i * 0.16) * 0.009;

      // Rotate toward cursor
      let nx = baseX * cosA - baseZ * sinA;
      let ny = baseY + my * 0.08 * (1 - rev);
      let nz = baseX * sinA + baseZ * cosA;

      // Above reveal band, dots press flat onto photo plane (z -> 0)
      if (rev > 0) {
        nz = lerp(nz, 0, rev);
      }

      posArr[idx] = nx + drift;
      posArr[idx + 1] = ny + driftY;
      posArr[idx + 2] = nz;
    }
    geo.attributes.position.needsUpdate = true;

    // Cursor light
    if (cursorLightRef.current) {
      cursorLightRef.current.position.x = mx * 3.5;
      cursorLightRef.current.position.y = my * 2.5 + 1.2;
      cursorLightRef.current.position.z = 2.4;
      cursorLightRef.current.intensity = isFrozen ? 0.05 : 0.9;
    }

    // Material opacity fades completely to 0 on full reveal
    if (materialRef.current) {
      materialRef.current.opacity = Math.max(0.0, 0.88 * (1 - rev * 1.05));
    }
  });

  if (!dotData) return null;

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 5, 4]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-4, 2, -2]} intensity={0.9} color="#dc143c" />
      <pointLight ref={cursorLightRef} distance={7} color="#ff3355" intensity={0.85} />

      <Points ref={pointsRef} positions={dotData.initialPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          ref={materialRef}
          transparent
          color={new THREE.Color(0.64, 0.035, 0.055)}
          size={0.032}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.88}
        />
      </Points>
    </>
  );
}

/* ═════════════════════════════════════════════════
   Faint Drifting Dust Particles
   ═════════════════════════════════════════════════ */
function DustParticles({ count = 350, revealed }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const posArr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += delta * 0.05;
      if (posArr[i * 3 + 1] > 6) posArr[i * 3 + 1] = -6;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y += delta * 0.006;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={revealed ? 0.03 : 0.15}
      />
    </Points>
  );
}

/* ═════════════════════════════════════════════════
   Exported ParticleField Component
   ═════════════════════════════════════════════════ */
export default function ParticleField({
  canvasRef,
  revealed = false,
  onToggleReveal,
}) {
  const mouse = useRef({ x: 0, y: 0 });
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [revealProgress, setRevealProgress] = useState(0);
  const [dotData, setDotData] = useState(null);
  const hasMounted = useRef(false);

  const handlePointerMove = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  // Fetch dots.bin with real download percentage
  useEffect(() => {
    let canceled = false;
    async function fetchDots() {
      try {
        const dotUrl = `${import.meta.env.BASE_URL || './'}dots.bin`;
        let response = await fetch(dotUrl).catch(() => null);
        if (!response || !response.ok) {
          response = await fetch('/dots.bin');
        }
        const contentLength = +(response.headers.get('Content-Length') || 2500000);
        const reader = response.body.getReader();
        let receivedLength = 0;
        const chunks = [];

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          receivedLength += value.length;
          const percent = Math.min(100, Math.floor((receivedLength / contentLength) * 100));
          if (!canceled) setDownloadProgress(percent);
        }

        // Combine chunks
        const allBytes = new Uint8Array(receivedLength);
        let pos = 0;
        for (const chunk of chunks) {
          allBytes.set(chunk, pos);
          pos += chunk.length;
        }

        // Parse Float32Array from dots.bin
        const floatView = new Float32Array(allBytes.buffer);
        const totalDots = Math.floor(floatView.length / 8);
        const MAX_RENDER_DOTS = Math.min(35000, totalDots);
        const step = Math.max(1, Math.floor(totalDots / MAX_RENDER_DOTS));

        const renderCount = Math.floor(totalDots / step);
        const targetPositions = new Float32Array(renderCount * 3);
        const ringPositions = new Float32Array(renderCount * 3);
        const initialPositions = new Float32Array(renderCount * 3);

        let outIdx = 0;
        for (let i = 0; i < totalDots && outIdx < renderCount; i += step) {
          const offset = i * 8;
          const tx = floatView[offset];
          const ty = floatView[offset + 1];
          const tz = floatView[offset + 2];

          targetPositions[outIdx * 3] = tx;
          targetPositions[outIdx * 3 + 1] = ty;
          targetPositions[outIdx * 3 + 2] = tz;

          // Ring layout at start
          const angle = Math.random() * Math.PI * 2;
          const r = 2.1 + (Math.random() - 0.5) * 0.35;
          const rx = Math.cos(angle) * r;
          const ry = Math.sin(angle) * r;
          const rz = (Math.random() - 0.5) * 0.4;

          ringPositions[outIdx * 3] = rx;
          ringPositions[outIdx * 3 + 1] = ry;
          ringPositions[outIdx * 3 + 2] = rz;

          initialPositions[outIdx * 3] = rx;
          initialPositions[outIdx * 3 + 1] = ry;
          initialPositions[outIdx * 3 + 2] = rz;

          outIdx++;
        }

        if (!canceled) {
          setDotData({
            count: renderCount,
            targetPositions,
            ringPositions,
            initialPositions,
          });
          setDownloadProgress(100);
          setTimeout(() => setIsLoaded(true), 400);
        }
      } catch (err) {
        console.error('Failed to load dots.bin, using fallback:', err);
        setDownloadProgress(100);
        setTimeout(() => setIsLoaded(true), 400);
      }
    }

    fetchDots();
    return () => {
      canceled = true;
    };
  }, []);

  // 3.6-second reveal band sweep
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      if (!revealed) {
        setRevealProgress(0);
        return;
      }
    }

    let startTime = null;
    let animId = null;
    const duration = 3600;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setRevealProgress(revealed ? eased : 1 - eased);

      if (t < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [revealed]);

  return (
    <div className={`particle-field-container ${revealed ? 'revealed' : ''}`} onPointerMove={handlePointerMove}>
      {/* ── Preloader: Dark red ring with real download percentage ── */}
      {!isLoaded && (
        <div className="preloader-overlay">
          <div className="preloader-ring">
            <svg viewBox="0 0 100 100">
              <circle className="preloader-ring__bg" cx="50" cy="50" r="42" />
              <circle
                className="preloader-ring__bar"
                cx="50"
                cy="50"
                r="42"
                style={{
                  strokeDashoffset: 264 - (264 * downloadProgress) / 100,
                }}
              />
            </svg>
            <div className="preloader-ring__text">{downloadProgress}%</div>
          </div>
          <p className="preloader-label">INITIALIZING 3D DOT SCULPTURE...</p>
        </div>
      )}

      {/* ── Layer 1: Watermark behind bust ── */}
      <div className={`particle-field__watermark ${revealed ? 'crimson-banner' : ''}`} aria-hidden="true">
        DEVELOPER
      </div>

      {/* ── Layer 2: Real Studio Portrait Photo Layer ── */}
      <div
        className={`portrait-photo-layer ${revealed ? 'active' : ''}`}
        style={{
          opacity: revealProgress > 0.01 ? 1 : 0,
          clipPath: revealProgress >= 1
            ? 'none'
            : `polygon(0 0, 100% 0, 100% ${revealProgress * 105}%, 0 ${revealProgress * 105}%)`,
        }}
      >
        <img
          src={portraitImg}
          alt="Abhinash Panigrahi - Studio Portrait"
          className="portrait-photo-img"
        />
        {/* Circle grid mask that dissolves as reveal completes */}
        {revealProgress > 0 && revealProgress < 0.95 && (
          <div
            className="circle-grid-mask"
            style={{
              opacity: Math.sin(revealProgress * Math.PI) * 0.7,
              transform: `scale(${0.9 + revealProgress * 0.25})`,
            }}
          />
        )}
      </div>

      {/* ── Layer 3: Three.js WebGL Canvas with Transparent Background ── */}
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 5.8], fov: 52 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}
      >
        <SculptureParticles
          dotData={dotData}
          mouse={mouse}
          loaded={isLoaded}
          revealed={revealed}
          revealProgress={revealProgress}
        />
        <DustParticles revealed={revealed} />
      </Canvas>

      {/* ── Layer 4: Sweep Band Light Effect ── */}
      {revealProgress > 0 && revealProgress < 1 && (
        <div
          className="sweep-band"
          style={{
            top: `${revealProgress * 100}%`,
          }}
        />
      )}

      {/* ── Layer 5: Atmospheric Overlays ── */}
      <div className="particle-field__vignette" />
      <div className={`particle-field__sweep ${isLoaded ? 'swept' : ''}`} />
      <div className="particle-field__grain" />
    </div>
  );
}
