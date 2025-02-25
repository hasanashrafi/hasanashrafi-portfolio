/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    colors: {
      background: {
        light: "var(--background-light)",
        dark: "var(--background-dark)",
      },
      foreground: {
        light: "var(--foreground-light)",
        dark: "var(--foreground-dark)",
      },
    },
  },
},
  darkMode: "class", // or "media" (default)
  plugins: [],
};