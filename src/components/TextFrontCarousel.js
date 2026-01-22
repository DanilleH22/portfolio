import React, { useEffect, useMemo, useRef, useState } from "react"
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion"

/* ---------- Throttle helper ---------- */
function throttle(func, limit) {
  let inThrottle = false
  let lastArgs = null

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
        if (lastArgs) {
          func.apply(this, lastArgs)
          lastArgs = null
        }
      }, limit)
    } else {
      lastArgs = args
    }
  }
}

export default function TextFrontCarousel({
  phrases = [
    "Senior Data Analyst",
    "Full-Stack Developer",
    "Insight",
    "Automation",
    "Systems",
    "Scale",
    "Impact",
  ],
  font,
  colors = { fg: "#ffffff", bg: "transparent" },
  fontSizes = { backFar: 3, backNear: 12, center: 20, exit: 100 },
  spacing = 1.4,
  stepYvh = 12,
  trail = 3,
  opacities = { backMax: 0.22, centerMax: 0.9, frontFadeScale: 0.2 },
  crossFadeWidth = 0.24,
  windowFwd = 2,
  fadeExp = 1.2,
  letterSpacingEm = -0.05,
  vhPerStep = 140,
  afterPaddingPx = 160,
  smooth = { stiffness: 120, damping: 26 },
}) {
  /* ---------- Viewport ---------- */
  const [vwPx, setVwPx] = useState(window.innerWidth)
  const [vhPx, setVhPx] = useState(window.innerHeight)

  useEffect(() => {
    const onResize = () => {
      setVwPx(window.innerWidth)
      setVhPx(window.innerHeight)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  /* ---------- Font ---------- */
  const fontStyleObj = useMemo(() => {
    if (!font) return {}
    if (typeof font === "string") return { fontFamily: font }
    return font
  }, [font])

  /* ---------- Scroll math ---------- */
  const INIT_P = -2.6
  const END_LAG_RATIO = 1.35

  const pEnd = useMemo(
    () => (phrases.length - 1) * spacing + 1,
    [phrases.length, spacing]
  )

  const pSpan = pEnd - INIT_P
  const steps = Math.max(0, phrases.length - 1)
  const endLagVh = Math.round(vhPerStep * END_LAG_RATIO)

  const sectionVh = useMemo(() => {
    const base = Math.max(120, steps * vhPerStep)
    return base + endLagVh
  }, [steps, vhPerStep])

  const holdFrac = sectionVh > 0 ? endLagVh / sectionVh : 0
  const padPxAdj = Math.round(afterPaddingPx * (vhPx / 900))

  /* ---------- Refs ---------- */
  const sectionRef = useRef(null)
  const itemRefs = useRef([])
  const lastPRef = useRef(INIT_P)

  /* ---------- Motion ---------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const tSmooth = useSpring(scrollYProgress, {
    stiffness: smooth.stiffness,
    damping: smooth.damping,
    mass: 0.25,
  })

  /* ---------- Helpers ---------- */
  const clamp = (x, a, b) => Math.min(Math.max(x, a), b)
  const mix = (a, b, t) => a + (b - a) * t
  const vw2px = (vw) => (vw * vwPx) / 100
  const vh2px = (vh) => (vh * vhPx) / 100
  const opIn = (t) => Math.pow(clamp(t, 0, 1), fadeExp)
  const opOut = (t) => Math.pow(clamp(1 - t, 0, 1), fadeExp)
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
  const easeIn = (t) => t * t * t

  /* ---------- Render loop ---------- */
  const renderAtProgress = (pVal) => {
    const SAFE_PAD = 0.05
    const visibleThreshold = trail + windowFwd + SAFE_PAD + 2

    itemRefs.current.forEach((el, i) => {
      if (!el) return

      const pRaw = pVal - i * spacing

      if (Math.abs(pRaw) > visibleThreshold) {
        el.style.display = "none"
        return
      }

      el.style.display = "block"

      let sizeVW = fontSizes.backFar
      let yOffset = 0
      let opacity = 0
      let zIndex = 50 + i

      if (pRaw < 0) {
        const t = clamp((pRaw + trail) / trail, 0, 1)
        sizeVW = mix(fontSizes.backFar, fontSizes.backNear, t)
        yOffset = vh2px(stepYvh) * Math.pow(-pRaw, 0.95)
        opacity = opacities.backMax * opIn(t)
      } else if (pRaw <= 1) {
        const t = easeInOut(pRaw)
        sizeVW = mix(fontSizes.backNear, fontSizes.center, t)
        opacity = mix(0.35, opacities.centerMax, t)
        zIndex = 2000
      } else if (pRaw <= 2) {
        const t = clamp(pRaw - 1, 0, 1)
        sizeVW = mix(fontSizes.center, fontSizes.exit, easeIn(t))
        const fadeMix = clamp(t / crossFadeWidth, 0, 1)
        opacity = mix(
          opacities.centerMax,
          opacities.frontFadeScale * opOut(t),
          fadeMix * fadeMix * (3 - 2 * fadeMix)
        )
        zIndex = 1800
      } else {
        el.style.display = "none"
        return
      }

      el.style.setProperty("--size", `${vw2px(sizeVW)}px`)
      el.style.setProperty("--y", `${yOffset}px`)
      el.style.setProperty("--opacity", Math.max(0.001, opacity))
      el.style.setProperty("--z", zIndex)
    })
  }

  const throttledRender = useRef(
    throttle((p) => requestAnimationFrame(() => renderAtProgress(p)), 16)
  )

  /* ---------- Scroll subscription ---------- */
  useMotionValueEvent(tSmooth, "change", (t) => {
    let pVal
    if (holdFrac > 0 && t >= 1 - holdFrac) {
      pVal = pEnd
    } else {
      const tAdj = holdFrac > 0 ? t / (1 - holdFrac) : t
      pVal = clamp(INIT_P + tAdj * pSpan, INIT_P, pEnd)
    }
    lastPRef.current = pVal
    throttledRender.current(pVal)
  })

  useEffect(() => renderAtProgress(INIT_P), [])

  /* ---------- Render ---------- */
  return (
    <>
      <div
        ref={sectionRef}
        style={{
          position: "relative",
          width: "100%",
          height: `${sectionVh}vh`,
          background: colors.bg,
          color: colors.fg,
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "grid",
            placeItems: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%", ...fontStyleObj }}>
            {phrases.map((text, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className="phrase"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .phrase {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) translateY(var(--y, 0));
          font-size: var(--size, 16px);
          opacity: var(--opacity, 0);
          z-index: var(--z, 50);
          white-space: nowrap;
          line-height: 1;
          pointer-events: none;
          letter-spacing: ${letterSpacingEm}em;
          will-change: transform, opacity;
        }
      `}</style>

      {padPxAdj > 0 && (
        <div aria-hidden style={{ height: `${padPxAdj}px` }} />
      )}
    </>
  )
}

