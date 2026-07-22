"use client";

import { useState, useEffect, useRef, Suspense, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ============================================================
// 3D Character Model (procedural geometry)
// ============================================================

function CharacterModel({ state }: { state: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const headphoneBandRef = useRef<THREE.Mesh>(null);
  const leftCupRef = useRef<THREE.Mesh>(null);
  const rightCupRef = useRef<THREE.Mesh>(null);

  const blinkTimer = useRef(0);
  const talkTimer = useRef(0);
  const waveTimer = useRef(0);

  // Materials
  const hoodieMat = new THREE.MeshStandardMaterial({ color: "#1A1A2E", roughness: 0.8 });
  const skinMat = new THREE.MeshStandardMaterial({ color: "#F5C5A3", roughness: 0.6 });
  const eyeIrisMat = new THREE.MeshStandardMaterial({ color: "#2D2D2D" });
  const amberMat = new THREE.MeshStandardMaterial({ color: "#F59E0B", roughness: 0.4, metalness: 0.3 });
  const mouthMat = new THREE.MeshStandardMaterial({ color: "#4A2C1A" });
  const darkMat = new THREE.MeshStandardMaterial({ color: "#0D0D14" });

  useFrame((stateCtx, delta) => {
    if (!groupRef.current) return;

    // Pointer mouse tracking
    const mouseX = stateCtx.pointer.x;
    const mouseY = stateCtx.pointer.y;

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX * 0.35, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY * 0.25, 0.08);
    }

    // Idle float
    groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.08;

    // Blink
    blinkTimer.current += delta;
    const shouldBlink = blinkTimer.current > 3 + Math.random() * 2;
    if (shouldBlink && leftEyeRef.current && rightEyeRef.current) {
      leftEyeRef.current.scale.y = 0.1;
      rightEyeRef.current.scale.y = 0.1;
      blinkTimer.current = 0;
      setTimeout(() => {
        if (leftEyeRef.current) leftEyeRef.current.scale.y = 1;
        if (rightEyeRef.current) rightEyeRef.current.scale.y = 1;
      }, 150);
    }

    // Talking state
    if (state === "talking" && mouthRef.current) {
      talkTimer.current += delta;
      mouthRef.current.scale.y = 0.5 + Math.sin(talkTimer.current * 15) * 0.5;
    } else if (mouthRef.current) {
      mouthRef.current.scale.y = 1;
    }

    // Wave state
    if (state === "wave" && leftArmRef.current) {
      waveTimer.current += delta;
      leftArmRef.current.rotation.z = Math.sin(waveTimer.current * 4) * 0.7 + 0.8;
    } else if (leftArmRef.current) {
      leftArmRef.current.rotation.z = 0;
    }

    // Excited state
    if (state === "excited" && groupRef.current) {
      groupRef.current.position.y += Math.abs(Math.sin(Date.now() * 0.008)) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={1.1}>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 3, 4]} intensity={1} color="#F59E0B" />
      <pointLight position={[-2, 1, 3]} intensity={0.5} color="#818CF8" />

      {/* Body (hoodie) */}
      <mesh ref={bodyRef} position={[0, -0.6, 0]} material={hoodieMat}>
        <boxGeometry args={[0.8, 0.9, 0.5]} />
      </mesh>

      {/* Amber trim on hoodie */}
      <mesh position={[0, -0.16, 0.251]} material={amberMat}>
        <boxGeometry args={[0.3, 0.08, 0.01]} />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 0.35, 0]} material={skinMat}>
        <boxGeometry args={[0.55, 0.55, 0.5]} />
      </mesh>

      {/* Left Eye White */}
      <mesh position={[-0.12, 0.4, 0.26]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      {/* Left Eye Iris */}
      <mesh ref={leftEyeRef} position={[-0.12, 0.4, 0.32]} material={eyeIrisMat}>
        <sphereGeometry args={[0.04, 16, 16]} />
      </mesh>

      {/* Right Eye White */}
      <mesh position={[0.12, 0.4, 0.26]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      {/* Right Eye Iris */}
      <mesh ref={rightEyeRef} position={[0.12, 0.4, 0.32]} material={eyeIrisMat}>
        <sphereGeometry args={[0.04, 16, 16]} />
      </mesh>

      {/* Mouth */}
      <mesh ref={mouthRef} position={[0, 0.2, 0.26]} material={mouthMat}>
        <boxGeometry args={[0.15, 0.04, 0.02]} />
      </mesh>

      {/* Headphone band */}
      <mesh ref={headphoneBandRef} position={[0, 0.65, 0]} material={amberMat}>
        <torusGeometry args={[0.32, 0.03, 8, 24, Math.PI]} />
      </mesh>

      {/* Left ear cup */}
      <mesh ref={leftCupRef} position={[-0.33, 0.35, 0]} material={darkMat}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
      </mesh>

      {/* Right ear cup */}
      <mesh ref={rightCupRef} position={[0.33, 0.35, 0]} material={darkMat}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
      </mesh>

      {/* Left arm */}
      <mesh ref={leftArmRef} position={[-0.55, -0.5, 0]} material={hoodieMat}>
        <boxGeometry args={[0.2, 0.6, 0.3]} />
      </mesh>
      {/* Left cuff */}
      <mesh position={[-0.55, -0.78, 0]} material={amberMat}>
        <boxGeometry args={[0.21, 0.06, 0.31]} />
      </mesh>

      {/* Right arm */}
      <mesh ref={rightArmRef} position={[0.55, -0.5, 0]} material={hoodieMat}>
        <boxGeometry args={[0.2, 0.6, 0.3]} />
      </mesh>
      {/* Right cuff */}
      <mesh position={[0.55, -0.78, 0]} material={amberMat}>
        <boxGeometry args={[0.21, 0.06, 0.31]} />
      </mesh>
    </group>
  );
}

