# PRESTO Design System

A comprehensive, enterprise-grade design system built with Angular 18, Tailwind CSS, and modern web technologies. Inspired by Atlassian's design system but customized for Emerson's brand guidelines.

## 🚀 Features

- **Modern Design System**: Built with the latest Angular 18 and Tailwind CSS
- **Dark Mode Support**: Seamless theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint support
- **Accessibility First**: WCAG compliant with focus management and screen reader support
- **Performance Optimized**: Lazy loading, intersection observers, and smooth animations
- **Design Tokens**: Comprehensive color, typography, spacing, and component tokens
- **Component Library**: Reusable UI components with consistent design patterns

## 🎨 Design Philosophy

PRESTO follows Emerson's design principles while maintaining the professional, clean aesthetic of enterprise design systems. We believe in:

- **Clarity**: Clear visual hierarchy and intuitive user experiences
- **Consistency**: Unified design language across all platforms
- **Accessibility**: Inclusive design that works for everyone
- **Performance**: Fast, responsive interfaces that delight users
- **Maintainability**: Clean, documented code that's easy to extend

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 18 (Standalone Components)
- **Styling**: Tailwind CSS with custom design tokens
- **Typography**: Inter font family for optimal readability
- **Icons**: Heroicons for consistent iconography
- **Build Tool**: Angular CLI with modern bundling
- **Package Manager**: npm with lockfile for reproducible builds

## 📁 Project Structure

```
presto-design-system/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── header/          # Main navigation header
│   │   │   │   ├── navigation/      # Sidebar navigation
│   │   │   │   └── main-content/    # Main content area
│   │   │   └── shared/              # Reusable components
│   │   ├── services/
│   │   │   ├── theme.service.ts     # Theme management
│   │   │   └── intersection.service.ts # Scroll animations
│   │   └── app.component.*          # Root component
│   ├── styles.scss                  # Global styles and tokens
│   └── main.ts                      # Application entry point
├── tailwind.config.js               # Tailwind configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

## 🎯 Design Tokens

### Colors

Our color system is built around Emerson's brand palette with semantic variations:

- **Primary**: Blue tones for main actions and branding
- **Secondary**: Neutral grays for text and backgrounds
- **Accent**: Orange tones for highlights and CTAs
- **Semantic**: Success, warning, and error states
- **Surface**: Background and container colors

### Typography

- **Font Family**: Inter (Google Fonts)
- **Scale**: 12px to 96px with consistent line heights
- **Weights**: 100-900 with optimized readability
- **Hierarchy**: Display, heading, body, and caption styles

### Spacing

- **Base Unit**: 4px (0.25rem)
- **Scale**: xs (4px) to 4xl (96px)
- **Grid**: 8px grid system for consistent layouts

### Components

- **Cards**: Elevated surfaces with hover effects
- **Buttons**: Primary, secondary, and accent variants
- **Forms**: Accessible input components
- **Navigation**: Responsive navigation patterns

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 18+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd presto-design-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:4200`

### Build Commands

```bash
# Development build
npm run build

# Production build
npm run build --prod

# Watch mode
npm run watch

# Run tests
npm test
```

## �� Customization

### Theme Configuration

The design system supports both light and dark themes. Customize themes in `src/styles.scss`:

```scss
:root {
  --color-primary-500: #your-brand-color;
  --color-surface-primary: #your-background;
  // ... more customizations
}
```

### Tailwind Configuration

Extend Tailwind's default theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': {
          500: '#your-color',
          // ... more variations
        }
      }
    }
  }
}
```

### Component Styling

Components use CSS custom properties for theming. Override styles by targeting the component's CSS classes:

```scss
.card {
  --card-background: #custom-color;
  --card-border: #custom-border;
}
```

## 📱 Responsive Design

The design system is built mobile-first with these breakpoints:

- **xs**: 0px - 639px (Mobile)
- **sm**: 640px - 767px (Large Mobile)
- **md**: 768px - 1023px (Tablet)
- **lg**: 1024px - 1279px (Desktop)
- **xl**: 1280px+ (Large Desktop)

## ♿ Accessibility

- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** optimization
- **Focus management** and visible focus indicators
- **High contrast** mode support
- **Reduced motion** preferences respected

## 🎭 Animation System

- **Intersection Observer**: Lazy loading animations
- **CSS Transitions**: Smooth state changes
- **Performance**: Hardware-accelerated animations
- **Accessibility**: Respects user motion preferences

## 🔧 Development Guidelines

### Component Structure

```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  // Component logic
}
```

### Styling Conventions

- Use CSS custom properties for theming
- Follow BEM methodology for component classes
- Leverage Tailwind utilities for layout
- Custom CSS for complex interactions

### State Management

- Use Angular services for shared state
- Implement OnPush change detection where possible
- Unsubscribe from observables in ngOnDestroy

## 🧪 Testing

```bash
# Unit tests
npm test

# E2E tests
npm run e2e

# Test coverage
npm run test:coverage
```

## 📚 Documentation

- **Component Library**: Interactive component examples
- **Design Tokens**: Complete token reference
- **Guidelines**: Usage and best practices
- **Accessibility**: WCAG compliance guide

## 🤝 Contributing

1. Follow the established code style
2. Write tests for new features
3. Update documentation
4. Ensure accessibility compliance
5. Test across different devices and browsers

## 📄 License

This project is proprietary to Emerson. All rights reserved.

## 🆘 Support

For questions or issues:

- **Design Questions**: Contact the design team
- **Technical Issues**: Create an issue in the repository
- **Feature Requests**: Submit through the appropriate channels

## 🔄 Version History

- **v1.0.0**: Initial release with core components
- **v1.1.0**: Dark mode and accessibility improvements
- **v1.2.0**: Performance optimizations and new components

---

Built with ❤️ by the Emerson Design & Engineering teams
