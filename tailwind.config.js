/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
     "./index.html",
  ],
  
  theme: {
    extend: {

      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Google:["Sixtyfour", "sans-serif"],
        Glitch:["Rubik Glitch Pop"],
        Rye:["Rye",'serif'],
        Robot:["'Roboto Slab", "serif"],

       },
    },
  },
  plugins: [],
}

