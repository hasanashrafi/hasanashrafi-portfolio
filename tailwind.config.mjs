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
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white", 
          }
        }
      },
      animation: {
        typing: "typing 2s steps(1000)  alternate, blink .7s infinite"
      }

    },
  },



  darkMode: "class", // or "media" (default)
  plugins: [],
};