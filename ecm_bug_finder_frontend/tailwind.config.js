module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1976D2",
        secondary: "#1565C0",
        accent: "#FF7043",
        background: "var(--color-background)",
        nav: "var(--color-nav)",
        sidebar: "var(--color-sidebar)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
