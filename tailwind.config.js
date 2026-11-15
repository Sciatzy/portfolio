/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D0F12",
        panel: "#14171F",
        amber: "#F59E0B"
      }
    }
  },
  plugins: []
};
