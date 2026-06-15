import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Watchmen — Got Your Six.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at 30% 30%, #1a1a1d 0%, #0a0a0b 70%)",
          color: "#f4f1ea",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#b8956a",
            marginBottom: 24,
          }}
        >
          Tampa Bay Brotherhood
        </div>
        <div
          style={{
            fontSize: 110,
            textTransform: "uppercase",
            letterSpacing: 6,
            lineHeight: 1,
          }}
        >
          The Watchmen
        </div>
        <div
          style={{
            fontSize: 44,
            fontStyle: "italic",
            color: "#cdac82",
            marginTop: 18,
          }}
        >
          Got Your Six.
        </div>
      </div>
    ),
    { ...size }
  );
}
