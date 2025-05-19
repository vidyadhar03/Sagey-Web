/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'rgb(var(--primary-blue))',
        'secondary-blue': 'rgb(var(--secondary-blue))',
        'accent-blue': 'rgb(var(--accent-blue))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 