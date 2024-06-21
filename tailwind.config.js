/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
            primary: '#833586',    
          }},
    },
    plugins: [require("@tailwindcss/forms")],
};
