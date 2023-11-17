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
        softRed: 'hsl(10, 79%, 65%)',
        cyan: 'hsl(186, 34%, 60%)',
        darkBrown: 'hsl(25, 47%, 15%)',
        mediumBrown: 'hsl(28, 10%, 53%)',
        cream: ' hsl(27, 66%, 92%)',
        veryPaleOrange: 'hsl(33, 100%, 98%)',
      },
    },
  },
  plugins: [],
}
