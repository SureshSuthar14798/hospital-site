import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf9f7",
          100: "#d5f1ec",
          200: "#afe3da",
          300: "#7ccfc4",
          400: "#49b5aa",
          500: "#23998f",
          600: "#177d75",
          700: "#14655f",
          800: "#13514d",
          900: "#123f3d"
        },
        ink: "#10213b",
        mist: "#f4f8fc"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(20, 101, 95, 0.14)",
        card: "0 10px 28px rgba(16, 33, 59, 0.08)"
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 20%, rgba(35,153,143,0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(124,207,196,0.2), transparent 32%), linear-gradient(135deg, rgba(255,255,255,0.98), rgba(237,249,247,0.95))"
      }
    }
  },
  plugins: []
};

export default config;
