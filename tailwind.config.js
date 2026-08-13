/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        "secondary-background": "#111111",
        card: "#171717",
        border: "#27272A",
        "primary-text": "#FFFFFF",
        "secondary-text": "#A1A1AA",
        accent: "#8B5CF6", // Electric Purple
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
