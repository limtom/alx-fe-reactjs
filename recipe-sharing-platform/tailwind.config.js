module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(232,140,48)", // Vibrant orange
          light: "rgb(236,164,91)", // Softer orange
        },
        neutral: {
          white: "rgb(248,247,246)", // Off-whiter
          800: "rgb(17,24,39)", // Dark navy (matches Tailwind's gray-900)
        },
        gray: {
          500: "rgb(127,133,145)", // Medium gray
          400: "rgb(150,156,165)", // Light-medium gray
        },
        orange: {
          500: "rgb(232,140,48)", // Primary orange
          400: "rgb(236,164,91)", // Light orange
        },
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
