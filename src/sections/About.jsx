import React from "react";
import { Code2, Smartphone, Server } from "lucide-react";
import { CONFIG, colors } from "../config";
import { Reveal } from "../components/Reveal";

const SERVICES = [
  { icon: Code2, label: "Website Development" },
  { icon: Smartphone, label: "App Development" },
  { icon: Server, label: "Website Hosting" },
];

function ServiceList() {
  return (
    <div className="relative flex flex-col gap-8 sm:gap-10 py-2">
      <div
        className="absolute left-[27px] sm:left-[31px] top-10 bottom-10 w-px"
        style={{ background: colors.border }}
        aria-hidden="true"
      />
      {SERVICES.map(({ icon: Icon, label }, i) => (
        <div key={label} className="relative flex items-center gap-4 sm:gap-5 z-10">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: colors.panel, border: `1px solid ${colors.border}` }}
          >
            <Icon size={24} color={colors.coral} strokeWidth={1.75} />
          </div>
          <span className="font-semibold text-base sm:text-lg" style={{ color: colors.text }}>
            {label}
          </span>
          {i < SERVICES.length - 1 && (
            <span
              className="absolute rounded-full"
              style={{ left: "25px", bottom: "-1.25rem", width: 6, height: 6, background: colors.coral }}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* Splits "120+" -> ["120", "+"] and "95%" -> ["95", "%"] so the trailing
   symbol can be colored coral like the reference stat row. */
function Stat({ value, label }) {
  const match = /^([\d.,]+)\s*(.*)$/.exec(value);
  const number = match ? match[1] : value;
  const symbol = match ? match[2] : "";

  return (
    <div>
      <div className="text-2xl sm:text-3xl font-extrabold" style={{ color: colors.text }}>
        {number}
        {symbol && <span style={{ color: colors.coral }}> {symbol}</span>}
      </div>
      <div className="text-xs sm:text-sm mt-1" style={{ color: colors.muted }}>
        {label}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="px-6 sm:px-10 md:px-16 py-24" style={{ borderTop: `1px solid ${colors.border}` }}>
      <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
        <Reveal>
          <ServiceList />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: colors.text }}>
            About me
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: colors.muted }}>
            {CONFIG.bio} Based in {CONFIG.location}.
          </p>

          <div className="flex flex-wrap gap-8 sm:gap-12 mt-10">
            {CONFIG.stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
