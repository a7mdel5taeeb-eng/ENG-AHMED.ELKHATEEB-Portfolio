"use client"

import * as React from "react"
import Lenis from "lenis"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { cn } from "@/lib/utils"

/** Inertial smooth scrolling on desktop pointers. Off for touch and reduced motion. */
export function SmoothScroll() {
  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduced) return
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      anchors: { offset: -88 },
      stopInertiaOnNavigate: true,
    })
    return () => lenis.destroy()
  }, [])
  return null
}

/**
 * Label that rolls up on hover: the text slides out and an identical copy
 * slides in from below. The parent needs the `group` class.
 */
export function RollText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("roll", className)}>
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  )
}

/** Counts up from zero once on screen (after the intro has lifted). */
export function CountUp({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [n, setN] = React.useState(value)

  React.useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setN(0)
    let raf = 0
    let timer: ReturnType<typeof setTimeout> | undefined
    const run = () => {
      let t0 = 0
      const step = (t: number) => {
        if (!t0) t0 = t
        const k = Math.min(1, (t - t0) / 1400)
        setN(Math.round(value * (1 - Math.pow(1 - k, 3))))
        if (k < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }
    const afterIntro = () => {
      if (document.documentElement.dataset.intro) timer = setTimeout(afterIntro, 120)
      else timer = setTimeout(run, delay * 1000)
    }
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) {
        io.disconnect()
        afterIntro()
      }
    })
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [value, delay])

  return (
    <span ref={ref} suppressHydrationWarning>
      {n}
      {suffix}
    </span>
  )
}

/** Moves its child slightly slower than the page for a sense of depth. */
export function Parallax({ children, className, amount = 8 }: { children: React.ReactNode; className?: string; amount?: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`])
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div className="absolute inset-x-0" style={{ top: `-${amount}%`, bottom: `-${amount}%`, y: reduced ? 0 : y }}>
        {children}
      </motion.div>
    </div>
  )
}
