import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Base padding for small screens
        sm: "2rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    container2: {
      center: true,
      padding: {
        DEFAULT: "1rem", // Base padding for small screens
        sm: "2rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      screens: {
        sm: "320px",
        md: "384px",
        lg: "512px",
        xl: "640px",
        "2xl": "700px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
        anton: ["var(--font-anton)"],
        plus_jakarta: ["var(--font-jakarta)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blue: {
          50: "#f0f7ff",
          100: "#e0eefe",
          200: "#b9ddfe",
          300: "#7cc2fd",
          400: "#36a4f9",
          500: "#0c87eb",
          600: "#0068c9",
          700: "#0054a3",
          800: "#064886",
          900: "#0a3c6f",
        },
        orange: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdba8",
          300: "#ffc070",
          400: "#ff9a36",
          500: "#ff7d0e",
          600: "#f25c05",
          700: "#c93e06",
          800: "#9f300d",
          900: "#7e290f",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        body: [
          "18px",
          {
            fontWeight: "400",
            lineHeight: "27px",
            letterSpacing: "0%",
          },
        ],
        h1: [
          "36px",
          {
            fontWeight: "600",
            lineHeight: "100%",
            letterSpacing: "0%",
          },
        ],
        h2: [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "100%",
            letterSpacing: "0%",
          },
        ],
        h3: [
          "16px",
          {
            fontWeight: "500",
            lineHeight: "100%",
            letterSpacing: "0%",
          },
        ],
        h4: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "100%",
            letterSpacing: "0%",
          },
        ],
      },
      textColor: {
        body: "[#242628]",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
