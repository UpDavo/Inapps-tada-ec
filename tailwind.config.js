/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#44189b",

          secondary: "#ee98f9",

          accent: "#6d7201",

          neutral: "#2C2230",

          "base-100": "#282C48",

          info: "#70BED2",

          success: "#80E5C0",

          warning: "#F8C449",

          error: "#FB4946",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
