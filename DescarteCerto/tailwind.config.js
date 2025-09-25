/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
         padraoVerdeClaro: "#A9D091",
        branco: "#FFFFFF", // aqui você coloca o código hex da cor que quiser
      },},
  },
  plugins: [],
}

