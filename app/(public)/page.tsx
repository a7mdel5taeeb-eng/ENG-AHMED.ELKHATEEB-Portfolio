import {
  AboutSection,
  ChoiceSection,
  ContactSection,
  CredentialsSection,
  CtaBand,
  DisciplinesSection,
  ExperienceSection,
  FaqSection,
  Hero,
  Marquee,
  ProcessSection,
  ServicesSection,
} from "@/components/site/sections"
import { getMedia } from "@/lib/media"
import { contact } from "@/lib/content"

export default function HomePage() {
  const media = getMedia()
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmed Elkhateeb",
    alternateName: "أحمد الخطيب",
    jobTitle: "Computer & Software Engineer",
    email: contact.email,
    telephone: contact.phone,
    sameAs: [contact.github],
    knowsLanguage: ["Arabic", "English"],
    hasCredential: ["CCNA", "IT Essentials", "ICDL"],
    worksFor: { "@type": "EducationalOrganization", name: "Dunia Al-Ajial International Schools" },
    address: { "@type": "PostalAddress", addressCountry: "SA" },
    ...(media.portrait ? { image: media.portrait } : {}),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }} />
      <Hero portrait={media.portrait} />
      <Marquee />
      <AboutSection />
      <DisciplinesSection />
      <ServicesSection />
      <ChoiceSection matrix={media.matrix} />
      <ProcessSection />
      <ExperienceSection ict={media.ict} />
      <CredentialsSection />
      <ContactSection />
      <FaqSection />
      <CtaBand />
    </>
  )
}
