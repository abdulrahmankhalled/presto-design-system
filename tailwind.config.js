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
          // green Colors (Green)
          green: {
            50: "var(--presto-green-50)",
            100: "var(--presto-green-100)",
            200: "var(--presto-green-200)",
            300: "var(--presto-green-300)",
            400: "var(--presto-green-400)",
            500: "var(--presto-green-500)",
            600: "var(--presto-green-600)",
            700: "var(--presto-green-700)",
            800: "var(--presto-green-800)",
            900: "var(--presto-green-900)",
          },
          // Warn Colors (Yellow)
          warn: {
            100: "var(--presto-yellow-100)",
            200: "var(--presto-yellow-200)",
            300: "var(--presto-yellow-300)",
            400: "var(--presto-yellow-400)",
            500: "var(--presto-yellow-500)",
            600: "var(--presto-yellow-600)",
            700: "var(--presto-yellow-700)",
            800: "var(--presto-yellow-800)",
            900: "var(--presto-yellow-900)",
          },
          // Help Colors (Fuchsia)
          help: {
            100: "var(--presto-fuchsia-100)",
            200: "var(--presto-fuchsia-200)",
            300: "var(--presto-fuchsia-300)",
            400: "var(--presto-fuchsia-400)",
            500: "var(--presto-fuchsia-500)",
            600: "var(--presto-fuchsia-600)",
            700: "var(--presto-fuchsia-700)",
            800: "var(--presto-fuchsia-800)",
            900: "var(--presto-fuchsia-900)",
          },
          // Danger Colors (Rose)
          danger: {
            100: "var(--presto-rose-100)",
            200: "var(--presto-rose-200)",
            300: "var(--presto-rose-300)",
            400: "var(--presto-rose-400)",
            500: "var(--presto-rose-500)",
            600: "var(--presto-rose-600)",
            700: "var(--presto-rose-700)",
            800: "var(--presto-rose-800)",
            900: "var(--presto-rose-900)",
          },
          // Info Colors (Sky)
          info: {
            50: "var(--presto-sky-50)",
            100: "var(--presto-sky-100)",
            200: "var(--presto-sky-200)",
            300: "var(--presto-sky-300)",
            400: "var(--presto-sky-400)",
            500: "var(--presto-sky-500)",
            600: "var(--presto-sky-600)",
            700: "var(--presto-sky-700)",
            800: "var(--presto-sky-800)",
            900: "var(--presto-sky-900)",
          },
          // Purple Colors
          purple: {
            100: "var(--presto-purple-100)",
            200: "var(--presto-purple-200)",
            300: "var(--presto-purple-300)",
            400: "var(--presto-purple-400)",
            500: "var(--presto-purple-500)",
            600: "var(--presto-purple-600)",
            700: "var(--presto-purple-700)",
            800: "var(--presto-purple-800)",
            900: "var(--presto-purple-900)",
          },
          // Pink Colors
          pink: {
            100: "var(--presto-pink-100)",
            200: "var(--presto-pink-200)",
            300: "var(--presto-pink-300)",
            400: "var(--presto-pink-400)",
            500: "var(--presto-pink-500)",
            600: "var(--presto-pink-600)",
            700: "var(--presto-pink-700)",
            800: "var(--presto-pink-800)",
            900: "var(--presto-pink-900)",
          },
          // Neutral Colors
          neutral: {
            100: "var(--presto-neutral-100)",
            200: "var(--presto-neutral-200)",
            300: "var(--presto-neutral-300)",
            400: "var(--presto-neutral-400)",
            500: "var(--presto-neutral-500)",
            600: "var(--presto-neutral-600)",
            700: "var(--presto-neutral-700)",
            800: "var(--presto-neutral-800)",
            900: "var(--presto-neutral-900)",
          },
          // Slate Colors
          slate: {
            100: "var(--presto-slate-100)",
            200: "var(--presto-slate-200)",
            300: "var(--presto-slate-300)",
            400: "var(--presto-slate-400)",
            500: "var(--presto-slate-500)",
            600: "var(--presto-slate-600)",
            700: "var(--presto-slate-700)",
            800: "var(--presto-slate-800)",
            900: "var(--presto-slate-900)",
          },
          // Indigo Colors
          indigo: {
            100: "var(--presto-indigo-100)",
            200: "var(--presto-indigo-200)",
            300: "var(--presto-indigo-300)",
            400: "var(--presto-indigo-400)",
            500: "var(--presto-indigo-500)",
            600: "var(--presto-indigo-600)",
            700: "var(--presto-indigo-700)",
            800: "var(--presto-indigo-800)",
            900: "var(--presto-indigo-900)",
          },
          // Primary Colors (White/Black)
          white: "var(--presto-white)",
          "white-50": "var(--presto-white-50)",
          "white-10": "var(--presto-white-10)",
          "white-0": "var(--presto-white-0)",
          black: "var(--presto-black)",
          "black-50": "var(--presto-black-50)",
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
      padding:{
        "presto-normal-padding-x": "12px" ,
        "presto-normal-padding-y": "8px",
        "presto-small-padding-x": "8px",
        "presto-small-padding-y": "4px",
        "presto-large-padding-x": "14px",
        "presto-large-padding-y": "12px",

      }
    },
  },
  plugins: [],
};