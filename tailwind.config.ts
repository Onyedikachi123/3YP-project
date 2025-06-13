// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "sans-serif"],
      },
      maxWidth: {
        custom: "769px",
      },
    },
  },
  plugins: [],
};

export default config;
