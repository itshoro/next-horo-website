module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.tsx",
  ],
  darkMode: "media",
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "2.5rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "6rem",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            a: {
              color: "#F686B5",
            },
            h1: {
              color: "#fff",
              "font-weight": 600,
            },
            em: {
              "font-family": "Caveat",
              "font-size": "1.1em",
              "padding-right": "0.1rem",
            },
          },
        },
      },
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
        foreground: "var(--foreground)",
        background: "var(--background)",
        skeleton_background: "var(--skeleton_background)",
        skeleton_foreground: "var(--skeleton_foreground)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
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
  plugins: [require("@tailwindcss/typography")],
};
