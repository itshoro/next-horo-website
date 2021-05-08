module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        foxfire: "hsl(348deg 91% 50%)",
        ember: "hsl(331deg 88% 46%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
