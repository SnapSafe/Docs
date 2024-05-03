/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // indigo-600
        primary: "#4f46e5",
        // stone-700
        secondary: "#44403c",
      },
    },
  },
  plugins: [],
};
