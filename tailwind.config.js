/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "*.{html,js}"],
  theme: {
    fontFamily: {
      'VT323': ['VT323', 'monospace'],
    },
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: '2rem',
      // default breakpoints but with 40px removed
      screens: {
        // sm: '0px',
        // md: '0px',
        // lg: '0px',
        // xl: '0px',
        // '2xl': '0px',
      },
    },
    extend: {},
  },
  plugins: [],
}
