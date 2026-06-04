import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#050C15",
        "bg-secondary": "#0A1628",
        "bg-surface": "#0F1E35",
        "accent-teal": "#00C7B1",
        "accent-gold": "#F5A623",
        "accent-green": "#2ECC71",
        "text-primary": "#F0F4FF",
        "text-secondary": "#8A9BB5",
        "border-color": "#1A2D4A",
        background: "#050C15",
        foreground: "#F0F4FF",
        primary: { DEFAULT: "#00C7B1", foreground: "#050C15" },
        secondary: { DEFAULT: "#0A1628", foreground: "#F0F4FF" },
        muted: { DEFAULT: "#0F1E35", foreground: "#8A9BB5" },
        accent: { DEFAULT: "#00C7B1", foreground: "#050C15" },
        destructive: { DEFAULT: "#EF4444", foreground: "#F0F4FF" },
        border: "#1A2D4A",
        input: "#1A2D4A",
        ring: "#00C7B1",
        card: { DEFAULT: "#0A1628", foreground: "#F0F4FF" },
        popover: { DEFAULT: "#0A1628", foreground: "#F0F4FF" },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        ethiopic: ["var(--font-ethiopic)", "serif"],
      },
      borderRadius: { card: "12px", modal: "24px", lg: "12px", md: "8px", sm: "6px" },
      boxShadow: {
        teal: "0 0 40px rgba(0,199,177,0.3)",
        "teal-sm": "0 0 20px rgba(0,199,177,0.2)",
        gold: "0 0 30px rgba(245,166,35,0.25)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
      animation: {
        "pulse-teal": "pulseTeal 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
      },
      keyframes: {
        pulseTeal: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(0,199,177,0.3)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 40px rgba(0,199,177,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
