"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import {
  AtAGlance,
  ChannelCards,
  CredentialCards,
  CurrentRoleCard,
  LanguageCards,
  PageHero,
  Section,
  SectionHead,
  primaryBtn,
} from "./sections"
import { DisciplineCover } from "./stacking"
import { useSaudiTime } from "./hero-visual"
import { SpotlightCard } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { Tag } from "@/components/ui/tag"
import { GitHubIcon } from "@/components/brand/icons"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import {
  brief,
  contact,
  credentialsHead,
  disciplineFilters,
  disciplines,
  disciplinesHead,
  experience,
  languages,
  pages,
  person,
  principles,
} from "@/lib/content"

/* ─── Disciplines ──────────────────────────────────────────────────────────── */

export function DisciplinesPage() {
  const { l } = useLanguage()
  const [filter, setFilter] = React.useState<(typeof disciplineFilters)[number]["id"]>("all")
  const list = disciplines.filter((d) => filter === "all" || d.category === filter)
  const p = pages.disciplines

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} description={p.description}>
        <div role="group" aria-label={l(p.filterLabel)} className="no-scrollbar -mx-6 mt-10 flex gap-2 overflow-x-auto px-6 md:mx-0 md:px-0">
          {disciplineFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
                filter === f.id ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground",
              )}
            >
              {l(f.label)}
              <span className="ms-2 font-mono text-[11px] opacity-60">
                {f.id === "all" ? disciplines.length : disciplines.filter((d) => d.category === f.id).length}
              </span>
            </button>
          ))}
        </div>
      </PageHero>

      <section className="px-6 pb-28 pt-10 md:px-12" data-gradient-bar>
        <div className="mx-auto max-w-6xl">
          <motion.div layout className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {list.map((d) => {
                const index = disciplines.indexOf(d)
                const category = disciplineFilters.find((f) => f.id === d.category)
                return (
                  <motion.article
                    layout
                    key={d.id}
                    id={d.id}
                    className="scroll-mt-28"
                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <SpotlightCard className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-foreground/15">
                      <DisciplineCover id={d.id} pitch={8} className="aspect-[16/9]" />
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex flex-wrap items-center gap-2">
                          <Tag>
                            {l(disciplinesHead.label)} {String(index + 1).padStart(2, "0")}
                          </Tag>
                          {category && <Tag>{l(category.label)}</Tag>}
                        </div>
                        <h2 className="mt-5 font-display text-2xl font-light leading-snug tracking-tight">{l(d.title)}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l(d.description)}</p>
                        <div className="mt-6">
                          <p className="eyebrow">{l(p.focusLabel)}</p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {d.focus.map((f) => (
                              <li key={f.en} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                                {l(f)}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto pt-8">
                          <div className="flex items-center justify-between gap-4 border-t border-border pt-5">
                            <span className="font-mono text-[11px] text-muted-foreground">
                              {String(index + 1).padStart(2, "0")} / {String(disciplines.length).padStart(2, "0")}
                            </span>
                            <Link href="/contact" className="inline-flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-foreground">
                              {l(disciplinesHead.discuss)} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.article>
                )
              })}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && <p className="py-16 text-center text-sm text-muted-foreground">{l(p.empty)}</p>}

          <Reveal className="mt-3">
            <div className="flex flex-col gap-6 rounded-2xl border border-dashed border-border px-8 py-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow">{l(p.noteTitle)}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l(p.noteText)}</p>
              </div>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground/25">
                <GitHubIcon /> {l(p.noteLink)} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ─── Experience ───────────────────────────────────────────────────────────── */

