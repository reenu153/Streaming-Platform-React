/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{html,js,jsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx',
        './src/hooks/**/*.{js,ts,jsx,tsx}',
        './index.html',
    ],
    theme: {
        colors: {
            black: '#000000',
            blue: '#1fb6ff',
            purple: '#7e5bef',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#13ce66',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            gray: '#8492a6',
            'gray-light': '#d3dce6',
            red: {
                DEFAULT: "#DC2626",
                light: "#F87171",
                dark: "#B91C1C",
              },
              white: {
                DEFAULT: "#FFFFFF",
                soft: "#FAFAFA",
              },
        },
        extend: {
            colors: {
              primary: {
                50: "#F5F3FF",
                100: "#EDE9FE",
                300: "#A78BFA",
                500: "#5B21B6",   // deep indigo core
                600: "#4C1D95",
                700: "#3B0764",   // near-black plum
              },
              
              secondary: {
                50: "#FAF5FF",
                100: "#F3E8FF",
                300: "#C084FC",
                500: "#7E22CE",   // rich plum
                600: "#6B21A8",
              },
              
         background: {
                base: "#09090B",    // near-black
                surface: "#111113", // card/panel bg
                elevated: "#1A1A1F", // modals, dropdowns
              },
              
              text: {
                primary: "#FFFFFF",
                secondary: "#A1A1AA",
                muted: "#52525B",
              },
              
              accent: {
                glow: "#7C3AED",   // purple glow/highlight
                hot: "#9333EA",    // hover states, badges
              },
        
                success: "#22C55E",
                warning: "#F59E0B",
                danger: "#EF4444",
              },
        
              borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
              },
        
              boxShadow: {
                card: "0 10px 25px rgba(0,0,0,0.08)",
                glow: "0 0 20px rgba(239,68,68,0.35)",
              },
        },
    },
    plugins: [],
}
