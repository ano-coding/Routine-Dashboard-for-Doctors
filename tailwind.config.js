/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "background-main": "#f4f4f5",
        darkOliveGreen: {
          100: "#f5f7f5",
          200: "rgba(58, 100, 59, 0.5)",
          dark: "#3A643B",
        },
      },
      fontFamily: {
        poppins: "Poppins",
        nunito: "Nunito",
        "dm-sans": "'DM Sans'",
      },
    },
  },
  plugins: [],
};
