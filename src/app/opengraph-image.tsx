import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site-data";

// Link-preview image (WhatsApp, LinkedIn, etc.), generated from the site's
// own name and tagline so it can never drift out of date.

export const alt = `${SITE.name} - ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#10321f",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#7ed957", letterSpacing: 6 }}>
          KUMASI, GHANA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 700, letterSpacing: -4 }}>
            {SITE.name}
          </div>
          <div style={{ display: "flex", fontSize: 52, color: "#d7f0cf", marginTop: 8 }}>
            {SITE.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#b9d4bf" }}>
          Waste collection · Recycling · Cleaning services · Consultancy
        </div>
      </div>
    ),
    size
  );
}
