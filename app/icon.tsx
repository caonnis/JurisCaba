import { ImageResponse } from "next/og"
import { Scale } from "lucide-react"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "linear-gradient(to bottom right, #1e293b, #0f172a)", // from-slate-800 to-slate-900
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Scale style={{ width: "60%", height: "60%" }} />
    </div>,
    {
      ...size,
    },
  )
}
