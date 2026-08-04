import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        bg: '#0a0a0c',
        surface: '#141417',
        border: '#2a2a30',
        hairline: '#1e1e22',
        text: {
          primary: '#f3f1ec',
          secondary: '#c9c7c0',
          muted: '#8a8880'
        },
        accent: '#ff6a1a',
        accentSoft: '#ff8a4c',
        ring: '#ff6a1a'
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,.4), 0 6px 16px rgba(0,0,0,.4)',
        float: '0 6px 16px rgba(0,0,0,.5)'
      },
      borderRadius: {
        card: '12px',
        input: '10px',
        pill: '9999px'
      },
      letterSpacing: {
        micro: '0.08em',
        tiny: '0.02em'
      },
      keyframes: {
        'button-pop': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '40%': { transform: 'scale(0.96)', opacity: '0.96' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        'button-pop': 'button-pop 180ms ease-out'
      }
    }
  },
  plugins: [typography],
};

export default config;
