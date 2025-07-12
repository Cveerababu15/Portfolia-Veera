tailwind.config = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        spin_slow: 'spin 6s linear infinite'
      },
      colors: {
        lightHover: '#fcf4ff',
        darkTheme: '#11001f',
        darkHover: '#11001f'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        ovo: ['Ovo', 'serif']
      }
    }
  },
  darkMode: 'selector'
}
