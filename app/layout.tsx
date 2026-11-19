import type React from "react"
import type { Metadata, Viewport } from "next"
import "@fontsource-variable/inter-tight"
import "@fontsource/ibm-plex-sans/300.css"
import "@fontsource/ibm-plex-sans/400.css"
import "@fontsource/ibm-plex-sans/500.css"
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/ibm-plex-mono/500.css"
import "@fontsource/ibm-plex-sans-arabic/arabic-300.css"
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css"
import "@fontsource/ibm-plex-sans-arabic/arabic-500.css"
import "@fontsource/ibm-plex-sans-arabic/arabic-600.css"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { PageLoader } from "@/components/site/loader"
import "./globals.css"

const description =
  "Ahmed Elkhateeb — computer & software engineer in Saudi Arabia. Software and web solutions, AI and programming education, IT systems and networking. أحمد الخطيب — مهندس حاسب وبرمجيات."

export const metadata: Metadata = {
  title: { default: "Ahmed Elkhateeb — Turning Ideas Into Real Solutions", template: "%s · Ahmed Elkhateeb" },
  description,
  applicationName: "Ahmed Elkhateeb",
  authors: [{ name: "Ahmed Elkhateeb", url: "https://github.com/a7mdel5taeeb-eng" }],
  creator: "Ahmed Elkhateeb",
  keywords: [
    "Ahmed Elkhateeb",
    "أحمد الخطيب",
    "Computer Engineer",
    "Software Engineer",
    "Web Development",
    "AI Education",
    "ICT Teaching",
    "IT Support",
    "Networking",
    "Saudi Arabia",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    title: "Ahmed Elkhateeb — Turning Ideas Into Real Solutions",
    description: "Software, education and IT systems — one engineer across code, classroom and infrastructure.",
    siteName: "Ahmed Elkhateeb",
  },
  twitter: { card: "summary_large_image", title: "Ahmed Elkhateeb — Computer & Software Engineer", description: "Turning ideas into real solutions." },
  icons: { icon: "/portfolio-icon.svg" },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
  ],
  width: "device-width",
  initialScale: 1,
}

/**
 * Runs before paint:
 *  - shows the intro only on the first page load of a visit,
 *  - restores an Arabic preference (lang/dir) and hides the page for the one
 *    beat it takes React to swap the copy, so English never flashes first.
 */
const bootScript = `try{var d=document.documentElement;if(sessionStorage.getItem("ae_loaded"))d.classList.add("ae-noloader");else{d.dataset.intro="playing";setTimeout(function(){delete d.dataset.intro},4500)}if(localStorage.getItem("ae-language")==="ar"){d.lang="ar";d.dir="rtl";d.classList.add("lang-pending");setTimeout(function(){d.classList.remove("lang-pending")},2500)}}catch(e){}`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-dvh">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <PageLoader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
