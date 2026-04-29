import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#03032e', 900: '#06063f', 800: '#0a0a55' },
        blue: { brand: '#027fff', light: '#0a8fff' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(2,127,255,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(2,127,255,0.6)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
