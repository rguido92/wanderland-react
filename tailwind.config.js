/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta pastel atardecer
        primary: "#FF6B6B",      // Rosa coral pastel
        secondary: "#FFA07A",    // Salmón pastel
        accent: "#FFD93D",       // Amarillo pastel
        warm: "#FFAA5A",         // Durazno pastel
        sky: "#87CEEB",          // Azul cielo pastel
        purple: "#D4A5FF",       // Púrpura pastel
        cream: "#FFF8F0",        // Crema muy pálido
        dark: "#2C2C2C",         // Gris oscuro para texto
      },
    },
  },
  plugins: [],
}