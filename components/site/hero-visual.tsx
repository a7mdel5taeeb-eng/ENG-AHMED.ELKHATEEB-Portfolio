"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { hero, person } from "@/lib/content"
import { useLanguage } from "@/components/language-provider"

/* ─── Engraved ring: hairlines, ticks and a line of type around the circle ─── */

function EngravedRing({ className }: { className?: string }) {
  const id = React.useId().replace(/:/g, "")
  const ticks = Array.from({ length: 120 })
  const R = 172
  return (
    <svg viewBox="0 0 400 400" style={{ direction: "ltr" }} className={cn("pointer-events-none select-none text-foreground", className)} aria-hidden>
      <defs>
        <path id={`ring-${id}`} d={`M 200,200 m -${R},0 a ${R},${R} 0 1,1 ${R * 2},0 a ${R},${R} 0 1,1 -${R * 2},0`} />
      </defs>
      <circle cx="200" cy="200" r="198" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="0.75" />
      <circle cx="200" cy="200" r="161" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeWidth="0.75" />
      {ticks.map((_, i) => {
        const a = (i / ticks.length) * Math.PI * 2
        const long = i % 10 === 0
        const r1 = 198
        const r2 = long ? 186 : 192
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * r1}
            y1={200 + Math.sin(a) * r1}
            x2={200 + Math.cos(a) * r2}
            y2={200 + Math.sin(a) * r2}
            stroke="currentColor"
            strokeOpacity={long ? 0.45 : 0.18}
            strokeWidth="0.75"
          />
        )
      })}
      <text fill="currentColor" fillOpacity="0.55" direction="ltr" style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.32em", direction: "ltr", unicodeBidi: "bidi-override" }}>
        <textPath href={`#ring-${id}`} textLength={Math.round(2 * Math.PI * R) - 8} lengthAdjust="spacing">
          {hero.ring.en.repeat(2)}
        </textPath>
      </text>
    </svg>
  )
}

/* ─── Dot-matrix globe with network arcs from Saudi Arabia ─────────────────── */

/** Saudi Arabia (geographic centre) */
const HOME: [number, number] = [23.9, 45.1]
const NODES: [number, number][] = [
  [30.0, 31.2],
  [51.5, -0.1],
  [25.2, 55.3],
  [19.1, 72.9],
  [1.35, 103.8],
  [41.0, 28.9],
  [-1.3, 36.8],
  [48.9, 2.35],
  [35.7, 139.7],
  [40.7, -74.0],
]

type V3 = [number, number, number]
const toV = ([lat, lon]: [number, number]): V3 => {
  const la = (lat * Math.PI) / 180
  const lo = (lon * Math.PI) / 180
  return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)]
}
const slerp = (a: V3, b: V3, t: number): V3 => {
  const d = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]))
  const w = Math.acos(d)
  if (w < 1e-4) return a
  const s = Math.sin(w)
  const ka = Math.sin((1 - t) * w) / s
  const kb = Math.sin(t * w) / s
  return [a[0] * ka + b[0] * kb, a[1] * ka + b[1] * kb, a[2] * ka + b[2] * kb]
}

