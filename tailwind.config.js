/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22222A',
        secondary: '#EDB183',
        accent: '#8CBCB9',
      },
      backgroundImage: {
        blueTech: 'url("/blue-tech.jpg")',
        circuit: 'url("/circuit.png")',
        lines: 'url("/lines.png")',
        explosion: 'url("/bg-explosion.png")',
        jesse: 'url("/jesse3.png")',
        code: 'url("/bg-code.jpg")',
        tech: 'url("/bg-tech.jpg")',
        glass: 'url("/bg-glass.jpg")',
        light: 'url("/bg-light.jpg")',
        circles1: 'url("/circles1.png")',
        circles2: 'url("/circles2.png")',
        shapes: 'url("/falling-shapes.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
