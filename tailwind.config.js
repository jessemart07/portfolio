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
        blueTech: 'url("/bg-images/blue-tech.jpg")',
        circuit: 'url("/bg-images/circuit.png")',
        lines: 'url("/bg-images/lines.png")',
        explosion: 'url("/bg-images/bg-explosion.png")',
        jesse: 'url("/bg-images/jesse3.png")',
        code: 'url("/bg-images/bg-code.jpg")',
        tech: 'url("/bg-images/bg-tech.jpg")',
        glass: 'url("/bg-images/bg-glass.jpg")',
        light: 'url("/bg-images/bg-light.jpg")',
        site: 'url("/bg-images/site-bg.svg")',
        circles1: 'url("/graphics/circles1.png")',
        circles2: 'url("/graphics/circles2.png")',
        shapes: 'url("/graphics/falling-shapes.png")',
        circleStar: 'url("/graphics/circle-star.svg")',
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
