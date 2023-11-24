/** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    dark: "#1b1b1b",
                    light: "#e1dccd",
                    accent: "#52d", 
                    accentDark: "#fc7",
                    gray: "#747474",
                    goldenLight: "#fadcb9",
                    goldenDark: "#a08c78",
                },
                fontFamily: {
                    mr: ["var(--font-mr)"],
                    in: ["var(--font-in)"],
                    sx: ["var(--font-sx)"],
                },
                screens: {
                    sxl: "1180px",
                    xs: "480px",
                }
            },
        },
        plugins: [
            require('@tailwindcss/forms'),
            require('@tailwindcss/typography'),
        ],
    }



