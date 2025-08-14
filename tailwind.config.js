/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx,mdx}','./components/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--brand-primary)', // #EE3594
        navy: 'var(--brand-navy)',       // #21396F
        teal: 'var(--brand-teal)',       // #3FC1D1
      },
      boxShadow: {
        'elev-1': '0 2px 8px rgba(0,0,0,.06)',
        'elev-2': '0 6px 18px rgba(0,0,0,.12)',
      }
    }
  },
  plugins: []
}
