"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ClipboardList,
  CodeXml,
  GraduationCap,
  Hammer,
  LifeBuoy,
  Mail,
  MessagesSquare,
  Monitor,
  Network,
  PanelsTopLeft,
  Phone,
  Wrench,
} from "lucide-react"
import { HeroTitle, Lines, SectionTitle } from "./text-anim"
import { HeroVisual } from "./hero-visual"
import { PixelAnim, type PixelScene } from "./pixel-anim"
import { StackingDisciplines } from "./stacking"
import { FaqList } from "./faq"
import { Reveal } from "@/components/ui/reveal"
import { CountUp, Parallax, RollText } from "@/components/ui/premium"
import { SpotlightCard } from "@/components/ui/card"
import { Tag } from "@/components/ui/tag"
import { GitHubIcon, WhatsAppIcon } from "@/components/brand/icons"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import {
  CAREER_START,
  about,
  choice,
  channels,
  contact,
  contactHead,
  credentials,
  credentialsHead,
  cta,
  disciplinesHead,
  experience,
  experienceHead,
  faqHead,
  faqs,
  hero,
  languages,
  marquee,
  person,
  process,
  services,
  waLink,
  type Bi,
} from "@/lib/content"

/* ─── Shared layout ────────────────────────────────────────────────────────── */

