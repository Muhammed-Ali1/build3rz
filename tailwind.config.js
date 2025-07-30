/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',     // Supabase dark background
        surface: '#1c1c1c',        // Card surface
        accent: '#3ecf8e',         // Supabase green
        textLight: '#f1f5f9',      // Light text
        textMuted: '#94a3b8'       // Muted text
      }
    },
  },
  plugins: [],
}

