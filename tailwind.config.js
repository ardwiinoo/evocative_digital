/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          25: "#FAFAFA",
          50: "#F5F5F5",
          100: "#F0F0F0",
          150: "#EBEBEB",
          200: "#E0E0E0",
          250: "#C7C7C7",
          300: "#B3B3B3",
          350: "#949494",
          400: "#8A8A8A",
          450: "#616161",
          500: "#424242",
          550: "#3D3D3D",
          600: "#333333",
          700: "#292929",
          800: "#1F1F1F",
          900: "#0F0F0F",
        },
        primary: {
          100: "#AAFEF4",
          200: "#80FDEF",
          300: "#55FDEA",
          400: "#2BFCE4",
          500: "#00FCDF",
          600: "#00A895",
          700: "#007E70",
          800: "#00544A",
          900: "#00322D",
        },
        secondary: {
          100: "#AEADFF",
          200: "#9492FF",
          300: "#7977FF",
          400: "#5E5CFF",
          500: "#4E4DD4",
          600: "#3F3DAA",
          700: "#5E5CFF",
          800: "#2F2E80",
          900: "#1F1F55",
        },
      },
      fontFamily: {
        poopins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
