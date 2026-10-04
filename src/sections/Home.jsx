import React, { Suspense, lazy } from "react";
import { Code2, Smartphone } from "lucide-react";
import heroImg from "../assets/nhero.png";
import { CONFIG, colors } from "../config";
import { usePointerTilt } from "../hooks/usePointerTilt";

// Code-split three.js/@react-three-fiber out of the main bundle so the
// hero text and buttons paint immediately; the 3D layer pops in once its
// chunk loads a moment later.
const HeroCanvas = lazy(() => import("../components/HeroCanvas"));

/* Static array — drives the auto-scrolling skills marquee.
   Add / remove / reorder entries here and the strip updates itself. */
const SKILLS = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Node.js",
  "React",
  "Git",
  "GitHub",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
];

function SkillsMarquee({ skills = SKILLS, speedSeconds = 24 }) {
  // duplicate the array once so the CSS translate(-50%) loop is seamless
  const track = [...skills, ...skills];

  return (
    <div
      style={{
        width: "100%",
        background: colors.panel,
        borderTop: `1px solid ${colors.border}`,
        overflow: "hidden",
        padding: "16px 0",
      }}
    >
      <style>{`
        @keyframes skillsScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .skills-track {
          display: flex;
          width: max-content;
          animation: skillsScroll ${speedSeconds}s linear infinite;
        }
        .skills-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="skills-track">
        {track.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            className="flex items-center shrink-0 px-4 sm:px-7 text-xs sm:text-sm font-medium whitespace-nowrap"
            style={{ letterSpacing: 0.2, color: colors.muted }}
          >
            {skill}
            <span
              aria-hidden="true"
              className="ml-4 sm:ml-7"
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: colors.coral,
                opacity: 0.6,
                display: "inline-block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const PHOTO_SRC = heroImg;

function FloatingBadge({ icon: Icon, value, label, style }) {
  return (
    <div
      className="absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl backdrop-blur-md"
      style={{
        backgroundColor: `${colors.panel}E6`,
        border: `1px solid ${colors.border}`,
        boxShadow: "0 12px 28px -8px rgba(0,0,0,0.55)",
        ...style,
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: colors.coralSoft }}
      >
        <Icon size={16} color={colors.coral} strokeWidth={2} />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-bold" style={{ color: colors.text }}>
          {value}
        </div>
        <div className="text-[11px]" style={{ color: colors.muted }}>
          {label}
        </div>
      </div>
    </div>
  );
}

function TiltPortrait() {
  const [ref, rotation] = usePointerTilt(9);

  return (
    <div
      ref={ref}
      className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[420px] md:w-[520px] md:h-[480px]"
      style={{ perspective: 1200 }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* lit, rotating 3D rings + dust — real WebGL lighting, not a flat circle */}
        <div
          className="absolute inset-0"
          style={{ transform: "translateZ(0px)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <Suspense fallback={null}>
            <HeroCanvas className="absolute inset-0" />
          </Suspense>
        </div>

        {/* soft color bleed behind the rings for extra glow punch */}
        <div
          className="absolute rounded-full inset-0"
          style={{
            background: `radial-gradient(circle, ${colors.coralGlow} 0%, transparent 65%)`,
            filter: "blur(20px)",
            opacity: 0.5,
            transform: "translateZ(-30px)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />

        {/* portrait — crisp alpha-cutout photo, shown in full (not cropped), popped forward in Z for depth */}
        <div
          className="absolute left-1/2 top-1/2 w-[80%] aspect-square overflow-hidden rounded-full flex items-center justify-center"
          style={{
            transform: "translate(-50%, -50%) translateZ(26px)",
            border: `1px solid ${colors.border}`,
            boxShadow: `0 0 0 1px rgba(255,255,255,0.03), 0 25px 60px -15px rgba(0,0,0,0.65), 0 0 40px -6px ${colors.coralGlow}`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {PHOTO_SRC ? (
            <img
              src={PHOTO_SRC}
              alt={CONFIG.name}
              className="w-full h-full object-contain block"
              style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
            />
          ) : (
            <svg width="100%" height="100%" viewBox="0 0 260 400" preserveAspectRatio="xMidYMid meet">
              <circle cx="130" cy="120" r="58" fill="#1B1E28" stroke={colors.coral} strokeWidth="2" />
              <path
                d="M20 400 C20 280 70 235 130 235 C190 235 240 280 240 400 Z"
                fill="#1B1E28"
                stroke={colors.coral}
                strokeWidth="2"
              />
            </svg>
          )}
        </div>

        {/* floating glass badges, popped furthest forward for a layered-depth feel */}
        <FloatingBadge
          icon={Code2}
          value={CONFIG.stats[0]?.value}
          label={CONFIG.stats[0]?.label}
          style={{
            top: "6%",
            left: "-8%",
            transform: "translateZ(55px) rotate(-4deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
        <FloatingBadge
          icon={Smartphone}
          value={CONFIG.stats[1]?.value}
          label={CONFIG.stats[1]?.label}
          style={{
            bottom: "8%",
            right: "-10%",
            transform: "translateZ(55px) rotate(3deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
      </div>
    </div>
  );
}

export function Home({ onResumeClick }) {
  const firstName = CONFIG.name.split(" ")[0];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" style={{ background: colors.ink }} className="flex flex-col">
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-between gap-16 md:gap-10 px-5 sm:px-10 md:px-16 py-20 md:py-28 max-w-[1320px] mx-auto w-full pt-28 md:pt-32">
        {/* Left: intro copy */}
        <div className="max-w-[560px] text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight m-0" style={{ color: colors.text }}>
            Hello
            <span style={{ color: colors.coral }}>.</span>
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-3.5 my-4 sm:my-5">
            <span className="w-9 h-0.5 hidden sm:inline-block" style={{ background: colors.coral }} />
            <span className="text-lg sm:text-xl md:text-2xl" style={{ color: colors.muted }}>
              I'm {firstName}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.text }}>
            {CONFIG.title}
          </h2>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <button
              type="button"
              onClick={scrollToContact}
              className="px-6 py-3.5 rounded-md border-none text-sm font-semibold cursor-pointer transition-transform hover:scale-105"
              style={{ background: colors.coral, color: colors.ink }}
            >
              Got a project?
            </button>
            <button
              type="button"
              onClick={onResumeClick}
              className="px-6 py-3.5 rounded-md bg-transparent text-sm font-semibold cursor-pointer transition-transform hover:scale-105"
              style={{ color: colors.text, border: `1.5px solid ${colors.coral}` }}
            >
              My resume
            </button>
          </div>
        </div>

        {/* Right: 3D tilt portrait card */}
        <TiltPortrait />
      </div>

      {/* Bottom: static-array-driven horizontal auto-scroll */}
      <SkillsMarquee skills={SKILLS} speedSeconds={24} />
    </section>
  );
}

export default Home;
