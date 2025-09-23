"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,         // how smoothness interpolates
        duration: 0.4,     // how long scroll transitions take
        smoothWheel: true,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
