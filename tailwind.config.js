/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Usando valores HSL directamente
        primary: {
          50: 'hsl(24, 95%, 95%)',
          100: 'hsl(24, 95%, 90%)',
          200: 'hsl(24, 95%, 80%)',
          300: 'hsl(24, 95%, 70%)',
          400: 'hsl(24, 95%, 60%)',
          500: 'hsl(24, 95%, 50%)',
          600: 'hsl(24, 95%, 45%)',
          700: 'hsl(24, 95%, 40%)',
          800: 'hsl(24, 95%, 35%)',
          900: 'hsl(24, 95%, 30%)',
          950: 'hsl(24, 95%, 20%)',
        },
        secondary: {
          50: 'hsl(215, 25%, 95%)',
          100: 'hsl(215, 25%, 90%)',
          200: 'hsl(215, 25%, 80%)',
          300: 'hsl(215, 25%, 70%)',
          400: 'hsl(215, 25%, 60%)',
          500: 'hsl(215, 25%, 50%)',
          600: 'hsl(215, 25%, 40%)',
          700: 'hsl(215, 25%, 30%)',
          800: 'hsl(215, 25%, 25%)',
          900: 'hsl(215, 25%, 20%)',
          950: 'hsl(215, 25%, 15%)',
        },
        accent: {
          50: 'hsl(37, 98%, 95%)',
          100: 'hsl(37, 98%, 90%)',
          200: 'hsl(37, 98%, 80%)',
          300: 'hsl(37, 98%, 70%)',
          400: 'hsl(37, 98%, 60%)',
          500: 'hsl(37, 98%, 50%)',
          600: 'hsl(37, 98%, 45%)',
          700: 'hsl(37, 98%, 40%)',
          800: 'hsl(37, 98%, 35%)',
          900: 'hsl(37, 98%, 30%)',
          950: 'hsl(37, 98%, 20%)',
        },
        success: {
          50: 'hsl(142, 71%, 95%)',
          100: 'hsl(142, 71%, 90%)',
          200: 'hsl(142, 71%, 80%)',
          300: 'hsl(142, 71%, 70%)',
          400: 'hsl(142, 71%, 60%)',
          500: 'hsl(142, 71%, 50%)',
          600: 'hsl(142, 71%, 45%)',
          700: 'hsl(142, 71%, 40%)',
          800: 'hsl(142, 71%, 35%)',
          900: 'hsl(142, 71%, 30%)',
          950: 'hsl(142, 71%, 20%)',
        },
        // Colores para texto y fondos
        dark: {
          DEFAULT: 'hsl(222, 47%, 11%)',
          muted: 'hsl(215, 16%, 47%)',
        },
        light: {
          DEFAULT: 'hsl(0, 0%, 98%)',
          muted: 'hsl(210, 20%, 98%)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}