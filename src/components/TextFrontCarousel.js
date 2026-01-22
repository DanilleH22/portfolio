import React, { useEffect, useMemo, useRef, useState } from "react"


const PHRASES = [
  "Senior Data Analyst", 
  "Full-Stack Developer",
  "Design",
  "Build",
  "Animate",
  "Refine",
  "Ship",
  "Scale",
  "Evolve",
];

const VH_PER_STEP_DESKTOP = 140;
const VH_PER_STEP_MOBILE = 60;
const END_LAG_RATIO = 0.35;
const MAX_MOBILE_VH = 420;

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function StickyPhrases() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);

  const [progress, setProgress] = useState(0);

  /* ---------- viewport ---------- */
  const vhPx = window.innerHeight;
  const vwPx = window.innerWidth;
  const isMobile = vwPx < 768;

  const steps = PHRASES.length - 1;
  const vhPerStep = isMobile ? VH_PER_STEP_MOBILE : VH_PER_STEP_DESKTOP;

  const endLagVh = Math.round(vhPerStep * END_LAG_RATIO);

  const sectionVh = useMemo(() => {
    const base = Math.max(100, steps * vhPerStep);
    const total = base + endLagVh;
    return isMobile ? Math.min(total, MAX_MOBILE_VH) : total;
  }, [steps, vhPerStep, endLagVh, isMobile]);

  /* ---------- scroll logic ---------- */
  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = rect.height - vhPx;

      const scrolled = clamp(-rect.top, 0, scrollable);
      const p = scrollable > 0 ? scrolled / scrollable : 0;

      setProgress(p);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [vhPx]);

  /* ---------- phrase index ---------- */
  const index = Math.round(progress * steps);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: `${sectionVh}vh`,
      }}
    >
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {PHRASES.map((text, i) => {
            const active = i === index;

            return (
              <div
                key={text}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? "2.5rem" : "8rem",
                  fontWeight: 600,
                  opacity: active ? 1 : 0,
                  transform: active
                    ? "translateY(0px)"
                    : "translateY(40px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
