/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["backdrop-blur", "backdrop-filter", "bg-glass"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#2E2E2E",
      },
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.1)",
      },
      backdropFilter: {
        glass: "blur(10px)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
