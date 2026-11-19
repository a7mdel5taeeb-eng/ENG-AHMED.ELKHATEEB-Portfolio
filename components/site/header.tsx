"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { nav, hero, person, contact, waLink } from "@/lib/content"
import { LanguageSwitch, useLanguage } from "@/components/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Monogram, WhatsAppIcon } from "@/components/brand/icons"
import { RollText } from "@/components/ui/premium"

const EASE = [0.16, 1, 0.3, 1] as const

export function Wordmark({ className }: { className?: string }) {
  const { l } = useLanguage()
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Monogram />
      <span className="leading-none">
        <span className="block text-[1.02rem] font-semibold tracking-tight text-foreground">{l(person.name)}</span>
        <span className="eyebrow mt-1 block !text-[0.58rem] !tracking-[0.18em]">{l(person.role)}</span>
      </span>
    </span>
  )
}

/** Two lines that turn into a cross. */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden>
      <span className={cn("absolute start-0 h-[1.5px] w-5 bg-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]", open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")} />
      <span className={cn("absolute start-0 h-[1.5px] bg-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]", open ? "top-1/2 w-5 -translate-y-1/2 -rotate-45" : "bottom-0 w-3.5")} />
    </span>
  )
}

/** Transparent at the top, frosted bar with a hairline once scrolled. */
export function Header() {
  const pathname = usePathname()
  const { l, t, ready } = useLanguage()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const items = nav.map((n, i) => ({ ...n, n: String(i + 1).padStart(2, "0") }))

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  React.useEffect(() => setOpen(false), [pathname])
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const close = () => setOpen(false)
  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href)

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
          open ? "border-b border-transparent bg-background" : scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent bg-transparent",
        )}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background">
          {t("Skip to content", "انتقل إلى المحتوى")}
        </a>
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <nav className="flex h-16 items-center justify-between md:h-20" aria-label={t("Main", "القائمة الرئيسية")}>
            <Link href="/" aria-label={t("Ahmed Elkhateeb — home", "أحمد الخطيب — الرئيسية")} onClick={close}>
              <Wordmark />
            </Link>
            <div className="hidden items-center gap-7 lg:flex">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn("group text-sm transition-colors hover:text-foreground", isActive(item.href) ? "text-foreground" : "text-muted-foreground")}
                >
                  <RollText>{l(item.label)}</RollText>
                  <span className="ms-1 font-mono text-[11px] opacity-50">({item.n})</span>
                </Link>
              ))}
            </div>
            <div className={cn("hidden items-center gap-3 transition-opacity duration-300 lg:flex", ready ? "opacity-100" : "opacity-0")}>
              <LanguageSwitch />
              <ThemeToggle />
              <Link href="/contact" className="group ms-2 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-[opacity,transform] duration-300 hover:opacity-90 active:scale-[0.98]">
                <RollText>{l(hero.primary)}</RollText>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="-me-2 grid size-10 place-items-center lg:hidden"
              aria-label={open ? t("Close menu", "إغلاق القائمة") : t("Open menu", "فتح القائمة")}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <MenuIcon open={open} />
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-background lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)", transition: { duration: 0.6, ease: EASE } }}
            exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.45, ease: EASE, delay: 0.1 } }}
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24">
              <nav className="flex flex-col gap-5" aria-label={t("Mobile", "قائمة الجوال")}>
                {[{ href: "/", label: { en: "Home", ar: "الرئيسية" }, n: "00" }, ...items].map((item, i) => (
                  <div key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.12 + i * 0.06 } }}
                      exit={{ y: "110%", transition: { duration: 0.3, ease: EASE } }}
                    >
                      <Link href={item.href} onClick={close} className="flex items-baseline gap-3 text-3xl font-light tracking-tight transition-colors hover:text-muted-foreground">
                        <span className="font-mono text-xs text-muted-foreground">{item.n}</span>
                        {l(item.label)}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>
              <motion.div
                className="mt-auto flex flex-col gap-3 pt-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay: 0.45 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <LanguageSwitch />
                  <ThemeToggle />
                </div>
                <a
                  href={waLink(l(person.waHello))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-medium"
                >
                  <WhatsAppIcon /> <span dir="ltr">{contact.phoneDisplay}</span>
                </a>
                <Link href="/contact" onClick={close} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-base font-medium text-background">
                  {l(hero.primary)} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
