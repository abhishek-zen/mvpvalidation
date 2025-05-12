import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      heading: [
        "Satoshi",
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      mono: [
        "Fira Mono",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "monospace",
      ],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          foreground: "#ffffff",
          light: "#3b82f6", // blue-500
          dark: "#1d4ed8", // blue-700
        },
        secondary: {
          DEFAULT: "#6d28d9", // purple-700
          foreground: "#ffffff",
          light: "#8b5cf6", // purple-500
          dark: "#5b21b6", // purple-800
        },
        accent: {
          DEFAULT: "#f59e42", // orange-400
          foreground: "#1c1917",
        },
        success: {
          DEFAULT: "#22c55e", // green-500
          foreground: "#fff",
        },
        warning: {
          DEFAULT: "#fbbf24", // amber-400
          foreground: "#1c1917",
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          foreground: "#fff",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontSize: {
        "xs": ["0.75rem", { lineHeight: "1.1" }],
        "sm": ["0.875rem", { lineHeight: "1.25" }],
        "base": ["1rem", { lineHeight: "1.5" }],
        "lg": ["1.125rem", { lineHeight: "1.6" }],
        "xl": ["1.25rem", { lineHeight: "1.6" }],
        "2xl": ["1.5rem", { lineHeight: "1.3" }],
        "3xl": ["1.875rem", { lineHeight: "1.25" }],
        "4xl": ["2.25rem", { lineHeight: "1.15" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.05" }],
      },
      spacing: {
        px: "1px",
        0: "0px",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.03)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px 0 rgb(0 0 0 / 0.06)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.13), 0 4px 6px -2px rgb(0 0 0 / 0.12)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.18), 0 8px 10px -6px rgb(0 0 0 / 0.18)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.23)",
        "focus": "0 0 0 3px #2563eb33",
      },
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      transitionDuration: {
        DEFAULT: "150ms",
        fast: "75ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease": "ease",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in forwards",
        "slide-down": "slide-down 0.4s cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