// ============================================================
// Speech Bubble with Typewriter
// ============================================================

function SpeechBubble({
  text,
  visible,
  onSelectPrompt,
}: {
  text: string;
  visible: boolean;
  onSelectPrompt: (promptText: string) => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timer = setTimeout(() => {
      if (!visible || !text) {
        setDisplayed("");
        setTyping(false);
        return;
      }

      setDisplayed("");
      setTyping(true);
      let i = 0;
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 600);
        }
      }, 35);
    }, 0);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [text, visible]);

  if (!visible) return null;

  return (
    <div
      className="absolute bottom-full right-0 mb-3 w-56 sm:w-64 max-w-[85vw] rounded-2xl rounded-br-sm border p-3.5 sm:p-4 text-xs leading-relaxed"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border-glow)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        boxShadow: "0 0 30px rgba(245,158,11,0.12), 0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <div>
        {displayed}
        {typing && (
          <span className="ml-0.5 inline-block animate-typewriter-cursor text-amber-400">|</span>
        )}
      </div>

      {/* Interactive Preset Prompts */}
      {!typing && (
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/10 pt-2.5">
          <button
            onClick={() => onSelectPrompt("Top project?")}
            className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-300 transition-colors hover:bg-amber-500 hover:text-black cursor-pointer"
          >
            🔥 Top Project?
          </button>
          <button
            onClick={() => onSelectPrompt("Hire Hari?")}
            className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[10px] text-indigo-300 transition-colors hover:bg-indigo-500 hover:text-white cursor-pointer"
          >
            💼 Available?
          </button>
          <button
            onClick={() => onSelectPrompt("AI Stack?")}
            className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300 transition-colors hover:bg-emerald-500 hover:text-black cursor-pointer"
          >
            🤖 AI Stack?
          </button>
          <button
            onClick={() => onSelectPrompt("World Record?")}
            className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 text-[10px] text-yellow-300 transition-colors hover:bg-yellow-500 hover:text-black cursor-pointer"
          >
            🏆 World Record?
          </button>
        </div>
      )}

      {/* Tail */}
      <div
        className="absolute -bottom-[10px] right-5"
        style={{
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "10px solid rgba(245,158,11,0.3)",
        }}
      />
    </div>
  );
}

// ============================================================
// Dialogue Script
// ============================================================

const dialogues: Record<string, string> = {
  hero: "Hey! I'm Hari's dev buddy. Scroll down and let me walk you through what he's built. 👋",
  about: "Born in Salem, TN. Graduated from KSRIET with a minor in IoT. Likes Tamil cinema and exploring tech!",
  skills: "That stack isn't just a list — he's shipped production apps with every one of those. Actually used.",
  techstack: "Every tool here has been battle-tested in real projects. From React to Redis.",
  projects: "These aren't tutorial clones. LegalBuddy AI has real users. Real stakes. Real impact.",
  experience: "Real internships, real code, real growth. Every experience shaped his approach.",
  timeline: "From first commit to research paper presentations — years of building and shipping.",
  education: "KSRIET grad with strong fundamentals in IT and a curiosity that never stops.",
  certifications: "Always learning, always certifying. Google Cloud, Infosys, and more.",
  achievements: "World record holder?! Yes, that's real. Plus awards and leadership roles.",
  "coding-profiles": "Find him online — he's active on GitHub and LinkedIn.",
  contact: "He's open to work and collabs. Drop a message — he responds fast! 🚀",
};

