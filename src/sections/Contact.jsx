import React from "react";
import { Mail } from "lucide-react";
import { CONFIG, colors } from "../config";
import { SectionLabel } from "../components/UIBits";
import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-10 md:px-16 py-24" style={{ borderTop: `1px solid ${colors.border}` }}>
      <Reveal>
        <div
          className="rounded-2xl p-8 sm:p-12"
          style={{ backgroundColor: colors.panel, border: `1px solid ${colors.border}` }}
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-2xl sm:text-4xl font-bold max-w-xl leading-tight" style={{ color: colors.text }}>
            Let's build something worth shipping.
          </h2>
          <p className="mt-4" style={{ color: colors.muted }}>
            Reach out any time — {CONFIG.email}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={`mailto:${CONFIG.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: colors.coral, color: colors.ink }}
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href={CONFIG.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium"
              style={{ border: `1px solid ${colors.border}`, color: colors.text }}
            >
              LinkedIn
            </a>
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium"
              style={{ border: `1px solid ${colors.border}`, color: colors.text }}
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>

      <p className="text-center text-xs mt-10" style={{ color: colors.muted }}>
        © {new Date().getFullYear()} {CONFIG.name} — built with React &amp; Tailwind CSS
      </p>
    </section>
  );
}
