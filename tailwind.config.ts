import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
  safelist: [
    // adicione padrões de classes dinâmicas que seu app cria em runtime
    { pattern: /bg-(red|green|orange)-\d{3}/ },
    { pattern: /text-(red|green|orange)-\d{3}/ },
    { pattern: /border-(red|green|orange)-\d{3}/ },
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
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
      },
      fontSize: {
        'hero': 'var(--font-size-hero)',
        'title': 'var(--font-size-title)',
        'subtitle': 'var(--font-size-subtitle)',
        'body': 'var(--font-size-body)',
      },
      boxShadow: {
        'rebel': 'var(--shadow-rebel)',
        'glow': 'var(--shadow-glow)',
        'electric': 'var(--shadow-electric)',
      },
      backgroundImage: {
        'rebel-gradient': 'var(--gradient-rebel)',
        'power-gradient': 'var(--gradient-power)',
        'glow-gradient': 'var(--gradient-glow)',
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
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.5)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.8)" },
        },
        "slide-diagonal": {
          from: { transform: "translateX(-100%) translateY(100%)", opacity: "0" },
          to: { transform: "translateX(0) translateY(0)", opacity: "1" },
        },
        "counter-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-slide-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s infinite",
        "slide-diagonal": "slide-diagonal 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "counter-up": "counter-up 0.6s ease-out",
        "fade-slide-up": "fade-slide-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
