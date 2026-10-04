import React from "react";
import { colors } from "../config";

export function SectionLabel({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm tracking-widest uppercase font-semibold"
      style={{ color: colors.coral }}
    >
      {children}
    </div>
  );
}

export function Chip({ children, accent }) {
  return (
    <span
      className="px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium"
      style={{
        border: `1px solid ${accent ? colors.coral : colors.border}`,
        color: accent ? colors.ink : colors.text,
        backgroundColor: accent ? colors.coral : "transparent",
      }}
    >
      {children}
    </span>
  );
}
