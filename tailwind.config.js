/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // Theme is now handled via @theme directive in CSS
  // This ensures compatibility with Tailwind v4
}
