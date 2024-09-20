/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212529",
        whiteText: "#F8F9FA",
        darkText: "#343A40",
        bgDark: "#212529",
        bgWhite: "#F8F9FA",
        inputBg: "#E9ECEF",
        inputPlaceholder: "#6C757D",
        error: "#FF6A6A",
      },
      shadow: {
        "outline-dark": "2px 2px 2px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};
