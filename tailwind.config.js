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
        darkslategray: {
          medium: "#797979",
          dark: "#333333",
        },
        darkslateblue: {
          light: "#f4f5fa",
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
