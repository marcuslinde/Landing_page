import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        morph: {
          '0%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
          '33%': { borderRadius: '48% 52% 45% 55% / 63% 37% 63% 37%' },
          '66%': { borderRadius: '64% 36% 55% 45% / 45% 55% 45% 55%' },
          '100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }
        },
        morphSlow: {
          '0%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' },
          '33%': { borderRadius: '48% 52% 45% 55% / 63% 37% 63% 37%' },
          '66%': { borderRadius: '64% 36% 55% 45% / 45% 55% 45% 55%' },
          '100%': { borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }
        },
        float: {
          'from': { transform: 'translateY(0px)' },
          'to': { transform: 'translateY(-8px)' }
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(8px, -4px)' }
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        morphSlow: 'morph 20s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite alternate',
        drift: 'drift 8s ease-in-out infinite'
      },
      // ... (rest of your config is the same)
      colors: {
        // Theme colours are HSL channels (see src/index.css) so opacity
        // modifiers such as bg-primary/15 work correctly.
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        },
        hero: {
          DEFAULT: "var(--hero-bg)",
          text: "var(--hero-text)",
          blob: "var(--hero-blob-bg)",
          trustMobile: "var(--hero-trust-bg-mobile)",
          trustDesktop: "var(--hero-trust-bg-desktop)"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Rubik", "sans-serif"]
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}

export default config