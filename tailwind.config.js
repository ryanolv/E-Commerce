/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        text: "rgba(233, 236, 239, 0.45)",
        hover: "rgba(233, 236, 239, 0.75)",
        secundary: "rgba(0, 0, 0, 0.3)",
      },
      shadow: {
        "outline-dark": "2px 2px 2px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};