function DotGlobe({ className }: { className?: string }) {
  const ref = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Fibonacci sphere
    const N = 1300
    const pts: V3[] = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const th = golden * i
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r])
    }
    const home = toV(HOME)
    const arcs = NODES.map((n) => {
      const b = toV(n)
      return Array.from({ length: 48 }, (_, i) => {
        const t = i / 47
        const p = slerp(home, b, t)
        const lift = 1 + Math.sin(Math.PI * t) * 0.18
        return [p[0] * lift, p[1] * lift, p[2] * lift] as V3
      })
    })

    let ink = "17,17,17"
    const readInk = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--ink-rgb").trim()
      if (v) ink = v.split(/\s+/).join(",")
    }
    readInk()
    const mo = new MutationObserver(readInk)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    let size = 0
    let dpr = 1
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      size = canvas.clientWidth
      canvas.width = Math.round(size * dpr)
      canvas.height = Math.round(size * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const homeLon = (HOME[1] * Math.PI) / 180
    const tilt = 0.3
    const draw = (t: number) => {
      ctx.clearRect(0, 0, size, size)
      const R = size * 0.46
      const c = size / 2
      // keep Saudi Arabia facing the viewer, swaying gently either side
      const yaw = -homeLon + Math.sin(t * 0.16) * 0.9
      const cy = Math.cos(yaw)
      const sy = Math.sin(yaw)
      const ct = Math.cos(tilt)
      const st = Math.sin(tilt)
      const project = (p: V3): V3 => {
        const x = p[0] * cy + p[2] * sy
        const z0 = -p[0] * sy + p[2] * cy
        const y = p[1] * ct - z0 * st
        const z = p[1] * st + z0 * ct
        return [c + x * R, c - y * R, z]
      }
      const dot = Math.max(1.2, size / 300)
      for (const p of pts) {
        const [x, y, z] = project(p)
        const a = z < 0 ? 0.06 + (1 + z) * 0.05 : 0.18 + z * 0.55
        ctx.fillStyle = `rgba(${ink},${a.toFixed(3)})`
        ctx.fillRect(x - dot / 2, y - dot / 2, dot, dot)
      }
      // arcs + travelling pulses
      arcs.forEach((arc, ai) => {
        const pulse = (t * 0.22 + ai * 0.137) % 1
        arc.forEach((p, i) => {
          const [x, y, z] = project(p)
          if (z < -0.05) return
          const f = i / (arc.length - 1)
          const near = Math.max(0, 1 - Math.abs(f - pulse) * 9)
          const a = 0.18 + near * 0.75
          const s = dot * (0.9 + near * 0.9)
          ctx.fillStyle = near > 0.05 ? `rgba(232,145,58,${(0.25 + near * 0.7).toFixed(3)})` : `rgba(${ink},${(a * Math.min(1, z + 0.6)).toFixed(3)})`
          ctx.fillRect(x - s / 2, y - s / 2, s, s)
        })
        const [ex, ey, ez] = project(arc[arc.length - 1])
        if (ez > 0) {
          ctx.fillStyle = `rgba(${ink},0.7)`
          ctx.fillRect(ex - dot, ey - dot, dot * 2, dot * 2)
        }
      })
      // home marker with expanding ring
      const [hx, hy, hz] = project(home)
      if (hz > 0) {
        const k = (t * 0.6) % 1
        ctx.strokeStyle = `rgba(33,90,131,${(0.6 * (1 - k)).toFixed(3)})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(hx, hy, 4 + k * 22, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fillStyle = "rgba(33,90,131,1)"
        ctx.beginPath()
        ctx.arc(hx, hy, 3.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let raf = 0
    let visible = true
    const start = performance.now()
    const loop = (now: number) => {
      draw((now - start) / 1000)
      raf = requestAnimationFrame(loop)
    }
    if (reduced) draw(0)
    else raf = requestAnimationFrame(loop)
    const io = new IntersectionObserver(([e]) => {
      const v = !!e?.isIntersecting
      if (reduced || v === visible) return
      visible = v
      if (v) raf = requestAnimationFrame(loop)
      else cancelAnimationFrame(raf)
    })
    io.observe(canvas)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      mo.disconnect()
    }
  }, [])

  return <canvas ref={ref} className={cn("block aspect-square w-full", className)} aria-hidden />
}

/* ─── Composition ─────────────────────────────────────────────────────────── */

/** Current time in Saudi Arabia, rendered after mount only (no hydration mismatch). */
export function useSaudiTime() {
  const [time, setTime] = React.useState("")
  React.useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Riyadh" })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 15_000)
    return () => clearInterval(id)
  }, [])
  return time
}

function StatusBadge({ className, delay }: { className?: string; delay: number }) {
  const { l } = useLanguage()
  return (
    <div className={cn("hero-stagger absolute z-20 opacity-0", className)} style={{ animation: `fade-up 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards` }}>
      <div className="animate-float-soft flex items-center gap-2 rounded-full border border-border bg-background/85 px-3.5 py-2 text-xs shadow-[var(--shadow-lift)] backdrop-blur-md">
        <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
        {l(hero.badges.status)}
      </div>
    </div>
  )
}

function TimeBadge({ className, delay }: { className?: string; delay: number }) {
  const { l } = useLanguage()
  const time = useSaudiTime()
  return (
    <div className={cn("hero-stagger absolute z-20 opacity-0", className)} style={{ animation: `fade-up 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards` }}>
      <div className="animate-float-soft rounded-2xl border border-border bg-background/85 px-4 py-3 shadow-[var(--shadow-lift)] backdrop-blur-md [animation-delay:1.2s]">
        <p className="eyebrow !text-[10px]">{l(person.location)}</p>
        <p className="mt-1 font-mono text-xs" dir="ltr">
          {time ? `${time} · ` : ""}GMT+3
        </p>
      </div>
    </div>
  )
}

/** Portrait in an arched editorial frame, haloed by the rotating engraved ring. */
function PortraitVisual({ portrait, className }: { portrait: string; className?: string }) {
  const { l } = useLanguage()
  return (
    <div className={cn("relative mx-auto w-full max-w-[480px]", className)}>
      <div className="relative aspect-[4/5]">
        <div className="pointer-events-none absolute left-1/2 top-[-5%] aspect-square w-[112%] -translate-x-1/2">
          <EngravedRing className="animate-orb-rotate size-full" />
        </div>
        <figure className="absolute inset-x-[9%] bottom-0 top-[7%] isolate overflow-hidden [border-radius:50%_50%_2rem_2rem/35.3%_35.3%_2rem_2rem] bg-plate shadow-[0_50px_90px_-45px_rgb(0_0_0/0.55)]">
          <Image
            src={portrait}
            alt={`${l(person.name)} — ${l(person.role)}`}
            fill
            priority
            sizes="(min-width: 1024px) 400px, 82vw"
            className="hero-photo-img object-cover object-[50%_18%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.62)_0%,rgb(0_0_0/0.18)_30%,transparent_52%)]" />
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]" />
          <figcaption className="hero-stagger absolute inset-x-0 bottom-0 p-6 text-white opacity-0 sm:p-7" style={{ animation: "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) 1.25s forwards" }}>
            <span className="block font-display text-xl font-light tracking-tight sm:text-2xl">{l(person.name)}</span>
            <span className="mt-1.5 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/70">
              <span className="h-px w-5 bg-white/50" />
              {l(hero.caption)}
            </span>
          </figcaption>
          <div className="hero-photo-curtain pointer-events-none absolute inset-0 bg-plate" />
        </figure>
        <StatusBadge className="start-[-2%] top-[3%] sm:start-[-6%] sm:top-[22%]" delay={1.4} />
        <TimeBadge className="end-[-2%] top-[46%] sm:end-[-8%]" delay={1.55} />
      </div>
    </div>
  )
}

/** Fallback without a portrait: live dot globe inside the engraved ring. */
function GlobeVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[560px]", className)}>
      <EngravedRing className="animate-orb-rotate absolute inset-0 size-full" />
      <div className="absolute inset-[10.5%] overflow-hidden rounded-full border border-border bg-plate">
        <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
        <DotGlobe className="absolute inset-[3%] !w-[94%]" />
      </div>
      <StatusBadge className="start-0 top-[8%] sm:-start-4" delay={1.3} />
      <TimeBadge className="bottom-[9%] end-0 sm:-end-2" delay={1.45} />
    </div>
  )
}

export function HeroVisual({ portrait, className }: { portrait?: string; className?: string }) {
  return portrait ? <PortraitVisual portrait={portrait} className={className} /> : <GlobeVisual className={className} />
}

export { DotGlobe }
