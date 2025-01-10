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
        lightblue: "#F9FAFF",
        navcolor: "#222222BF",
        navhover: "#D9D9D91A",
        borderColour: "#00000066",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(105.02deg, #012458 25.71%, #141E2D 74.29%)",
      },
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
