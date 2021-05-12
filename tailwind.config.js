module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        foxfire: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(348deg,91%,50%,${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(348deg,91%,50%,${opacityVariable})`;
          }
          return `hsl(348deg,91%,50%)`;
        },
        ember: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(331deg,88%,46%,${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `hsla(331deg,88%,46%,${opacityVariable})`;
          }
          return `hsl(331deg,88%,46%)`;
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
