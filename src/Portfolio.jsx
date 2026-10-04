import React, { useState, useEffect } from "react";
import { colors, sansFont } from "./config";
import { GlobalStyles } from "./GlobalStyles";
import { Sidebar } from "./components/Sidebar";
import { ResumeDrawer } from "./components/ResumeDrawer";
import { ProjectModal } from "./components/ProjectModal";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { MobileApps } from "./sections/MobileApps";
import { WebApps } from "./sections/WebApps";
import { Contact } from "./sections/Contact";

export default function Portfolio() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [modal, setModal] = useState(null); // { project, variant }

  useEffect(() => {
    document.body.style.overflow = resumeOpen || modal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [resumeOpen, modal]);

  return (
    <div
      style={{
        backgroundColor: colors.ink,
        color: colors.text,
        fontFamily: sansFont,
      }}
      className="relative min-h-screen overflow-hidden"
    >
      <GlobalStyles />

      {/* --- Glass Background Structure --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft coral ambient glow, echoing the hero portrait ring */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 bg-[#FF5B45]" />
        <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] rounded-full blur-[130px] opacity-10 bg-[#FF5B45]" />

        {/* Frosted glass overlay layer */}
        <div className="absolute inset-0 backdrop-blur-[100px]" style={{ backgroundColor: `${colors.ink}CC` }} />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Sidebar />

        <main className="pt-16">
          <Home onResumeClick={() => setResumeOpen(true)} />
          <About />
          <MobileApps onOpenProject={setModal} />
          <WebApps onOpenProject={setModal} />
          <Contact />
        </main>

        <ResumeDrawer open={resumeOpen} onClose={() => setResumeOpen(false)} />
        <ProjectModal
          project={modal?.project}
          variant={modal?.variant}
          onClose={() => setModal(null)}
        />
      </div>
    </div>
  );
}