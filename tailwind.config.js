/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

  },
  
  daisyui: {
    themes: [
      {
        mytheme: {
          "info": "#2563eb",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

