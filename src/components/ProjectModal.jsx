import React from "react";
import { X, ArrowUpRight } from "lucide-react";
import { colors } from "../config";
import { Chip } from "./UIBits";

export function ProjectModal({ project, variant, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5,8,15,0.75)", backdropFilter: "blur(3px)"}}
        onClick={onClose}
      />
      <div
        className="modal-pop relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        style={{ backgroundColor: colors.panel, border: `1px solid ${colors.border}` }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-lg z-10"
          style={{ backgroundColor: colors.panelAlt, color: colors.muted }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex justify-center">
          {variant === "phone" ? (
            <div
              className="device-flicker relative rounded-3xl p-3"
              style={{ backgroundColor: "#050810", width: "230px", border: `6px solid #050810`, boxShadow: `0 0 0 2px ${colors.border}` }}
            >
              <div
                className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full z-10"
                style={{ backgroundColor: "#050810", marginTop: "7px" }}
              />
              <img
                src={project.image}
                alt={`${project.name} app screenshot`}
                className="w-full rounded-2xl"
                style={{ aspectRatio: "9 / 16", objectFit: "cover" }}
              />
            </div>
          ) : (
            <div
              className="device-flicker w-full rounded-xl overflow-hidden"
              style={{ border: `1px solid ${colors.border}` }}
            >
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{ backgroundColor: "#050810" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span
                  className="ml-3 px-2.5 py-0.5 rounded text-xs truncate"
                  style={{ backgroundColor: colors.panelAlt, color: colors.muted }}
                >
                  {project.link}
                </span>
              </div>
              <img
                src={project.image}
                alt={`${project.name} website screenshot`}
                className="w-full"
                style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
              />
            </div>
          )}
        </div>

        <div>
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: colors.coral }}
          >
            {variant === "phone" ? "Mobile app" : "Web app"} · {project.year}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold mt-2" style={{ color: colors.text }}>
            {project.name}
          </h3>
          <p className="mt-1 text-sm" style={{ color: colors.text }}>
            {project.tagline}
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: colors.muted }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <a
            href={project.link.startsWith("http") ? project.link : "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-lg text-sm font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: colors.coral, color: colors.ink }}
          >
            View live <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
