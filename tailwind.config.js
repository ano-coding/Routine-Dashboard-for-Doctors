/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        nunito: "Nunito",
        "dm-sans": "'DM Sans'",
      },
    },
  },
  plugins: [],
};
