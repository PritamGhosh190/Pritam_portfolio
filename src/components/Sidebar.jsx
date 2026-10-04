import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONFIG, NAV_ITEMS, colors } from "../config";

export function Sidebar() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ backgroundColor: colors.ink, borderBottom: `1px solid ${colors.border}` }}
    >
      <div className="h-16 flex items-center justify-between px-5 sm:px-10 md:px-16 max-w-[1200px] mx-auto">
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="text-base sm:text-lg font-bold tracking-tight shrink-0"
          style={{ color: colors.text }}
        >
          {CONFIG.name}
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeTab === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleNavClick(id)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? colors.coral : colors.muted }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = colors.coral;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = colors.muted;
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex md:hidden items-center justify-center w-9 h-9 rounded-md border"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: colors.text }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? 300 : 0,
          backgroundColor: colors.ink,
          borderBottom: menuOpen ? `1px solid ${colors.border}` : "none",
        }}
      >
        <nav className="flex flex-col px-5 py-3 gap-1">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeTab === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleNavClick(id)}
                className="text-sm font-medium py-2.5"
                style={{ color: isActive ? colors.coral : colors.muted }}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
