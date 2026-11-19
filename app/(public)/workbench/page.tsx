import type { Metadata } from "next"
import { ExperiencePage } from "@/components/site/pages"
import { CtaBand, ServicesSection } from "@/components/site/sections"
import { getMedia } from "@/lib/media"

export const metadata: Metadata = {
  title: "Experience",
  description: "Ahmed Elkhateeb’s career since 2007 — ICT department leadership, technology sales and consultation, technical support and design.",
}

export default function WorkbenchPage() {
  const media = getMedia()
  return (
    <>
      <ExperiencePage ict={media.ict} />
      <ServicesSection />
      <CtaBand />
    </>
  )
}
