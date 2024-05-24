/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "background-main": "#f4f4f5",
        darkOliveGreen: {
          100: "#f5f7f5",
          150: "#eaf2ea",
          175: "#E9F1E0",
          200: "rgba(58, 100, 59, 0.5)",
          dark: "#3A643B",
        },
        darkslategray: {
          light: "#E7E7EF",
          100: "#A0A0A0",
          200: "#828F9C",
          medium: "#797979",
          dark: "#333333",
          darkest: "#2E2F2E",
        },
        darkslateblue: {
          light: "#f4f5fa",
        },
        blue: {
          ice: "#ced8e0",
        },
        dimgray: "#646665",
      },
      fontFamily: {
        poppins: "Poppins",
        nunito: "Nunito",
        "dm-sans": "'DM Sans'",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
