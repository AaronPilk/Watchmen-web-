import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon — the brass "six o'clock" clock mark.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
        }}
      >
        <svg width="52" height="52" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="17" stroke="#b8956a" strokeWidth="2" />
          <line x1="20" y1="20" x2="20" y2="30" stroke="#f4f1ea" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="20" x2="27" y2="20" stroke="#f4f1ea" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="33" x2="20" y2="37" stroke="#cdac82" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
