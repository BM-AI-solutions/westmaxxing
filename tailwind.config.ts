import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        background: "hsl(var(--background))", // Will be dark
        foreground: "hsl(var(--foreground))", // Will be light
        primary: {
          DEFAULT: "hsl(var(--primary))", // Fiery orange/red
          foreground: "hsl(var(--primary-foreground))", // Dark or light contrast
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Muted red/orange or dark gray
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Bright, intense red
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Dark gray, low saturation
          foreground: "hsl(var(--muted-foreground))", // Lighter gray
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Deep charcoal or dark red
          foreground: "hsl(var(--accent-foreground))", // Contrasting highlight (e.g., electric blue or gold)
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Dark background
          foreground: "hsl(var(--popover-foreground))", // Light text
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Slightly lighter dark background
          foreground: "hsl(var(--card-foreground))", // Light text
        },
        // --- Infernal Palette ---
        infernal: {
          black: "#0a0a0a", // Deepest black
          charcoal: "#1c1c1e", // Dark charcoal
          ash: "#3a3a3c", // Dark gray
          ember: "#ff4500", // Bright orange-red (Orangered)
          flame: "#ff6347", // Lighter red-orange (Tomato)
          smoke: "#84848c", // Muted gray for text/secondary elements
          soulfire: "#00ffff", // Accent: Electric Cyan/Blue (like soul fire)
          gold: "#ffd700", // Accent: Gold/Yellow
        }
        // --- End Infernal Palette ---
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
        // --- Add subtle pulse/glow animations ---
        "subtle-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".85" },
        },
        "subtle-glow": {
           "0%, 100%": { textShadow: "0 0 2px transparent", filter: "brightness(1)" },
           "50%": { textShadow: "0 0 5px hsl(var(--primary) / 0.5)", filter: "brightness(1.2)"},
        }
        // --- End animations ---
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-pulse": "subtle-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "subtle-glow": "subtle-glow 4s ease-in-out infinite",
      },
       // --- Optional: Add custom font ---
      // fontFamily: {
      //   sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
      //   display: ["var(--font-display)", "Your Infernal Font", "sans-serif"] // Example
      // },
      // --- Optional: Add text shadow / glow utilities ---
      textShadow: {
        'sm': '0 1px 2px var(--tw-shadow-color)',
        'DEFAULT': '0 2px 4px var(--tw-shadow-color)',
        'lg': '0 8px 16px var(--tw-shadow-color)',
        'glow-primary-xs': '0 0 3px hsl(var(--primary) / 0.7)',
        'glow-primary-sm': '0 0 6px hsl(var(--primary) / 0.6)',
        'glow-primary-md': '0 0 10px hsl(var(--primary) / 0.5)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')], // Added typography plugin
} satisfies Config

export default config