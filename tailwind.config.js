export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        // SyncOne Logo Maroon / Burgundy (#5B0626)
        maroon: {
          50: '#FAF0F3',
          100: '#F5E1E7',
          200: '#EBC4CF',
          300: '#DC9AA9',
          400: '#C96B80',
          500: '#A83A53',
          600: '#871835',
          700: '#6E0D2A',
          800: '#5B0626', // Logo Primary Maroon
          900: '#42031B',
          950: '#2A0010',
        },
        // SyncOne Logo Honey Gold (#C88A24)
        gold: {
          50: '#FDFBF2',
          100: '#F8F2D7',
          200: '#F1E3AD',
          300: '#E7CD77',
          400: '#D8B244',
          500: '#C88A24', // Logo Primary Gold
          600: '#AA6E1B',
          700: '#855019',
          800: '#6E3F1A',
          900: '#5C3319',
          950: '#361A0B',
        },
        // Rich Wine Charcoal / Deep Dark Neutral (Replaces cold navy)
        navy: {
          50: '#FAF6F4',
          100: '#F2E8E4',
          200: '#E4D5CE',
          300: '#CEB9B0',
          400: '#9B7970',
          500: '#6E4B44',
          600: '#4D2A2B',
          700: '#3B1722',
          800: '#290A17',
          900: '#1F0611', // Deep Wine Black
          950: '#14020A',
        },
        // Teal alias remapped to Maroon/Gold tones for seamless fallback
        teal: {
          50: '#FDFBF2',
          100: '#F8F2D7',
          200: '#F1E3AD',
          300: '#E7CD77',
          400: '#D8B244',
          500: '#C88A24',
          600: '#871835',
          700: '#5B0626',
          800: '#42031B',
          900: '#2A0010',
        },
        ink: '#1F0611',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(91,6,38,0.06), 0 12px 32px -12px rgba(91,6,38,0.12)',
        lift: '0 2px 6px rgba(91,6,38,0.08), 0 24px 48px -16px rgba(91,6,38,0.18)',
        glow: '0 0 24px rgba(200,138,36,0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

