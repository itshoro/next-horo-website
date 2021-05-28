module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        expand: "0 1 100%",
      },
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
        },
        offblack: "#1a1a1a",
      },
      keyframes: {
        skeleton: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "50%": {
            backgroundPosition: "200% 200%",
          },
          "100%": {
            backgroundPosition: "400% 400%",
          },
        },
      },
      animation: {
        skeleton: "skeleton 4s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-scroll-snap")],
};
