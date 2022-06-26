module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#292929",
        content: "#1d1d1d",
        text: "#e5e5e5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
