import { ImageResponse } from "next/og";

import { portfolioData } from "@/data/portfolio";

export const alt = "Freelance frontend engineer portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, rgba(238,246,255,1) 0%, rgba(255,255,255,1) 42%, rgba(225,239,255,1) 100%)",
          color: "#102542",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-100px",
            height: "320px",
            width: "320px",
            borderRadius: "999px",
            background: "rgba(16,88,255,0.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-120px",
            bottom: "-140px",
            height: "360px",
            width: "360px",
            borderRadius: "999px",
            background: "rgba(125,180,255,0.22)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(16,66,131,0.12)",
            background: "rgba(255,255,255,0.88)",
            padding: "52px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                borderRadius: "999px",
                background: "#e7f0ff",
                color: "#1058ff",
                fontSize: "24px",
                fontWeight: 600,
                padding: "12px 20px",
              }}
            >
              Freelance Frontend Engineer
            </div>
            <div style={{ fontSize: "68px", lineHeight: 1.05, fontWeight: 700, maxWidth: "760px" }}>
              {portfolioData.profile.headline}
            </div>
            <div style={{ fontSize: "28px", lineHeight: 1.5, color: "#5b6b80", maxWidth: "840px" }}>
              {portfolioData.profile.subheadline}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              {portfolioData.profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "24px",
                    border: "1px solid rgba(16,66,131,0.10)",
                    padding: "16px 22px",
                  }}
                >
                  <span style={{ fontSize: "30px", fontWeight: 700 }}>{stat.value}</span>
                  <span style={{ fontSize: "18px", color: "#5b6b80" }}>{stat.label}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: "28px", fontWeight: 700 }}>{portfolioData.profile.name}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
