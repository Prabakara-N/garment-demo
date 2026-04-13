import { ImageResponse } from "next/og";

export const alt = "Sri Lakshmi Knit Exports - Premium Knitwear Manufacturer in Tiruppur";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1B2A4A 0%, #0F1A2E 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#C9A84C",
            marginBottom: 16,
          }}
        >
          Sri Lakshmi Knit Exports
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#FFFFFF",
            marginBottom: 40,
            opacity: 0.9,
          }}
        >
          Premium Knitwear Manufacturer & Exporter Since 1998
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 20,
            color: "#C9A84C",
            opacity: 0.8,
          }}
        >
          <span>GOTS Certified</span>
          <span>|</span>
          <span>Oeko-Tex Standard 100</span>
          <span>|</span>
          <span>Tiruppur, India</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
