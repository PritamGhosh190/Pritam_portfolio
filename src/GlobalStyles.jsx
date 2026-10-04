import React from "react";
import { colors } from "./config";

export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
      html { scroll-behavior: smooth; }
      ::selection { background: ${colors.coral}; color: ${colors.ink}; }
      ::-webkit-scrollbar { width: 10px; height: 10px; }
      ::-webkit-scrollbar-track { background: ${colors.ink}; }
      ::-webkit-scrollbar-thumb { background: ${colors.border}; border-radius: 6px; }
      *:focus-visible { outline: 2px solid ${colors.coral}; outline-offset: 2px; }

      @keyframes blinkCaret { 0%, 55% { opacity: 1 } 56%, 100% { opacity: 0 } }
      .type-cursor { animation: blinkCaret 1s step-end infinite; }

      @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
      .resume-drawer { animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

      @keyframes scaleIn { from { opacity: 0; transform: scale(0.92) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      .modal-pop { animation: scaleIn 0.3s ease forwards; }

      @keyframes powerFlicker { 0% { opacity: 0; } 12% { opacity: 1; } 18% { opacity: 0.25; } 26% { opacity: 1; } 100% { opacity: 1; } }
      .device-flicker { animation: powerFlicker 0.7s ease; }

      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      .pdf-fade-in { animation: fadeIn 0.4s ease forwards; }

      @keyframes barLoad { 0% { width: 10%; } 50% { width: 75%; } 100% { width: 95%; } }
      .loading-bar { animation: barLoad 0.75s ease forwards; }

      @keyframes dots { 0% { content: ""; } }
      .loading-dots::after { content: ''; animation: dotsAnim 1.2s steps(4, end) infinite; }
      @keyframes dotsAnim { 0% { content: ''; } 25% { content: '.'; } 50% { content: '..'; } 75% { content: '...'; } 100% { content: ''; } }

      @media (prefers-reduced-motion: reduce) {
        .resume-drawer, .modal-pop, .device-flicker, .pdf-fade-in, .loading-bar, .type-cursor, .loading-dots::after {
          animation: none !important;
        }
      }
    `}</style>
  );
}
