import type { Config } from "tailwindcss";
import presetTopazReact from "./src/preset/tailwind-preset-topaz-react";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [presetTopazReact],
};
export default config;
