# PrimeNG Red Theme Demo

A minimal Angular application showcasing a custom red theme for PrimeNG 20 with Tailwind CSS.

## Features

- ✅ **Custom Red Theme**: Complete red color palette for PrimeNG components
- ✅ **Tailwind CSS**: Utility-first CSS framework
- ✅ **PrimeNG 20**: Latest version with custom theming
- ✅ **Minimal Setup**: Clean, simple project structure
- ✅ **Storybook**: Component showcase (optional)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open Storybook (optional)
npm run storybook
```

## Project Structure

```
src/
├── app/
│   ├── app.component.*          # Main demo component
│   ├── app.config.ts           # App configuration
│   └── app.routes.ts           # Routing (minimal)
├── themes/
│   └── red-theme.ts            # Custom red theme configuration
└── styles.scss                 # Global styles with Tailwind
```

## Custom Theme

The red theme is defined in `src/themes/red-theme.ts` using PrimeUIX's `definePreset()` function. It includes:

- Complete red color palette (50-950 shades)
- Light and dark mode support
- All component states (hover, focus, active)
- Form fields, navigation, overlays, and more

## Technologies

- **Angular 20**: Latest Angular framework
- **PrimeNG 20**: UI component library
- **Tailwind CSS**: Utility-first CSS
- **PrimeUIX Themes**: Advanced theming system
- **Storybook**: Component development environment

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Storybook
npm run storybook
npm run storybook:build
```
