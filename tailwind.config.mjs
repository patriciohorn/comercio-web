import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    letterSpacing: {
      tight: '-0.035em',
    },
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': `radial-gradient(
      circle at center center,
      rgb(12, 44, 156),
      rgb(14, 31, 101)
    );`,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-animated'),
  ],
};
