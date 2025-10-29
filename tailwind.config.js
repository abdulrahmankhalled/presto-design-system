/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // PRESTO Brand Colors
        presto: {
          // Primary Colors
          primary: {
            100: "var(--presto-primary-100)",
            200: "var(--presto-primary-200)",
            300: "var(--presto-primary-300)",
            400: "var(--presto-primary-400)",
            500: "var(--presto-primary-500)",
            600: "var(--presto-primary-600)",
            700: "var(--presto-primary-700)",
            800: "var(--presto-primary-800)",
            900: "var(--presto-primary-900)",
          },
          // Secondary Colors
          secondary: {
            100: "var(--presto-secondary-100)",
            200: "var(--presto-secondary-200)",
            300: "var(--presto-secondary-300)",
            400: "var(--presto-secondary-400)",
            500: "var(--presto-secondary-500)",
            600: "var(--presto-secondary-600)",
            700: "var(--presto-secondary-700)",
            800: "var(--presto-secondary-800)",
            900: "var(--presto-secondary-900)",
          },
          // Gray Colors
          gray: {
            100: "var(--presto-gray-100)",
            200: "var(--presto-gray-200)",
            300: "var(--presto-gray-300)",
            400: "var(--presto-gray-400)",
            500: "var(--presto-gray-500)",
            600: "var(--presto-gray-600)",
            700: "var(--presto-gray-700)",
            800: "var(--presto-gray-800)",
            900: "var(--presto-gray-900)",
          },
          // Semantic tokens
          "primary-semantic": "var(--presto-primary)",
          "primary-contrast": "var(--presto-primary-contrast)",
          "primary-hover": "var(--presto-primary-hover)",
          "primary-active": "var(--presto-primary-active)",
          "secondary-semantic": "var(--presto-secondary)",
          "secondary-contrast": "var(--presto-secondary-contrast)",
          "secondary-hover": "var(--presto-secondary-hover)",
          "secondary-active": "var(--presto-secondary-active)",
          "focus-ring": "var(--presto-focus-ring-color)",
          // Highlight colors
          "highlight-bg": "var(--presto-highlight-background)",
          "highlight-focus-bg": "var(--presto-highlight-focus-background)",
          "highlight-focus-color": "var(--presto-highlight-focus-color)",
          "highlight-color": "var(--presto-highlight-color)",
          // Surface colors
          surface: {
            0: "var(--presto-surface-0)",
            50: "var(--presto-surface-50)",
            100: "var(--presto-surface-100)",
            200: "var(--presto-surface-200)",
            300: "var(--presto-surface-300)",
            400: "var(--presto-surface-400)",
            500: "var(--presto-surface-500)",
            600: "var(--presto-surface-600)",
            700: "var(--presto-surface-700)",
            800: "var(--presto-surface-800)",
            900: "var(--presto-surface-900)",
            950: "var(--presto-surface-950)",
          },
          // Text colors
          text: {
            primary: "var(--presto-text-primary)",
            secondary: "var(--presto-text-secondary)",
            muted: "var(--presto-text-muted)",
            inverse: "var(--presto-text-inverse)",
          },
          // Border colors
          border: {
            light: "var(--presto-border-light)",
            medium: "var(--presto-border-medium)",
            strong: "var(--presto-border-strong)",
          },
        },
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      borderRadius: {
        // PRESTO Border Radius Tokens
        "presto-none": "var(--presto-radius-none)",
        "presto-xs": "var(--presto-radius-xs)",
        "presto-sm": "var(--presto-radius-sm)",
        "presto-md": "var(--presto-radius-md)",
        "presto-lg": "var(--presto-radius-lg)",
        "presto-xl": "var(--presto-radius-xl)",
        "presto-xxl": "var(--presto-radius-xxl)",
        // Legacy brand values
        "brand-sm": "0.25rem",
        "brand-md": "0.375rem",
        "brand-lg": "0.5rem",
        "brand-full": "9999px",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
