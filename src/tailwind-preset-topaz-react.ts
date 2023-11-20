import type { Config } from "tailwindcss";

export function presetTopazReact(): Config {
  return {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: ["class", '[data-mode="dark"]'],
    theme: {
      colors: {
        accent: {
          DEFAULT: "#22d3ee",
          600: "#06b6d4",
          700: "#0891b2",
        },
        primary: {
          DEFAULT: "#155e75",
          600: "#164e63",
          700: "#083344",
        },
        secondary: {
          DEFAULT: "#e2e8f0",
          600: "#cbd5e1",
          700: "#94a3b8",
        },
        negative: {
          DEFAULT: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
        dark: {
          DEFAULT: "#000",
          600: "#1f2937",
          700: "#111827",
        },
        light: {
          DEFAULT: "#fff",
          600: "#f3f4f6",
          700: "#e5e7eb",
        },
      },
    },
  };
}
export default presetTopazReact;
