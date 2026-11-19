import type { Metadata } from "next"
import { ProfilePage } from "@/components/site/pages"
import { CtaBand, FaqSection } from "@/components/site/sections"
import { getMedia } from "@/lib/media"

export const metadata: Metadata = {
  title: "Profile",
  description: "Ahmed Elkhateeb’s credentials (CCNA, IT Essentials, ICDL), languages and working principles.",
}

export default function NotesPage() {
  const media = getMedia()
  return (
    <>
      <ProfilePage portrait={media.portrait} />
      <FaqSection />
      <CtaBand />
    </>
  )
}
