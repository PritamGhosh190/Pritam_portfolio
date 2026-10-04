import { useEffect, useRef, useState } from "react";

/* Tracks pointer position over the element and returns a CSS
   rotateX/rotateY pair, giving whatever it's applied to a real
   perspective tilt that follows the cursor and settles back to flat
   when the pointer leaves. */
export function usePointerTilt(maxDeg = 10) {
  const ref = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setRotation({ x: -py * maxDeg, y: px * maxDeg });
    };
    const handleLeave = () => setRotation({ x: 0, y: 0 });

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [maxDeg]);

  return [ref, rotation];
}
