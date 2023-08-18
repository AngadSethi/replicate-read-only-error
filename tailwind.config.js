/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-safelist-generator')({
      patterns: [
        'text-{colors}',
        'border-{borderWidth}',
        '{screens}:gap-{gap}',
      ],
    }),
  ],
}

