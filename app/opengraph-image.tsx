import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const alt = "Ahmed Elkhateeb — Computer & Software Engineer. Turning ideas into real solutions."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const AR_LINE = "أحمد الخطيب — مهندس حاسب وبرمجيات".split(" ").reverse().join(" ")

const font = (pkg: string, file: string) => readFile(path.join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file))

/** Share card: warm paper, light display type and the arched portrait with its engraved ring. */
export default async function OpenGraphImage() {
  const [light, regular, mono, arabic] = await Promise.all([
    font("ibm-plex-sans", "ibm-plex-sans-latin-300-normal.woff"),
    font("ibm-plex-sans", "ibm-plex-sans-latin-400-normal.woff"),
    font("ibm-plex-mono", "ibm-plex-mono-latin-400-normal.woff"),
    font("ibm-plex-sans-arabic", "ibm-plex-sans-arabic-arabic-300-normal.woff"),
  ])
  let portrait: string | null = null
  try {
    const buf = await readFile(path.join(process.cwd(), "assets", "og-portrait.jpg"))
    portrait = `data:image/jpeg;base64,${buf.toString("base64")}`
  } catch {
    portrait = null
  }

  const ink = "#111111"
  const muted = "#6b6a65"
  const ring = "rgba(17,17,17,0.14)"

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f5f4f0", fontFamily: "Plex", color: ink, position: "relative" }}>
        {/* hairline grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage: "linear-gradient(to right, rgba(17,17,17,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 0 64px 80px", width: 700 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 12, background: ink, color: "#f5f4f0", fontSize: 22 }}>ae</div>
            <div style={{ display: "flex", fontFamily: "Mono", fontSize: 15, letterSpacing: 3, color: muted }}>COMPUTER & SOFTWARE ENGINEER — SAUDI ARABIA</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 92, fontWeight: 300, letterSpacing: -3, lineHeight: 1 }}>Ahmed Elkhateeb</div>
            <div style={{ display: "flex", marginTop: 26, fontSize: 40, fontWeight: 300, color: muted, lineHeight: 1.15 }}>Turning ideas into real solutions.</div>
            {/* The renderer lays text out left-to-right only, so the Arabic words are given in visual order. */}
            <div style={{ display: "flex", marginTop: 18, fontSize: 30, fontFamily: "Arabic", color: muted }}>{AR_LINE}</div>
          </div>
          <div style={{ display: "flex", gap: 28, fontFamily: "Mono", fontSize: 15, letterSpacing: 2, color: muted }}>
            <span>SOFTWARE</span>
            <span>·</span>
            <span>AI EDUCATION</span>
            <span>·</span>
            <span>IT SYSTEMS</span>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ position: "absolute", top: 18, left: 30, width: 440, height: 440, borderRadius: 9999, border: `1.5px solid ${ring}`, display: "flex" }} />
          <div style={{ position: "absolute", top: 46, left: 58, width: 384, height: 384, borderRadius: 9999, border: `1px dashed ${ring}`, display: "flex" }} />
          {portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={portrait} width={360} height={480} style={{ width: 360, height: 480, objectFit: "cover", borderRadius: "180px 180px 28px 28px", marginBottom: 0 }} alt="" />
          ) : (
            <div style={{ display: "flex", width: 360, height: 480, borderRadius: "180px 180px 28px 28px", background: "#e9e7e1" }} />
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Plex", data: light, weight: 300, style: "normal" },
        { name: "Plex", data: regular, weight: 400, style: "normal" },
        { name: "Mono", data: mono, weight: 400, style: "normal" },
        { name: "Arabic", data: arabic, weight: 300, style: "normal" },
      ],
    },
  )
}