// ============================================================
// Main DevBuddy Component
// ============================================================

export function DevBuddy() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [charState, setCharState] = useState("wave");
  const [customText, setCustomText] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const bubbleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSelectPrompt = (prompt: string) => {
    setBubbleVisible(false);
    setCharState("excited");
    setTimeout(() => {
      if (prompt === "Top project?") {
        setCustomText("LegalBuddy AI is Hari's flagship! A conversational AI platform using RAG & FAISS vector search for Indian statutes.");
      } else if (prompt === "Hire Hari?") {
        setCustomText("Hari is open to Full Stack, AI & Mobile Developer roles! Reach out via the Contact form or Email below. 🚀");
      } else if (prompt === "AI Stack?") {
        setCustomText("Hari works with Retrieval-Augmented Generation (RAG), FAISS dense vector search, OpenRouter, Node, & Python!");
      } else if (prompt === "World Record?") {
        setCustomText("Hari is an Asian Book of World Records holder for TanMillets awareness campaign leadership! 🏆");
      }
      setCharState("talking");
      setBubbleVisible(true);
      setTimeout(() => setCharState("idle"), 3000);
    }, 300);
  };

  // Hydration-safe mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      if (typeof window !== "undefined") {
        const saved = sessionStorage.getItem("devbuddy_collapsed");
        if (saved === "true") setCollapsed(true);
      }
    }, 3200); // After preloader
    return () => clearTimeout(timer);
  }, []);

  // Section observer
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id || "hero");
          }
        });
      },
      { threshold: 0.4 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [mounted]);

  // Trigger dialogue on section change
  const triggerDialogue = useCallback(() => {
    setBubbleVisible(false);
    setCharState("idle");

    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);

    bubbleTimerRef.current = setTimeout(() => {
      setCharState("talking");
      setBubbleVisible(true);

      const textLen = (dialogues[activeSection] || "").length;
      const typeDuration = textLen * 40 + 600;

      setTimeout(() => {
        setCharState("idle");
      }, typeDuration);

      setTimeout(() => {
        setBubbleVisible(false);
      }, 8000);
    }, 500);
  }, [activeSection]);

  useEffect(() => {
    if (mounted && !collapsed) {
      const timer = setTimeout(() => {
        triggerDialogue();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [activeSection, mounted, collapsed, triggerDialogue]);

  // Initial wave
  useEffect(() => {
    if (mounted && !collapsed) {
      const timer = setTimeout(() => {
        setCharState("wave");
        setTimeout(() => {
          setCharState("talking");
          setBubbleVisible(true);
          const textLen = dialogues.hero.length;
          setTimeout(() => setCharState("idle"), textLen * 40 + 600);
          setTimeout(() => setBubbleVisible(false), 8000);
        }, 1200);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [mounted, collapsed]);

  const handleCollapse = () => {
    setCollapsed(true);
    sessionStorage.setItem("devbuddy_collapsed", "true");
  };

  const handleExpand = () => {
    setCollapsed(false);
    sessionStorage.setItem("devbuddy_collapsed", "false");
    setCharState("wave");
  };

  if (!mounted) return null;

  // Collapsed state — show small amber tab
  if (collapsed) {
    return (
      <button
        onClick={handleExpand}
        className="fixed bottom-6 right-6 z-[900] flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold transition-all hover:scale-110"
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--border-glow)",
          color: "var(--accent-amber)",
        }}
      >
        HP
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-[900]"
      style={{ width: 160, height: 220 }}
    >
      {/* Close button */}
      <button
        onClick={handleCollapse}
        className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full text-xs transition-all hover:scale-110"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border-dim)",
          color: "var(--text-muted)",
        }}
      >
        ×
      </button>

      {/* Speech bubble */}
      <SpeechBubble
        text={customText || dialogues[activeSection] || dialogues.hero}
        visible={bubbleVisible}
        onSelectPrompt={handleSelectPrompt}
      />

      {/* 3D Character */}
      <div className="h-full w-full rounded-2xl overflow-hidden" style={{ background: "transparent" }}>
        <Canvas
          camera={{ position: [0, 0, 3], fov: 35 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
        >
          <Suspense fallback={null}>
            <CharacterModel state={charState} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
