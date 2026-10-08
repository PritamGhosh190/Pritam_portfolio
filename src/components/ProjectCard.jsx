import React from "react";
import { ArrowUpRight, Download, Star } from "lucide-react";
import { colors } from "../config";
import { usePointerTilt } from "../hooks/usePointerTilt";

function PhoneFrame({ project }) {
  return (
    <div className="relative w-full" style={{ transform: "translateZ(18px)" }}>
      <div className="relative mx-auto w-[54%]">
        <div
          className="relative rounded-[1.9rem] p-[7px]"
          style={{
            backgroundColor: "#07080c",
            border: `1px solid ${colors.border}`,
          }}
        >
          <div
            className="absolute top-[7px] left-1/2 -translate-x-1/2 w-9 h-3 rounded-full z-10"
            style={{ backgroundColor: "#07080c", marginTop: "7px" }}
          />
          <div
            className="rounded-[1.4rem] overflow-hidden"
            style={{ aspectRatio: "9 / 19.5" }}
          >
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      <>
        {project.downloads && (
          <div
            className="floating-metric absolute left-0 top-[38%] flex items-center gap-1.5 rounded-xl px-2 py-2 shadow-lg backdrop-blur-md"
            style={{
              backgroundColor: `${colors.panel}EE`,
              border: `1px solid ${colors.border}`,
              color: colors.text,
            }}
          >
            <Download size={14} style={{ color: colors.coral }} />
            <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">
              {project.downloads} downloads
            </span>
          </div>
        )}

        {project.rating && (
          <div
            className="floating-metric floating-metric-delayed absolute right-0 top-[61%] flex items-center gap-1.5 rounded-xl px-2 py-2 shadow-lg backdrop-blur-md"
            style={{
              backgroundColor: `${colors.panel}EE`,
              border: `1px solid ${colors.border}`,
              color: colors.text,
            }}
          >
            <Star
              size={14}
              fill={colors.coral}
              style={{ color: colors.coral }}
            />

            <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">
              {project.rating} rating
            </span>
          </div>
        )}
      </>
    </div>
  );
}

function BrowserFrame({ project }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${colors.border}`,
        transform: "translateZ(18px)",
      }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ backgroundColor: "#07080c" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span
          className="ml-2 px-2.5 py-0.5 rounded text-[10px] truncate"
          style={{ backgroundColor: colors.panelAlt, color: colors.muted }}
        >
          {project.link}
        </span>
      </div>
      <div style={{ aspectRatio: "16 / 10" }}>
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export function ProjectCard({ project, variant, onOpen }) {
  const [ref, rotation] = usePointerTilt(7);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(project)}
      className="group text-left rounded-2xl p-4 w-full"
      style={{
        backgroundColor: colors.panel,
        border: `1px solid ${colors.border}`,
        perspective: 900,
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* device frame — pops forward in Z, carries its own drop shadow + hover glow */}
        <div
          className="relative rounded-2xl transition-shadow duration-300"
          style={{ backfaceVisibility: "hidden" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = `drop-shadow(0 18px 34px ${colors.coralGlow})`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "none";
          }}
        >
          {variant === "phone" ? (
            <PhoneFrame project={project} />
          ) : (
            <BrowserFrame project={project} />
          )}

          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
            style={{ backgroundColor: `${colors.ink}99` }}
          >
            <span
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: colors.coral,
                color: colors.ink,
                transform: "translateZ(30px)",
              }}
            >
              View project <ArrowUpRight size={13} />
            </span>
          </div>
        </div>

        <div className="pt-4" style={{ transform: "translateZ(10px)" }}>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold" style={{ color: colors.text }}>
              {project.name}
            </h3>
            <span
              className="text-[11px] px-2 py-0.5 rounded-full font-medium"
              style={{ color: colors.coral, backgroundColor: colors.coralSoft }}
            >
              {project.year}
            </span>
          </div>
          <p className="text-sm mt-1.5" style={{ color: colors.muted }}>
            {project.tagline}
          </p>
        </div>
      </div>
    </button>
  );
}