export function ExperiencePage({ ict }: { ict?: string }) {
  const { l } = useLanguage()
  const p = pages.experience
  const thisYear = new Date().getFullYear()
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} description={p.description} />
      <section className="px-6 pb-8 pt-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <CurrentRoleCard ict={ict} />
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-28 pt-8 md:px-12" data-gradient-bar>
        <div className="mx-auto max-w-6xl">
          <ol className="border-t border-border">
            {experience.map((e, i) => {
              const end = e.current ? thisYear : Number(e.to.en)
              const years = Math.max(1, end - Number(e.from))
              return (
                <Reveal as="li" key={e.from} delay={i * 0.05}>
                  <div className="grid grid-cols-1 gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-3">
                      <p className="font-mono text-sm">
                        {e.from} – {l(e.to)}
                      </p>
                      <p className="eyebrow mt-2" suppressHydrationWarning>
                        {years} {l(p.yearsLabel)}
                      </p>
                      {e.current && (
                        <span className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="size-1.5 animate-pulse-dot rounded-full bg-success" /> {l({ en: "Current", ar: "حالي" })}
                        </span>
                      )}
                    </div>
                    <div className="md:col-span-6">
                      <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">{l(e.role)}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{l(e.company)}</p>
                      <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/80">{l(e.text)}</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="eyebrow">{l(p.skillsLabel)}</p>
                      <ul className="mt-3 space-y-2 text-sm text-foreground/70">
                        {e.skills.map((s) => (
                          <li key={s.en} className="flex items-start gap-3">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/30" />
                            {l(s)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>
    </>
  )
}

/* ─── Profile ──────────────────────────────────────────────────────────────── */

/** Portrait plate: framed photo with a caption strip, like a printed profile card. */
export function PortraitPlate({ portrait, className }: { portrait: string; className?: string }) {
  const { l } = useLanguage()
  return (
    <figure className={cn("overflow-hidden rounded-2xl border border-border bg-card", className)}>
      <ImageReveal className="aspect-[4/5]">
        <Image src={portrait} alt={`${l(person.name)} — ${l(person.role)}`} fill sizes="(min-width: 1024px) 440px, 100vw" className="object-cover object-[50%_18%]" />
      </ImageReveal>
      <figcaption className="flex items-end justify-between gap-4 border-t border-border px-6 py-5">
        <span>
          <span className="block font-display text-xl font-light tracking-tight">{l(person.name)}</span>
          <span className="mt-1 block text-xs text-muted-foreground">{l(person.role)}</span>
        </span>
        <span className="eyebrow shrink-0 !text-[10px]">{l(person.location)}</span>
      </figcaption>
    </figure>
  )
}

/** Wipes a photo into view (curtain + gentle settle) the first time it is on screen. */
export function ImageReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-plate", className)}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.14, filter: "blur(8px)" }}
        whileInView={{ scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-plate"
        initial={{ y: "0%" }}
        whileInView={{ y: "-101%" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  )
}

export function ProfilePage({ portrait }: { portrait?: string }) {
  const { l } = useLanguage()
  const p = pages.profile
  const principlesCard = (
    <Reveal delay={0.06}>
      <div className="h-full rounded-2xl border border-border bg-card p-6">
        <p className="eyebrow">{l(principles.title)}</p>
        <ol className="mt-5 space-y-5">
          {principles.items.map(([title, text], i) => (
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
  )
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} description={p.description} />
      <section className="px-6 pb-12 pt-12 md:px-12">
        {portrait ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <PortraitPlate portrait={portrait} />
            </Reveal>
            <div className="flex flex-col gap-3">
              <div>
                <AtAGlance withValue={false} />
              </div>
              {principlesCard}
            </div>
          </div>
        ) : (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 lg:grid-cols-2">
            <div>
              <AtAGlance withValue={false} />
            </div>
            {principlesCard}
          </div>
        )}
      </section>
      <Section id="credentials">
        <SectionHead anim="badge" tag={credentialsHead.tag} title={credentialsHead.title} description={credentialsHead.description} />
        <CredentialCards />
        <p className="eyebrow mb-4 mt-14">{l(languages.title)}</p>
        <LanguageCards />
      </Section>
    </>
  )
}

/* ─── Contact ──────────────────────────────────────────────────────────────── */

export function ContactPage({ portrait }: { portrait?: string }) {
  const { l } = useLanguage()
  const p = pages.contact
  const time = useSaudiTime()
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} description={p.description} />
      <section className="px-6 pb-28 pt-12 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-4">{l(p.channelsTitle)}</p>
          <ChannelCards large />
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <Reveal>
              <SpotlightCard className="h-full rounded-2xl border border-border bg-card p-8">
                <p className="eyebrow">{l(brief.title)}</p>
                <ol className="mt-6 space-y-5">
                  {brief.items.map(([title, text], i) => (
                    <li key={title.en} className="flex gap-4">
                      <span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block text-sm">{l(title)}</span>
                        <span className="block text-xs text-muted-foreground">{l(text)}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </SpotlightCard>
            </Reveal>
            <Reveal delay={0.06}>
              <SpotlightCard className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow">{l(p.localTime)}</p>
                  <Clock className="size-4 text-foreground/40" strokeWidth={1.5} />
                </div>
                <p className="mt-6 font-display text-6xl font-light tracking-tight">
                  {time || "—"}
                </p>
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  GMT+3 · Asia/Riyadh
                </p>
                <div className="flex-1" />
                <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                  {portrait ? (
                    <Image src={portrait} alt="" width={48} height={48} className="size-12 rounded-full object-cover object-[50%_30%]" />
                  ) : (
                    <span className="grid size-12 place-items-center rounded-full border border-border font-display text-lg font-light" dir="ltr">
                      ae
                    </span>
                  )}
                  <span>
                    <span className="block text-sm">{l(person.name)}</span>
                    <span className="block text-xs text-muted-foreground">{l(person.role)}</span>
                  </span>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
          <div className="mt-10">
            <Link href="/projects" className={cn(primaryBtn, "px-6 py-3 text-sm")}>
              {l(disciplinesHead.all)} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── 404 ──────────────────────────────────────────────────────────────────── */

export function NotFoundContent() {
  const { t } = useLanguage()
  return (
    <main className="grid min-h-dvh place-items-center bg-background px-6 text-center">
      <div>
        <p className="eyebrow">{t("Error 404", "خطأ 404")}</p>
        <h1 className="mt-6 font-display text-5xl font-light tracking-tight md:text-7xl">{t("Page not found.", "الصفحة غير موجودة.")}</h1>
        <p className="mx-auto mt-5 max-w-sm text-muted-foreground">
          {t("The page you're looking for doesn't exist or has moved.", "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-85">
            {t("Back to home", "العودة للرئيسية")}
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-foreground/25">
            {t("Get in touch", "تواصل معي")}
          </Link>
        </div>
      </div>
    </main>
  )
}
