module.exports = {
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        title: "#22C55E",
        hoverCard: "#16A34A",
        hoverIcon: "#F3F4F6",
        bgColor: "#0F172A",
        textColor: "#E2E8F0",
      },
    },
  },
  variants: {},
  plugins: [],
  content: ["./_site/**/*.{md,njk,sass}"],
};
