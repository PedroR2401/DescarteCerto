/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
      },
      colors: {
        padraoVerdeClaro: "#A9D091",
        branco: "#FFFFFF",
        padraoVerdeEscuro: '#364025',
        fundoBlocoVerde: "#8CA873",// aqui você coloca o código hex da cor que quiser
        fundoBlocoMarrom: "#CFBB9A",
      },},
  },
  plugins: [],
}

