import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { GradientBar } from "@/components/site/gradient-bar"
import { MagneticCursor } from "@/components/site/cursor"
import { SmoothScroll } from "@/components/ui/premium"

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div id="top" />
      <SmoothScroll />
      <MagneticCursor />
      <Header />
      <GradientBar />
      <main id="main">{children}</main>
      <Footer />
      <div aria-hidden className="grain" />
    </>
  )
}
