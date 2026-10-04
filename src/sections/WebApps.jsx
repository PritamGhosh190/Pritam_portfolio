import React from "react";
import { WEB_PROJECTS, colors } from "../config";
import { SectionLabel } from "../components/UIBits";
import { Reveal } from "../components/Reveal";
import { ProjectCard } from "../components/ProjectCard";

export function WebApps({ onOpenProject }) {
  return (
    <section id="web-apps" className="px-6 sm:px-10 md:px-16 py-24" style={{ borderTop: `1px solid ${colors.border}` }}>
      <Reveal>
        <SectionLabel>Web apps</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: colors.text }}>
          React &amp; Next.js apps
        </h2>
        <p className="mt-3 max-w-2xl" style={{ color: colors.muted }}>
          Tap a screenshot to open it inside a browser frame with the full write-up alongside it.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {WEB_PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProjectCard
              project={p}
              variant="browser"
              onOpen={(project) => onOpenProject({ project, variant: "browser" })}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
