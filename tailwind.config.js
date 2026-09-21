/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          dark: '#3A2415',
          DEFAULT: '#52341F',
          light: '#7A4F30',
          accent: '#A0683F',
        },
        charcoal: {
          DEFAULT: '#171512',
          deep: '#0F0E0C',
          card: '#1F1C18',
          border: '#332D26',
          hover: '#292520',
        },
        beige: {
          DEFAULT: '#E8D8BD',
          light: '#F4EADA',
          dark: '#D5C09F',
          muted: '#C4AE8B',
        },
        fire: {
          DEFAULT: '#E87524',
          glow: '#FFA347',
          deep: '#C2570E',
          accent: '#FF5722',
        },
        cream: {
          DEFAULT: '#FAF8F3',
          pure: '#FFFFFF',
          muted: '#ECE7DC',
        },
        forest: {
          DEFAULT: '#2D4A3E',
          light: '#3C6454',
          dark: '#1D322A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-fire': '0 0 25px -5px rgba(232, 117, 36, 0.45)',
        'glow-fire-lg': '0 0 45px -5px rgba(232, 117, 36, 0.6)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 20px 40px -15px rgba(232, 117, 36, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'wood-pattern': "radial-gradient(rgba(232, 117, 36, 0.08) 1px, transparent 0)",
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'flame-flicker': 'flicker 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