export function Section({
  id,
  children,
  className = "",
  border = true,
  gradientBar,
}: {
  id?: string
  children: React.ReactNode
  className?: string
  border?: boolean
  gradientBar?: boolean
}) {
  return (
    <section
      id={id}
      data-gradient-bar={gradientBar ? "" : undefined}
      className={cn("scroll-mt-24 px-6 py-24 md:px-12 md:py-32", border && "border-t border-border", className)}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHead({
  tag,
  title,
  description,
  center,
  aside,
  anim,
}: {
  tag: Bi
  title: Bi
  description?: Bi
  center?: boolean
  aside?: React.ReactNode
  anim?: PixelScene
}) {
  const { l } = useLanguage()
  return (
    <div className={center ? "mx-auto mb-16 flex max-w-2xl flex-col items-center text-center" : "mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"}>
      <div className={center ? "flex flex-col items-center" : "max-w-2xl"}>
        {anim && <PixelAnim scene={anim} className="mb-6" />}
        <Tag>{l(tag)}</Tag>
        <SectionTitle key={l(title)} className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
          <Lines text={l(title)} breakClass="hidden md:block" />
        </SectionTitle>
        {description && center && <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">{l(description)}</p>}
      </div>
      {!center && (aside ?? (description && <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{l(description)}</p>))}
    </div>
  )
}

const primaryBtn = "group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-[opacity,transform] duration-300 hover:opacity-90 active:scale-[0.98]"
const ghostBtn = "group inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium transition-[border-color,transform] duration-300 hover:border-foreground/30 active:scale-[0.98]"
const textLink = "group inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"

/* ─── Hero ─────────────────────────────────────────────────────────────────── */

export function Hero({ portrait }: { portrait?: string }) {
  const { l } = useLanguage()
  const years = new Date().getFullYear() - CAREER_START
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-6 pb-20 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28">
        <div className="pt-10 lg:pt-12">
          <p className="mb-6 flex items-center gap-3 text-lg text-muted-foreground">
            <span className="hidden h-px w-10 bg-foreground/25 sm:block" />
            {l(hero.eyebrow)}
          </p>
          <HeroTitle key={l(hero.title)} text={l(hero.title)} className="font-display text-[2.9rem] font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.2rem]" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{l(hero.subtitle)}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/contact" className={primaryBtn}>
              <RollText>{l(hero.primary)}</RollText>
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
            </Link>
            <Link href="/projects" className="group inline-flex items-center gap-2 px-6 py-4 text-base font-medium text-brand-600 transition-colors hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200">
              <RollText>{l(hero.secondary)}</RollText>
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
            {hero.stats.map((s, i) => (
              <div key={s.label.en} className="hero-stagger opacity-0" style={{ animation: `fade-up 0.8s cubic-bezier(0.16,1,0.3,1) ${0.9 + i * 0.1}s forwards` }}>
                <div className="font-display text-3xl font-light tracking-tight sm:text-4xl">
                  <CountUp value={s.value === "years" ? years : Number(s.value)} suffix={s.value === "years" ? "+" : ""} delay={0.9 + i * 0.1} />
                </div>
                <div className="eyebrow mt-1 !text-[10.5px]">{l(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
        <HeroVisual portrait={portrait} className="lg:-me-2" />
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="eyebrow !text-[10px]">{l(hero.scroll)}</span>
        <span className="relative h-10 w-px overflow-hidden bg-foreground/10">
          <span className="scroll-cue-line absolute inset-x-0 top-0 h-1/2 bg-foreground/60" />
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

/* ─── Discipline strip (two bordered rows) ─────────────────────────────────── */

export function Marquee() {
  const { l, t } = useLanguage()
  const row = (items: Bi[], dim: boolean) =>
    [0, 1, 2].map((rep) => (
      <div key={rep} className="flex shrink-0" aria-hidden={rep > 0}>
        {items.map((it) => (
          <div key={it.en} className="flex shrink-0 items-center gap-6 border-e border-border px-10 py-5">
            <span className={cn("size-1.5 shrink-0 rounded-full", dim ? "bg-foreground/10" : "bg-foreground/20")} />
            <span dir="auto" className={cn("whitespace-nowrap text-sm tracking-wide", dim ? "text-foreground/40" : "text-foreground/60")}>
              {l(it)}
            </span>
          </div>
        ))}
      </div>
    ))
  return (
    <section className="marquee-pause select-none overflow-hidden border-t border-border" aria-label={t("Skills and credentials", "المهارات والشهادات")} dir="ltr">
      <div className="marquee-left flex w-max border-b border-border">{row(marquee.rowA, false)}</div>
      <div className="marquee-right flex w-max border-b border-border">{row(marquee.rowB, true)}</div>
    </section>
  )
}

/* ─── About ────────────────────────────────────────────────────────────────── */

export function AboutSection() {
  const { l } = useLanguage()
  return (
    <Section id="about" border={false}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <PixelAnim scene="terminal" className="mb-6" />
          <Tag>{l(about.tag)}</Tag>
          <SectionTitle key={l(about.title)} className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
            {l(about.title)}
          </SectionTitle>
          <Reveal>
            <p className="mt-6 leading-relaxed text-muted-foreground">{l(about.body)}</p>
          </Reveal>
          <div className="mt-10 space-y-4">
            {about.points.map((p) => (
              <div key={p.en} className="flex gap-4">
                <div className="w-px shrink-0 bg-foreground/15" />
                <p className="text-sm text-foreground/80">{l(p)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <AtAGlance />
        </div>
      </div>
    </Section>
  )
}

export function AtAGlance({ withValue = true }: { withValue?: boolean }) {
  const { l } = useLanguage()
  return (
    <>
      {withValue && (
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="eyebrow">{l(about.valueTitle)}</p>
            <ol className="mt-5 space-y-5">
              {about.value.map(([title, text], i) => (
                <li key={title.en} className="flex gap-4">
                  <span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-sm">{l(title)}</span>
                    <span className="block text-xs text-muted-foreground">{l(text)}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <div className={cn("rounded-2xl border border-border bg-card p-6", withValue && "mt-3")}>
          <p className="eyebrow">{l(about.glanceTitle)}</p>
          <dl className="mt-4 divide-y divide-border text-sm">
            {about.glance.map(([k, v]) => (
              <div key={k.en} className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">{l(k)}</dt>
                <dd className="text-end">{l(v)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </>
  )
}

/* ─── Disciplines (sticky stacking cards) ──────────────────────────────────── */

export function DisciplinesSection() {
  const { l } = useLanguage()
  return (
    <Section id="disciplines" gradientBar>
      <SectionHead anim="network" tag={disciplinesHead.tag} title={disciplinesHead.title} description={disciplinesHead.description} />
      <StackingDisciplines />
      <Link href="/projects" className={cn(textLink, "mt-6")}>
        {l(disciplinesHead.all)} <ArrowRight className="size-4 rtl:-scale-x-100" />
      </Link>
    </Section>
  )
}

/* ─── Services bento ───────────────────────────────────────────────────────── */

const SERVICE_ICONS = { code: CodeXml, web: PanelsTopLeft, ai: BrainCircuit, teach: GraduationCap, support: Wrench, network: Network } as const

export function ServicesSection({ matrix }: { matrix?: string }) {
  const { l, isAr } = useLanguage()
  return (
    <Section id="services">
      <SectionHead anim="chip" tag={services.tag} title={services.title} />
      <div className="grid grid-cols-12 gap-3">
        <Reveal className="col-span-12">
          <SpotlightCard className="grid overflow-hidden rounded-2xl border border-border bg-[#0b0b0a] text-white md:grid-cols-12">
            <div className="relative aspect-[4/3] md:order-2 md:col-span-7">
              {matrix ? (
                <Image src={matrix} alt={`${l(person.name)}`} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover object-[50%_25%]" />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                  <PixelAnim scene="network" tone="light" pitch={14} className="relative" />
                </div>
              )}
              {/* Slow fade into the black text panel: side edge on desktop, bottom edge when stacked. */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 hidden md:block",
                  isAr
                    ? "bg-[linear-gradient(to_left,#0b0b0a_0%,rgb(11_11_10/0.88)_10%,rgb(11_11_10/0.6)_24%,rgb(11_11_10/0.3)_40%,rgb(11_11_10/0.1)_54%,transparent_66%)]"
                    : "bg-[linear-gradient(to_right,#0b0b0a_0%,rgb(11_11_10/0.88)_10%,rgb(11_11_10/0.6)_24%,rgb(11_11_10/0.3)_40%,rgb(11_11_10/0.1)_54%,transparent_66%)]",
                )}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#0b0b0a_0%,rgb(11_11_10/0.7)_14%,rgb(11_11_10/0.25)_32%,transparent_48%)] md:hidden" />
            </div>
            <div className="relative z-10 flex flex-col justify-end p-8 md:order-1 md:col-span-5 md:p-10">
              <div className="mb-6 grid size-10 place-items-center rounded-xl border border-white/20">
                <Monitor className="size-[18px]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-light md:text-3xl">{l(services.featureTitle)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{l(services.featureText)}</p>
            </div>
          </SpotlightCard>
        </Reveal>
        {services.items.map((s, i) => {
          const Icon = SERVICE_ICONS[s.icon]
          return (
            <Reveal key={s.icon} className="col-span-12 sm:col-span-6 md:col-span-4" delay={(i % 3) * 0.06}>
              <SpotlightCard className="h-full min-h-[200px] rounded-2xl border border-border bg-card p-8">
                <div className="mb-5 grid size-10 place-items-center rounded-xl border border-border">
                  <Icon className="size-[18px] text-foreground/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-light">{l(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l(s.text)}</p>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

/* ─── The choice (cinematic full-bleed band) ──────────────────────────────── */

const CAPSULE = {
  blue: "linear-gradient(90deg,#16359c 0%,#2f5fe6 55%,#7fa0ff 100%)",
  red: "linear-gradient(90deg,#7d2216 0%,#c2452f 55%,#f08a6c 100%)",
} as const

function Capsule({ tone }: { tone: keyof typeof CAPSULE }) {
  return (
    <span aria-hidden className="relative inline-block h-3.5 w-7 shrink-0 -rotate-[18deg] rounded-full shadow-[0_6px_14px_-4px_rgb(0_0_0/0.8)]" style={{ background: CAPSULE[tone] }}>
      <span className="absolute inset-x-1.5 top-[2px] h-[3px] rounded-full bg-white/45" />
    </span>
  )
}

export function ChoiceSection({ matrix }: { matrix?: string }) {
  const { l, isAr } = useLanguage()
  if (!matrix) return null
  return (
    <section id="choice" className="relative overflow-hidden bg-[#040301] text-white" data-gradient-bar>
      {/* Photo: full height on the end side for desktop, on top for phones. The photo's own background is this exact black. */}
      <Parallax className="relative aspect-[4/3] w-full md:absolute md:inset-y-0 md:end-0 md:aspect-auto md:w-[60%]" amount={6}>
        <Image src={matrix} alt={l(choice.alt)} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover object-[50%_35%]" />
      </Parallax>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 hidden md:block",
          isAr
            ? "bg-[linear-gradient(to_left,#040301_0%,#040301_38%,rgb(4_3_1/0.6)_44%,transparent_52%)]"
            : "bg-[linear-gradient(to_right,#040301_0%,#040301_38%,rgb(4_3_1/0.6)_44%,transparent_52%)]",
        )}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[4/3] bg-[linear-gradient(to_top,#040301_0%,rgb(4_3_1/0.6)_18%,transparent_42%)] md:hidden" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#040301] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040301] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 md:px-12 md:py-36">
        <div className="pt-2 md:max-w-[46%] md:pt-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/60">{l(choice.tag)}</span>
          <SectionTitle key={l(choice.title)} className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight [--foreground:#f5f4f0] md:text-5xl">
            <Lines text={l(choice.title)} />
          </SectionTitle>
          <Reveal>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-white/60 md:max-w-[84%]">{l(choice.body)}</p>
          </Reveal>
          <div className="mt-10 border-t border-white/10 md:max-w-[84%]">
            {choice.options.map((o, i) => (
              <Reveal key={o.tone} delay={0.1 + i * 0.08}>
                <div className="flex gap-5 border-b border-white/10 py-5">
                  <span className="pt-1.5">
                    <Capsule tone={o.tone} />
                  </span>
                  <span>
                    <span className="block text-[0.95rem]">{l(o.label)}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-white/50">{l(o.text)}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#f5f4f0] px-7 py-3.5 text-sm font-medium text-[#111] transition-[opacity,transform] duration-300 hover:opacity-90 active:scale-[0.98]"
          >
            <RollText>{l(choice.cta)}</RollText>
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Process (four steps) ─────────────────────────────────────────────────── */

const STEP_ICONS = { discover: MessagesSquare, plan: ClipboardList, build: Hammer, handover: LifeBuoy } as const

export function ProcessSection() {
  const { l } = useLanguage()
  return (
    <Section id="process">
      <SectionHead anim="signal" tag={process.tag} title={process.title} description={process.description} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((s, i) => {
          const Icon = STEP_ICONS[s.icon]
          return (
            <Reveal key={s.icon} delay={i * 0.08}>
              <SpotlightCard className="flex h-full min-h-[300px] flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <Icon className="size-5 text-foreground/40" strokeWidth={1.5} />
                </div>
                <div className="mt-auto pt-16">
                  <h3 className="font-display text-2xl font-light tracking-tight">{l(s.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l(s.text)}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

/* ─── Experience ───────────────────────────────────────────────────────────── */

export function CareerLog() {
  const { l, t } = useLanguage()
  return (
    <SpotlightCard className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="eyebrow">{l(experienceHead.log)}</span>
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-success" /> {t(`Since ${CAREER_START}`, `منذ ${CAREER_START}`)}
        </span>
      </div>
      <div className="space-y-2">
        {experience.map((e, i) => (
          <div
            key={e.from}
            className="flex items-center gap-4 rounded-lg border border-border/70 bg-foreground/[0.015] px-3 py-3"
            style={{ animation: `fade-up 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both` }}
          >
            <span className="min-w-[92px] font-mono text-[11px] text-muted-foreground">
              {e.from} – {l(e.to)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm">{l(e.role)}</span>
              <span className="block truncate text-xs text-muted-foreground">{l(e.company)}</span>
            </span>
            {e.current && <span className="size-1.5 shrink-0 animate-pulse-dot rounded-full bg-success" aria-label={l(experienceHead.current)} />}
          </div>
        ))}
      </div>
    </SpotlightCard>
  )
}

/** Dark feature card for the current role, with the ICT photo when available. */
export function CurrentRoleCard({ ict }: { ict?: string }) {
  const { l, isAr } = useLanguage()
  const role = experience[0]
  return (
    <SpotlightCard className="grid overflow-hidden rounded-2xl border border-border bg-[#0b0b0a] text-white md:grid-cols-12">
      <div className="relative aspect-[3/2] md:col-span-7 md:aspect-auto md:min-h-[380px]">
        {ict ? (
          <Image src={ict} alt="" fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <PixelAnim scene="chip" tone="light" pitch={13} className="relative" />
          </div>
        )}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 hidden md:block",
            isAr
              ? "bg-[linear-gradient(to_right,#0b0b0a_0%,rgb(11_11_10/0.85)_12%,rgb(11_11_10/0.5)_28%,rgb(11_11_10/0.15)_48%,transparent_62%)]"
              : "bg-[linear-gradient(to_left,#0b0b0a_0%,rgb(11_11_10/0.85)_12%,rgb(11_11_10/0.5)_28%,rgb(11_11_10/0.15)_48%,transparent_62%)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#0b0b0a_0%,rgb(11_11_10/0.7)_14%,rgb(11_11_10/0.25)_32%,transparent_48%)] md:hidden" />
      </div>
      <div className="relative z-10 flex flex-col justify-end p-8 md:col-span-5 md:p-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/70">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-[#6cc08d]" /> {l(experienceHead.current)} · {role.from} – {l(role.to)}
        </span>
        <h3 className="mt-6 font-display text-2xl font-light md:text-3xl">{l(role.role)}</h3>
        <p className="mt-1 text-sm text-white/70">{l(role.company)}</p>
        <p className="mt-4 text-sm leading-relaxed text-white/60">{l(role.text)}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {role.skills.map((s) => (
            <span key={s.en} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
              {l(s)}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  )
}

export function ExperienceSection({ ict }: { ict?: string }) {
  const { l } = useLanguage()
  return (
    <Section id="experience">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <PixelAnim scene="clock" className="mb-6" />
          <Tag>{l(experienceHead.tag)}</Tag>
          <SectionTitle key={l(experienceHead.title)} className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
            <Lines text={l(experienceHead.title)} breakClass="hidden md:block" />
          </SectionTitle>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{l(experienceHead.description)}</p>
          <Link href="/workbench" className={cn(textLink, "mt-8")}>
            {l(experienceHead.full)} <ArrowRight className="size-4 rtl:-scale-x-100" />
          </Link>
        </div>
        <CareerLog />
      </div>
      <Reveal className="mt-12 md:mt-16">
        <CurrentRoleCard ict={ict} />
      </Reveal>
    </Section>
  )
}

/* ─── Credentials & languages ──────────────────────────────────────────────── */

export function CredentialCards() {
  const { l } = useLanguage()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {credentials.map((c, i) => (
        <Reveal key={c.name} delay={i * 0.06} className="h-full">
          <SpotlightCard className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground">{l(c.label)}</p>
              <span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <p className="mt-6 font-display text-5xl font-light tracking-tight">
              {c.name}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">{l(c.note)}</p>
            <ul className="mt-8 flex-1 space-y-3.5 border-t border-border pt-6 text-sm text-foreground/70">
              {c.items.map((it) => (
                <li key={it.en} className="flex items-start gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/30" />
                  {l(it)}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  )
}

export function LanguageCards() {
  const { l } = useLanguage()
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {languages.items.map((lang, i) => (
        <Reveal key={lang.name.en} delay={i * 0.06}>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-display text-2xl font-light tracking-tight">{l(lang.name)}</span>
              <span className="eyebrow">{l(lang.level)}</span>
            </div>
            <div className="mt-5 h-px w-full bg-border">
              <div className="h-px bg-foreground/70" style={{ width: `${lang.value * 100}%` }} />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function CredentialsSection() {
  const { l } = useLanguage()
  return (
    <Section id="credentials">
      <SectionHead center anim="badge" tag={credentialsHead.tag} title={credentialsHead.title} description={credentialsHead.description} />
      <CredentialCards />
      <p className="eyebrow mb-4 mt-14">{l(languages.title)}</p>
      <LanguageCards />
    </Section>
  )
}

/* ─── Contact channels ─────────────────────────────────────────────────────── */

const CHANNEL_ICONS = { whatsapp: WhatsAppIcon, email: Mail, phone: Phone, github: GitHubIcon } as const

export function ChannelCards({ large }: { large?: boolean }) {
  const { l } = useLanguage()
  const hrefs = {
    whatsapp: waLink(l(person.waHello)),
    email: `mailto:${contact.email}`,
    phone: `tel:${contact.phone}`,
    github: contact.github,
  }
  return (
    <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2", !large && "lg:grid-cols-4")}>
      {channels.map((c, i) => {
        const Icon = CHANNEL_ICONS[c.id]
        const href = hrefs[c.id]
        const external = href.startsWith("http")
        return (
          <Reveal key={c.id} delay={(i % 4) * 0.05} className="h-full">
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={cn(
                "group flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-card px-6 py-5 transition-colors hover:border-foreground/20",
                large && "min-h-[180px] p-8",
              )}
            >
              <span className="flex items-center justify-between">
                <span className="grid size-9 place-items-center rounded-xl border border-border text-foreground/70 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-300">
                  <Icon className="size-4" />
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  {l(c.action)} <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                </span>
              </span>
              <span>
                <span className={cn("block", large ? "font-display text-2xl font-light tracking-tight" : "text-[0.95rem]")}>{l(c.label)}</span>
                <span className="mt-0.5 block truncate font-mono text-xs text-muted-foreground">
                  <bdi dir="ltr">{c.value}</bdi>
                </span>
              </span>
            </a>
          </Reveal>
        )
      })}
    </div>
  )
}

export function ContactSection() {
  return (
    <Section id="connect">
      <SectionHead anim="chat" tag={contactHead.tag} title={contactHead.title} description={contactHead.description} />
      <ChannelCards />
    </Section>
  )
}

/* ─── FAQ ──────────────────────────────────────────────────────────────────── */

export function FaqSection() {
  const { l } = useLanguage()
  return (
    <Section id="faq">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <PixelAnim scene="neural" className="mb-6" />
          <Tag>{l(faqHead.tag)}</Tag>
          <SectionTitle key={l(faqHead.title)} className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
            <Lines text={l(faqHead.title)} breakClass="hidden md:block" />
          </SectionTitle>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{l(faqHead.description)}</p>
        </div>
        <FaqList items={faqs.map((f) => ({ q: l(f.q), a: l(f.a) }))} />
      </div>
    </Section>
  )
}

/* ─── Final call to action ─────────────────────────────────────────────────── */

export function CtaBand() {
  const { l } = useLanguage()
  return (
    <section className="relative overflow-hidden border-t border-border px-6 py-32 md:px-12">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <PixelAnim scene="orbit" className="mx-auto mb-8" />
        <SectionTitle key={l(cta.title)} className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
          <Lines text={l(cta.title)} breakClass="hidden sm:block" />
        </SectionTitle>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{l(cta.description)}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className={primaryBtn}>
            <RollText>{l(cta.primary)}</RollText>
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
          </Link>
          <a href={waLink(l(person.waHello))} target="_blank" rel="noopener noreferrer" className={ghostBtn}>
            <WhatsAppIcon /> <RollText>{l(cta.secondary)}</RollText>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Inner-page header ────────────────────────────────────────────────────── */

export function PageHero({ eyebrow, title, description, children }: { eyebrow: Bi; title: Bi; description?: Bi; children?: React.ReactNode }) {
  const { l } = useLanguage()
  return (
    <section className="px-6 pb-4 pt-36 md:px-12 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <Tag>{l(eyebrow)}</Tag>
        <SectionTitle key={l(title)} as="h1" className="mt-6 max-w-3xl font-display text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
          <Lines text={l(title)} />
        </SectionTitle>
        {description && <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">{l(description)}</p>}
        {children}
      </div>
    </section>
  )
}

export { primaryBtn, ghostBtn, textLink }
