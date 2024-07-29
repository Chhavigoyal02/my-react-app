const colors = require('tailwindcss/colors');
module.exports = {
  content:["src/**/*.jsx"],
  theme: {
    extend: {
      padding:{
        "12.5":"50px",
      }
    },
    colors:{
      primary:{
        light:"rgb(245,148,148)",
        default:"rgb(255,81,81)",
        dark:"rgb(248,7,7)"
      },
      gray:{
        200:"rgb(244,245,246)",
        400:"rgb(209 213 219)",
      },
      white:colors.white,
      black:colors.black,
      slate:colors.slate,
    }
  },
  plugins: [],
}
