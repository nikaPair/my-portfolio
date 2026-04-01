import { ImageResponse } from "next/og";
import { BRAND_COLOR, BRAND_MONOGRAM, BRAND_DOMAIN } from "@/constants/branding";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TEXTS = {
  ru: {
    greeting: "Привет! Я Николоз",
    role: "Frontend-разработчик",
    description: "5+ лет опыта. SPA и десктопные приложения для финтеха и EdTech",
  },
  en: {
    greeting: "Hi! I'm Nikoloz",
    role: "Frontend Developer",
    description: "5+ years of experience. SPAs and desktop apps for fintech & EdTech",
  },
};

export default async function OgImage({ params }) {
  const { locale } = await params;
  const t = TEXTS[locale] ?? TEXTS.en;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 80px",
        background: BRAND_COLOR,
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          {BRAND_MONOGRAM}
        </div>
        <span style={{ fontSize: 22, opacity: 0.6, letterSpacing: "0.08em" }}>{BRAND_DOMAIN}</span>
      </div>

      <div
        style={{
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: 16,
        }}
      >
        {t.greeting}
      </div>

      <div
        style={{
          fontSize: 36,
          fontWeight: 500,
          opacity: 0.85,
          marginBottom: 24,
        }}
      >
        {t.role}
      </div>

      <div
        style={{
          fontSize: 24,
          opacity: 0.6,
          lineHeight: 1.4,
          maxWidth: 700,
        }}
      >
        {t.description}
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: "auto",
        }}
      >
        {["React", "Next.js", "TypeScript", "Electron"].map((tech) => (
          <div
            key={tech}
            style={{
              padding: "8px 20px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.12)",
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
