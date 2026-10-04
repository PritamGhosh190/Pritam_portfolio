import React from "react";
// Import your own image once ready:
// import heroImg from "../assets/hero.png";
import heroImg from "../assets/pritam.png";// Example local image import

export function HeroSection({ imageSrc }) {
  // Default placeholder image (transparent character illustration)
  const defaultImage = "https://cdni.iconscout.com/illustration/premium/thumb/male-developer-5597984-4668058.png";

  return (
    <div className="relative flex items-center justify-center w-full max-w-[480px] h-[480px] sm:h-[540px]">
      
      {/* 1. Warm Orange Radial Background Glow */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none opacity-60 blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(194, 65, 12, 0.7) 0%, rgba(124, 45, 18, 0.3) 45%, rgba(10, 12, 16, 0) 75%)"
        }}
      />

      {/* 2. Orange Gradient Ring */}
      <div 
        className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full pointer-events-none z-0"
        style={{
          background: "linear-gradient(135deg, rgba(249, 115, 22, 0.85) 0%, rgba(194, 65, 12, 0.6) 50%, rgba(124, 45, 18, 0.2) 100%)",
          padding: "16px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* 3. Outer Vector Brackets */}
      <div 
        className="absolute left-2 top-16 sm:left-4 sm:top-20 text-orange-500/40 text-4xl sm:text-5xl font-mono select-none pointer-events-none z-0"
        style={{
          filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.2))",
          transform: "rotate(-10deg)"
        }}
      >
        &lt;
      </div>

      <div 
        className="absolute right-2 bottom-12 sm:right-4 sm:bottom-16 text-orange-500/40 text-4xl sm:text-5xl font-mono select-none pointer-events-none z-0"
        style={{
          filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.2))",
          transform: "rotate(-10deg)"
        }}
      >
        &gt;
      </div>

      {/* 4. Overlapping Profile Photo */}
      <div className="relative z-10 w-full h-full flex items-end justify-center pb-2">
        <img 
          src={imageSrc || defaultImage} 
          alt="Developer Profile" 
          className="w-[280px] sm:w-[340px] max-h-[92%] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
        />
      </div>

    </div>
  );
}