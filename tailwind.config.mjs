/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          900: "#121212",
          800: "#1E1E1E",
          700: "#2E2E2E",
          400: "#A0A0A0",
          200: "#E0E0E0",
        },
        purple: {
          400: "#7E57C2",
          500: "#5E35B1",
        },
      },
    },
  },
  plugins: [],
};
