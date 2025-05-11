// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // light-theme overlay
        opalLight: 'rgb(243 244 246 / 0.6)',
        // dark-theme base
        spaceBlack: '#050514',
        // neon accents
        neonGreen: '#08ff9c',
        neonCyan:  '#17e7ff',
        neonPink:  '#ff3cac',
      },
    },
  },
  plugins: [],
}

export default config