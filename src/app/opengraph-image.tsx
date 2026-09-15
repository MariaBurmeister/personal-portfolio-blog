import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Maria Burmeister — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Brand tokens from the home-page MB mark + wordmark. */
const GREEN = "#bbf7d0"; // green-200 — M / Maria
const PURPLE = "#9333ea"; // purple-600 — B / Burmeister / ring
const PURPLE_SOFT = "#d8b4fe"; // purple-300 — supporting line

/**
 * Share card built around the home-page mark: circular MB
 * (green M / purple B, open circle on the site gradient).
 */
export default async function OpenGraphImage() {
  const fontData = await readFile(
    join(process.cwd(), "src/assets/fonts/RubikMonoOne-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(105deg, #bbf7d0 0%, #c4b5fd 48%, #a855f7 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 72,
            padding: "0 72px",
            width: "100%",
          }}
        >
          {/* Home-page logo: open circle, green M + purple B */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 340,
              height: 340,
              borderRadius: 9999,
              border: `6px solid ${PURPLE}`,
              background: "transparent",
              boxShadow: `0 12px 28px rgba(147, 51, 234, 0.35)`,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Rubik Mono One",
                fontSize: 128,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                textShadow: "0 8px 18px rgba(88, 28, 135, 0.28)",
              }}
            >
              <span style={{ color: GREEN }}>M</span>
              <span style={{ color: PURPLE }}>B</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 20,
              maxWidth: 560,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Rubik Mono One",
                fontSize: 56,
                lineHeight: 1.08,
              }}
            >
              <span style={{ color: GREEN }}>Maria</span>
              <span style={{ color: PURPLE }}>Burmeister</span>
            </div>

            <div
              style={{
                display: "flex",
                width: 72,
                height: 4,
                borderRadius: 9999,
                background: "rgba(255, 255, 255, 0.7)",
              }}
            />

            <div
              style={{
                display: "flex",
                fontFamily: "Rubik Mono One",
                fontSize: 26,
                color: PURPLE_SOFT,
                letterSpacing: "0.04em",
              }}
            >
              Frontend Developer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Rubik Mono One",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
