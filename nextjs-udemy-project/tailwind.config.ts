import type { Config } from "tailwindcss";

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
        customTextShadow : "rgba(248, 190, 42, 0.8)",
        customColor : "#ddd6cb",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'], // Add your font here
      },
      dropShadow: {
        custom: "0 0 0.75rem rgba(0, 0, 0, 0.5)", // Add your custom value here
      },
      backgroundImage: {
        customBg: "linear-gradient(90deg, #ff8a05, #f9b331)",
      },
    },
  },
  plugins: [],
} satisfies Config;
