import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Navy (from logo) - minimal use
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1B365D', // Logo navy
        },
        // Brand Orange (from logo) - VERY minimal accent only
        secondary: {
          50: '#fff4ed',
          100: '#ffe4d1',
          200: '#ffc9a3',
          300: '#ffa76a',
          400: '#ff8031',
          500: '#F26722', // Logo orange - use sparingly!
          600: '#d44d0c',
          700: '#b13a0b',
          800: '#8f2f0f',
          900: '#752910',
        },
        // Brand Cyan (from logo) - subtle accent
        accent: {
          50: '#e6f7fc',
          100: '#b8e8f5',
          200: '#8ad9ee',
          300: '#5ccae7',
          400: '#2ebce0',
          500: '#00A8E1', // Logo cyan
          600: '#0087b8',
          700: '#00668a',
          800: '#00455c',
          900: '#00242e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
