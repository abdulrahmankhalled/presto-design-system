import { definePreset } from '@primeuix/themes';

export const prestoTheme = definePreset({
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: 'var(--presto-primary)',
          contrastColor: 'var(--presto-primary-contrast)',
          hoverColor: 'var(--presto-primary-hover)',
          activeColor: 'var(--presto-primary-active)',
        },
        surface: {
          0: 'var(--presto-surface-0)',
          50: 'var(--presto-surface-50)',
          100: 'var(--presto-surface-100)',
          200: 'var(--presto-surface-200)',
          300: 'var(--presto-surface-300)',
          400: 'var(--presto-surface-400)',
          500: 'var(--presto-surface-500)',
          600: 'var(--presto-surface-600)',
          700: 'var(--presto-surface-700)',
          800: 'var(--presto-surface-800)',
          900: 'var(--presto-surface-900)',
          950: 'var(--presto-surface-950)',
        },
        highlight: {
          background: 'var(--presto-highlight-background)',
          focusBackground: 'var(--presto-highlight-focus-background)',
          color: 'var(--presto-highlight-color)',
          focusColor: 'var(--presto-highlight-focus-color)',
        },
        formField: {
          background: 'var(--presto-surface-0)',
          disabledBackground: 'var(--presto-surface-100)',
          filledBackground: 'var(--presto-surface-50)',
          filledHoverBackground: 'var(--presto-surface-50)',
          filledFocusBackground: 'var(--presto-surface-50)',
          borderColor: 'var(--presto-border-light)',
          hoverBorderColor: 'var(--presto-border-medium)',
          focusBorderColor: 'var(--presto-primary)',
          invalidBorderColor: '#ef4444',
          color: 'var(--presto-text-primary)',
          disabledColor: 'var(--presto-text-muted)',
          placeholderColor: 'var(--presto-text-muted)',
          invalidPlaceholderColor: '#ef4444',
          floatLabelColor: 'var(--presto-text-muted)',
          floatLabelFocusColor: 'var(--presto-primary)',
          floatLabelActiveColor: 'var(--presto-text-muted)',
          floatLabelInvalidColor: '#ef4444',
          iconColor: 'var(--presto-border-medium)',
          shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 87, 61, 0.05)',
        },
        text: {
          color: 'var(--presto-text-primary)',
          hoverColor: 'var(--presto-text-primary)',
          mutedColor: 'var(--presto-text-secondary)',
          hoverMutedColor: 'var(--presto-text-primary)',
        },
        content: {
          background: 'var(--presto-surface-0)',
          hoverBackground: 'var(--presto-surface-100)',
          borderColor: 'var(--presto-border-light)',
          color: 'var(--presto-text-primary)',
          hoverColor: 'var(--presto-text-primary)',
        },
        overlay: {
          select: {
            background: 'var(--presto-surface-0)',
            borderColor: 'var(--presto-border-light)',
            color: 'var(--presto-text-primary)',
          },
          popover: {
            background: 'var(--presto-surface-0)',
            borderColor: 'var(--presto-border-light)',
            color: 'var(--presto-text-primary)',
          },
          modal: {
            background: 'var(--presto-surface-0)',
            borderColor: 'var(--presto-border-light)',
            color: 'var(--presto-text-primary)',
          },
        },
        list: {
          option: {
            focusBackground: 'var(--presto-highlight-background)',
            selectedBackground: 'var(--presto-highlight-background)',
            selectedFocusBackground: 'var(--presto-highlight-focus-background)',
            color: 'var(--presto-text-primary)',
            focusColor: 'var(--presto-text-primary)',
            selectedColor: 'var(--presto-highlight-color)',
            selectedFocusColor: 'var(--presto-highlight-focus-color)',
            icon: {
              color: 'var(--presto-border-medium)',
              focusColor: 'var(--presto-primary)',
            },
          },
          optionGroup: {
            background: 'transparent',
            color: 'var(--presto-text-secondary)',
          },
        },
        navigation: {
          item: {
            focusBackground: 'var(--presto-highlight-background)',
            activeBackground: 'var(--presto-highlight-background)',
            color: 'var(--presto-text-primary)',
            focusColor: 'var(--presto-text-primary)',
            activeColor: 'var(--presto-text-primary)',
            icon: {
              color: 'var(--presto-border-medium)',
              focusColor: 'var(--presto-primary)',
              activeColor: 'var(--presto-primary)',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color: 'var(--presto-text-secondary)',
          },
          submenuIcon: {
            color: 'var(--presto-border-medium)',
            focusColor: 'var(--presto-primary)',
            activeColor: 'var(--presto-primary)',
          },
        },
      },
    },
  },
});
