# Story Documentation Template

This template provides a consistent structure for documenting all UI library components in Storybook.

## Standard Template Structure

```typescript
const meta: Meta<ComponentName> = {
  title: "UI/ComponentName",
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: `
A [component type] component that wraps PrimeNG's [PrimeNG Component] with Tailwind CSS styling and design tokens.

**Features:**
- [Feature 1]
- [Feature 2]
- [Feature 3]
- Uses custom design tokens for consistent theming
- Fully accessible with PrimeNG's [component] functionality

**Design Tokens Used:**
- Colors: \`blue\`, \`green\`, \`neutral\` palette (adjust based on component)
- Border radius: \`brand-sm\`, \`brand-md\`, \`brand-lg\` (choose appropriate)
- Spacing: \`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\` (choose appropriate)
        `,
      },
    },
  },
  args: {
    // Default args
  },
  argTypes: {
    // Control definitions with descriptions
  },
  render: (args) => ({
    props: args,
    template: `
      <!-- Enhanced template with proper examples -->
    `,
  }),
  tags: ["autodocs"],
};
```

## Component Categories and Common Features

### Form Components

- **Components**: UiInputText, UiTextarea, UiDropdown, UiCheckbox, UiRadioButton, etc.
- **Common Features**: Size variants, disabled state, validation, placeholder support
- **Common Tokens**: `blue`, `neutral` palette, `brand-md` radius, `sm`/`md`/`lg` spacing

### Layout Components

- **Components**: UiCard, UiPanel, UiAccordion, UiTabs, etc.
- **Common Features**: Header/content slots, collapsible, template customization
- **Common Tokens**: `neutral` palette, `brand-lg` radius, `md`/`lg`/`xl` spacing

### Overlay Components

- **Components**: UiDialog, UiDrawer, UiToast, UiPopover, etc.
- **Common Features**: Position control, modal modes, closable, animation
- **Common Tokens**: `blue`/`neutral` palette, `brand-lg` radius, `lg`/`xl` spacing

### Data Components

- **Components**: UiTable, UiCarousel, UiGalleria, etc.
- **Common Features**: Template customization, pagination, selection
- **Common Tokens**: `neutral` palette, `brand-md` radius, `sm`/`md` spacing

### Feedback Components

- **Components**: UiBadge, UiTag, UiChip, UiMessage, UiProgressBar, etc.
- **Common Features**: Severity levels, size variants, dismissible
- **Common Tokens**: `blue`/`green` palette, `brand-sm`/`brand-md` radius, `xs`/`sm` spacing

## Example argTypes Patterns

### Size Control

```typescript
size: {
  control: 'select',
  options: ['sm', 'md', 'lg'],
  description: 'Component size',
},
```

### Severity Control

```typescript
severity: {
  control: 'select',
  options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger'],
  description: 'Color variant',
},
```

### Boolean Control

```typescript
disabled: {
  control: 'boolean',
  description: 'Disable component interaction',
},
```

### Text Control

```typescript
placeholder: {
  control: 'text',
  description: 'Placeholder text',
},
```

## Components Completed

✅ UiButton - Enhanced with full documentation  
✅ UiInputText - Enhanced with full documentation  
✅ UiDropdown - Enhanced with full documentation  
✅ UiCheckbox - Enhanced with full documentation  
✅ UiTextarea - Enhanced with full documentation  
✅ UiDialog - Enhanced with full documentation  
✅ UiCard - Enhanced with full documentation  
✅ UiTable - Enhanced with full documentation  
✅ UiBadge - Enhanced with full documentation

## Recently Enhanced Components

✅ UiTag - Enhanced with full documentation  
✅ UiChip - Enhanced with full documentation  
✅ UiTabs - Enhanced with full documentation  
✅ UiAccordion - Enhanced with full documentation  
✅ UiAutoComplete - Enhanced with full documentation  
✅ UiRadioButton - Enhanced with full documentation  
✅ UiToggleSwitch - Enhanced with full documentation
✅ UiDatePicker - Enhanced with full documentation
✅ UiSlider - Enhanced with full documentation

## Components Still Needing Documentation Updates

- UiPanel
- UiScrollPanel
- UiSteps
- UiStepper
- UiToast
- UiMessage
- UiCarousel
- UiGalleria
- UiImage
- UiImageCompare
- UiProgressBar
- UiProgressSpinner
- UiMeterGroup
- UiScrollTop
- UiConfirmDialog
- UiDrawer
- UiPopover (component)
- UiTooltip (directive)
- UiCascadeSelect
- UiFloatLabel
- UiIconField
- UiInputGroup
- UiInputMask
- UiInputNumber
- UiInputOtp
- UiKnob
- UiListbox
- UiMultiSelect
- UiSelect
- UiSelectButton
- UiSpeedDial
- UiSplitButton
- UiPaginator
