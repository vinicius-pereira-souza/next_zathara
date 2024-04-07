/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        KaiseiOpti: "'Kaisei Opti', serif",
      },
      colors: {
        themeDarkPage: "#111212",
        "dark-grey": "#171818",
        "light-grey": "#F5F5F5",
        "medium-gray": "#1F1F1F",
        "content-navbar-light": "#F3F4F6",
        "dark-blue": "#111827",
        "gray-550": "#33363F",
        "gray-320": "#595959",
        "blue-550": "#3DA0D1",
        "white-200": "#EFEFEF",
        "white-145": "#D2D2D2",
      },
    },
  },
  plugins: [],
};
