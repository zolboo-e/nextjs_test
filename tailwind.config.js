/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#ea3a44",
        },
        // dark: {
        //   ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
        //   primary: "#60a5fa",
        // },
      },
    ],
  },
};
