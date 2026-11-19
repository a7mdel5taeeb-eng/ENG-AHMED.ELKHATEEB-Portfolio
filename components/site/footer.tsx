"use client"

import Link from "next/link"
import { ArrowUp, ArrowUpRight, Mail, Phone } from "lucide-react"
import { Wordmark } from "./header"
import { GitHubIcon, WhatsAppIcon } from "@/components/brand/icons"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/ui/reveal"
import { contact, disciplines, footer, nav, person, waLink } from "@/lib/content"

export function SocialLinks({ className = "" }: { className?: string }) {
  const { l, t } = useLanguage()
  const items = [
    { href: waLink(l(person.waHello)), label: t("WhatsApp", "واتساب"), Icon: WhatsAppIcon },
    { href: `mailto:${contact.email}`, label: t("Email", "البريد الإلكتروني"), Icon: Mail },
    { href: `tel:${contact.phone}`, label: t("Phone", "الهاتف"), Icon: Phone },
    { href: contact.github, label: "GitHub", Icon: GitHubIcon },
  ]
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className="grid size-9 place-items-center rounded-full bg-foreground/[0.05] text-brand-600 transition-colors hover:bg-brand-600/10 dark:text-brand-300"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  )
}

export function Footer() {
  const { l, t } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" aria-label={t("Ahmed Elkhateeb — home", "أحمد الخطيب — الرئيسية")}>
              <Wordmark />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{l(person.blurb)}</p>
            <SocialLinks className="mt-6" />
            <a
              href={waLink(l(person.waHello))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-brand-600 hover:underline dark:text-brand-300"
            >
              <WhatsAppIcon /> <span dir="ltr">{contact.phoneDisplay}</span>
            </a>
          </div>

          <div className="md:col-span-2">
            <h2 className="mb-4 text-sm font-semibold">{l(footer.pages)}</h2>
            <ul className="space-y-3">
              {[{ href: "/", label: footer.home }, ...nav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="mb-4 text-sm font-semibold">{l(footer.disciplines)}</h2>
            <ul className="space-y-3">
              {disciplines.map((d) => (
                <li key={d.id}>
                  <Link href={`/projects#${d.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l(d.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="mb-4 text-sm font-semibold">{l(footer.connect)}</h2>
            <ul className="space-y-3">
              {[
                [t("Email", "البريد"), `mailto:${contact.email}`, contact.email],
                [t("Phone", "الهاتف"), `tel:${contact.phone}`, contact.phoneDisplay],
                ["GitHub", contact.github, contact.githubHandle],
              ].map(([label, href, value]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block text-sm"
                  >
                    <span className="block text-foreground">{label}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground group-hover:text-foreground">
                      <span dir="ltr">{value}</span> <ArrowUpRight className="size-3 rtl:-scale-x-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {l(person.name)}. {l(footer.rights)}
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs text-muted-foreground">{l(footer.tagline)}</p>
            <a href="#top" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground">
              {l(footer.top)} <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none select-none overflow-hidden" dir="ltr">
        <Reveal y={80}>
          <p className="wordmark -mb-[0.16em] text-center font-display text-[clamp(4.5rem,17.2vw,17rem)] font-light leading-[0.9] tracking-[-0.05em]">{footer.wordmark}</p>
        </Reveal>
      </div>
    </footer>
  )
}
